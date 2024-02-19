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
     
    
        const offsetX = Math.min(-95, p3.x);
        const offsetY = Math.max(0, p3.y -50);
    
        p1.x -= offsetX;
        p1.y += offsetY;
        p2.x -= offsetX;
        p2.y += offsetY;
        p3.x -= offsetX;
        p3.y += offsetY;
        
         
        const xc = (p1.x + p2.x + p3.x) / 3;
        const yc = (p1.y + p2.y + p3.y) / 3;

    const s = (sideA + sideB + sideC)/2; 
    const radius = Math.sqrt((s-sideA)*(s-sideB)*(s-sideC)/s);

  
    ctx.beginPath();
    ctx.arc(xc, yc, radius, 0, 2 * Math.PI); 
    ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(p1.x, canvas.height - p1.y);
        ctx.lineTo(p2.x, canvas.height - p2.y);
        ctx.lineTo(p3.x, canvas.height - p3.y);
        ctx.closePath();
    
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }
  
  }, [sideA, sideB, sideC, width, height])
 
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
