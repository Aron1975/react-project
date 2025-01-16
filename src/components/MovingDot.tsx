import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: (e.clientX-20)>800 ? 800 : e.clientX-19,
          y: e.clientY-118
        });
      }}
      style={{
        position: 'relative',
        width: '100%' ,
        height: '100%',
       /* width: '100vw',
        height: '100vh',*/
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 10,
        height: 10,
      }} />
    </div>
  );
}