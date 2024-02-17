import React, {useEffect, useRef} from 'react';

const MyTriangleCanvas = (props) => {
  const { sideA, sideB, sideC, angleA,
     angleB, angleC, width, height } = props;
  const canvasRef = useRef(null);
    console.log(angleA, angleB, angleC)
  useEffect(() => {
    if(canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const p1 = { x: 0, y: 0 };
        const p2 = { x: p1.x + sideA, y: p1.y };

        const angleBradians = (angleB * Math.PI) / 180;
        const angleCradians = (angleC * Math.PI) / 180;
        const p3 = {
          x: p1.x + sideB * Math.cos(angleBradians),
          y: p1.y + sideB * Math.sin(angleBradians),
        };
        // const p4 = {
        //   x: p1.x + sideC * Math.cos(angleCradians),
        //   y: p1.y + sideC * Math.sin(angleCradians),
        // };
    
        const offsetX = Math.min(-20, p3.x);
        const offsetY = Math.max(0, p3.y - 25);
    
        p1.x -= offsetX;
        p1.y += offsetY;
        p2.x -= offsetX;
        p2.y += offsetY;
        p3.x -= offsetX;
        p3.y += offsetY;
        // p4.x -= offsetX;
        // p4.y += offsetY;

        ctx.beginPath();
        ctx.moveTo(p1.x, canvas.height - p1.y);
        ctx.lineTo(p2.x, canvas.height - p2.y);
        ctx.lineTo(p3.x, canvas.height - p3.y);
        // ctx.lineTo(p3.x, canvas.height - p4.y);
        ctx.closePath();
    
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }
  
  }, [sideA, sideB, sideC, width, height])
 
  return (
    <canvas
    className='block'
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default MyTriangleCanvas;
