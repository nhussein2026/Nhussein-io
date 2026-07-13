import { useState, useEffect } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHoveringLink, setIsHoveringLink] = useState(false);
    // Only enable the custom cursor for precise pointers (mouse) when the user
    // hasn't asked to reduce motion — it's meaningless/harmful on touch + a11y.
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setEnabled(finePointer && !reducedMotion);
    }, []);

    useEffect(() => {
        if (!enabled) return undefined;
        const updatePosition = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
            setIsHoveringLink(event.target.tagName === 'A');
        };
        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: isHoveringLink ? '-17px' : '-7px',
                    left: isHoveringLink ? '-12.5px' : '-3px',
                    width: isHoveringLink ? '26px' : '7px',
                    height: isHoveringLink ? '26px' : '7px',
                    borderRadius: '50%',
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    backgroundColor: 'var(--accent)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    top: -20,
                    left: -15,
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    border: '1px solid var(--accent)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                }}
            />
        </>
    );
};

export default Cursor;
