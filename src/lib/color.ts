// Colour maths shared by scripts/check-contrast.mjs and the /styleguide page.
// OKLCH → sRGB follows CSS Color 4; contrast follows WCAG 2.2.

export type Oklch = [l: number, c: number, h: number];
export type Theme = Record<string, Oklch>;

/** Reads tokens.css into { light, dark }: every `--name: oklch(L C H)` in each theme block. */
export function parseTokens(css: string): { light: Theme; dark: Theme } {
  const darkStart = css.indexOf("@media (prefers-color-scheme: dark)");
  const roleStart = css.indexOf("/* Roles built from the tokens above");
  const parse = (text: string): Theme =>
    Object.fromEntries(
      [...text.matchAll(/--([\w-]+):\s*oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/g)].map((m) => [
        m[1]!,
        [Number(m[2]), Number(m[3]), Number(m[4])] as Oklch,
      ]),
    );
  return { light: parse(css.slice(0, darkStart)), dark: parse(css.slice(darkStart, roleStart)) };
}

function toLinear([L, C, h]: Oklch): number[] {
  const a = C * Math.cos((h * Math.PI) / 180);
  const b = C * Math.sin((h * Math.PI) / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map((v) => Math.min(Math.max(v, 0), 1));
}

const encode = (v: number) => (v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055);
const bytes = (c: Oklch) => toLinear(c).map((v) => Math.round(encode(v) * 255));

/** The 8-bit sRGB colour the browser paints, as #rrggbb. */
export const toHex = (c: Oklch) =>
  "#" +
  bytes(c)
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("");

function luminance(c: Oklch): number {
  const [r, g, b] = bytes(c).map((v) => {
    const s = v / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

/** WCAG contrast ratio, 1 to 21. */
export function contrast(a: Oklch, b: Oklch): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi! + 0.05) / (lo! + 0.05);
}

export const TEXT = 4.5; // WCAG 1.4.3, body text
export const UI = 3; // WCAG 1.4.11, controls and meaningful graphics

/** Every pair the site uses: [foreground, background, minimum, use]. */
export function contrastPairs(): [string, string, number, string][] {
  const pairs: [string, string, number, string][] = [];
  for (const bg of ["bg", "surface", "surface-raised"]) {
    pairs.push(["text", bg, TEXT, "body text"], ["text-muted", bg, TEXT, "secondary text"]);
    pairs.push(["accent", bg, TEXT, "links"], ["accent-hover", bg, TEXT, "links on hover"]);
    pairs.push(["border-strong", bg, UI, "control borders"], ["accent", bg, UI, "focus ring"]);
  }
  pairs.push(
    ["text-subtle", "bg", TEXT, "metadata"],
    ["text-subtle", "surface", TEXT, "metadata, code comments"],
    ["bg", "accent", TEXT, "primary button label"],
    ["bg", "accent-hover", TEXT, "primary button, hover"],
    ["text", "accent-soft", TEXT, "text on accent-soft (demo user turn)"],
    ["accent-text", "accent-soft", TEXT, "info text"],
    ["accent-text", "surface", TEXT, "code keywords"],
    ["bg", "text", TEXT, "tooltip"],
  );
  for (const s of ["success", "warning", "danger"]) {
    pairs.push(
      [`${s}-text`, `${s}-soft`, TEXT, `${s} message`],
      [`${s}-text`, "bg", TEXT, `${s} text`],
      [`${s}-text`, "surface", TEXT, "code tokens"],
      [s, "bg", UI, `${s} marker`],
      [s, "surface", UI, `${s} marker on surface`],
    );
  }
  for (let i = 1; i <= 6; i++) pairs.push([`cat-${i}`, "bg", UI, "chart series"]);
  for (const k of ["n3", "n2", "p2", "p3"])
    pairs.push([`div-${k}`, "bg", UI, "diverging, outer steps"]);
  // seq-1 … seq-3 and div ±1 sit close to the page on purpose (low values); charts that use
  // them carry the exact number in text, so colour is never the only signal (1.4.1).
  pairs.push(["seq-4", "bg", UI, "heatmap, top step"]);
  return pairs;
}
