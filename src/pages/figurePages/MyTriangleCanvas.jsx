import React, {useEffect, useRef} from 'react';

const MyTriangleCanvas = (props) => {
  const { sideA, sideB, sideC, angles, slide1, slide2, slide3,
      angleC, angleB, angleA } = props;
     const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  const p1 = { x: angles[2] - 20, y: angles[2] };
  const p2 = { x: p1.x + sideB, y: p1.y};

  const angleBradians = (angleC * Math.PI) / 180;

  const p3 = {
    x: p1.x + sideB * Math.cos(angleBradians),
    y: p1.y + sideB * Math.sin(angleBradians),
  };
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = 'white';
      ctx.font = '18px Arial';
      ctx.fillText('A', p1.x, p1.y - 2);
      ctx.fillText('B', p2.x, p2.y);
      ctx.fillText('C', p3.x, p3.y + 12);
  if(canvasRef.current && slide1) {

      ctx.fillStyle = 'white';
      ctx.font = '18px Arial';
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo((p2.x + p3.x) / 2, (p2.y + p3.y) / 2);

      ctx.moveTo((p1.x + p2.x) / 2 , (p1.y + p2.y) / 2 );
      ctx.lineTo(p3.x, p3.y);

      let m = (p2.y - p3.y) / (p2.x - p3.x) ;
      let c = p2.y - m * p2.x;

      let dx = p3.x; 
      let dy = m * dx + c;

      ctx.moveTo(p1.x, p1.y); 
      ctx.lineTo(dx, dy); 
 
      ctx.fillText('M',(p2.x + p3.x) / 2, (p2.y + p3.y) / 2 + 12);
      ctx.fillText('D', (p1.x + p2.x) / 2 , (p1.y + p2.y) / 2 - 2);
      ctx.fillText('h', dx + 5, dy / 1.6);
      ctx.stroke();

      } else if (canvasRef.current && slide2) {
        /// ВПИСАННАЯ
  
      const xc = (p1.x + p2.x + p3.x) / 3;
      const yc = (p1.y + p2.y + p3.y) / 3 ;
      const s = (sideA + sideB + sideC) / 2; 
      const radius = Math.sqrt((s-sideA)*(s-sideB)*(s-sideC)/s);
      ctx.beginPath();
      ctx.arc(xc, yc, radius, 0, 2 * Math.PI); 
      ctx.stroke();
 
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.stroke();
      ctx.closePath();
      ctx.stroke();

  } else if (canvasRef.current && slide3) {
      //// ОПИСАННАЯ
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.stroke();
      ctx.closePath();
      let cx = (p1.x + p2.x + p3.x) / 3;
      let cy = (p1.y + p2.y + p3.y) / 3;
      let radius = Math.hypot(p1.x - p2.x, p2.y - p3.y) / 2.3;
      console.log(radius)
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();
  }
  }, [])
  return (
    <canvas
    className='my_canvas'
      ref={canvasRef}
      width={300} 
      height={350}
    />
  );
};

export default MyTriangleCanvas;