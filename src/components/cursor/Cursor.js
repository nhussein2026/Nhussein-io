import { useState, useEffect } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const updatePosition = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
            if (event.target.tagName === 'A') {
                setIsHoveringLink(true);
            } else {
                setIsHoveringLink(false);
            }
        };
        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

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
                    backgroundColor: isHoveringLink ? '#66d9ed' : '#66d9ed',
                    pointerEvents: 'none',
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
                    border: isHoveringLink ? '1px solid #66d9ed' : '1px solid #66d9ed',
                    pointerEvents: 'none',
                }}
            />
        </>
    );
};

export default Cursor;
