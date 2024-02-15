import React, { useRef, useEffect } from 'react';

const TriangleCanvas = ({ width, height, vertices }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = "white";
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);
    vertices.forEach(vertex => {
      ctx.lineTo(vertex.x, vertex.y);
    });
    ctx.closePath();
    ctx.stroke();
  }, [vertices, width, height]);

  return (
      <div className='mt-5 ml-2 flex justify-center'>
        <canvas ref={canvasRef} width={width} height={height} />
      </div>
 );
};

export default TriangleCanvas;