import React, {useEffect, useRef} from 'react';

const MyTriangleCanvas = (props) => {
  const { sideA, sideB, sideC, sides,
     angleB, width, height } = props;
     const canvasRef = useRef(null);
     console.log(angleB);
     console.log(sideB);
useEffect(() => {
  
 if(canvasRef.current) {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  const p1 = { x: sides[0], y: sides[2] };
  const p2 = { x: p1.x + sideA, y: p1.y};

  const angleBradians = (angleB * Math.PI) / 180;
  console.log(Math.cos(angleBradians));

  const p3 = {
    x: p1.x + sideB * Math.cos(angleBradians),
    y: p1.y + sideB * Math.sin(angleBradians),
  };
console.log(p3)
  const xc = (p1.x + p2.x + p3.x) / 3;
  const yc = (p1.y + p2.y + p3.y) / 3 ;
  const s = (sideA + sideB + sideC) / 2; 
  const radius = Math.sqrt((s-sideA)*(s-sideB)*(s-sideC)/s);
  console.log(xc, yc, s, radius)
  ctx.beginPath();
  ctx.arc(xc, yc, radius, 0, 2 * Math.PI); 
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();

  ctx.lineWidth = 1;
  ctx.strokeStyle = 'white';
  ctx.stroke();
}
  }, [])

  return (
    <canvas
    className='my_canvas'
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default MyTriangleCanvas;