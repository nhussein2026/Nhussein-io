// Renders the preview image and app icons from their sources with headless Chrome.
// Run by hand after changing scripts/og-image.html or public/favicon.svg:
//   node scripts/render-images.mjs
// Needs Chrome or Chromium and Python 3 with Pillow (for favicon.ico).
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const chrome = ["google-chrome-stable", "google-chrome", "chromium", "chromium-browser"].find(
  (c) => {
    try {
      execFileSync("which", [c], { stdio: "ignore" });
      return true;
    } catch {
      return false;
    }
  },
);
if (!chrome) throw new Error("Chrome or Chromium not found");

const shot = (src, out, w, h) =>
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--default-background-color=00000000",
      `--window-size=${w},${h}`,
      `--screenshot=${root}${out}`,
      `file://${root}${src}`,
    ],
    { stdio: "ignore" },
  );

shot("scripts/og-image.html", "public/og-image.png", 1200, 630);
shot("scripts/icon.html", "public/apple-touch-icon.png", 180, 180);
shot("scripts/icon.html", "scripts/.icon-64.png", 64, 64);

execFileSync("python3", [
  "-c",
  "import sys;from PIL import Image;Image.open(sys.argv[1]).save(sys.argv[2],sizes=[(16,16),(32,32),(48,48)])",
  `${root}scripts/.icon-64.png`,
  `${root}public/favicon.ico`,
]);
execFileSync("rm", ["-f", `${root}scripts/.icon-64.png`]);
console.log("rendered og-image.png, apple-touch-icon.png, favicon.ico");
