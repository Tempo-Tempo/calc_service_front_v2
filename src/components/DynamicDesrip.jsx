import React, {useState } from 'react';
import MyTriangleCanvas from '../pages/figurePages/MyTriangleCanvas.jsx';
import MyButton from '../ui/MyButton.tsx';
import MyResultsItems from '../ui/MyResultsItems.jsx';

const Slider = () => {
    const result = JSON.parse(localStorage.getItem('result'));
    const [ transform, setTransform ] = useState(0);
    const styles = { transform:`translateX(${transform}px)`};
    let sides = [Number(result.a), Number(result.b), Number(result.c)].filter(s => s !== 0);
    sides.sort((a, b) => {
      return a - b;
   });
   let angles = [Number(result.angleA), Number(result.angleB), Number(result.angleC)].filter(s => s !== 0);
   angles.sort((a, b) => {
      return a - b;
   });
   let scale = 220 / sides[2];
   const prev = () => {
      setTransform(transform + 288)
      if(transform >= 0) setTransform(-576);
   }
   const next = () => {
      setTransform(transform - 288)
      if(transform < (-400)) setTransform(0);
   }
   return (
      <div className='slider'>
       <span className='arrow_slider'>
         <MyButton onClick={prev}>{'<'}</MyButton>
       </span>
          <ul className='text-left mb-2'>
            <div className='slide_panel'>
            <li className='wrapper_canvas' style={styles}>
                <MyTriangleCanvas angles={angles} scale={result.height} slide1={true} 
                  sideA={result.a * scale} 
                  sideB={result.b * scale} 
                  sideC={result.c * scale}
                  angleA={result.angleA}
                  angleB={result.angleB}
                  angleC={result.angleC} />          
            </li>
            <li className='wrapper_canvas' style={styles}>
               <MyTriangleCanvas angles={angles} scale={result.height} slide2={true} 
                  sideA={result.a * scale} 
                  sideB={result.b * scale} 
                  sideC={result.c * scale}
                  angleA={result.angleA}
                  angleB={result.angleB}
                  angleC={result.angleC} />
               </li>
            <li className='wrapper_canvas' style={styles}>
               <MyTriangleCanvas angles={angles} scale={result.height} slide3={true} 
                  sideA={result.a * scale} 
                  sideB={result.b * scale} 
                  sideC={result.c * scale}
                  angleA={result.angleA}
                  angleB={result.angleB}
                  angleC={result.angleC} />
               </li>
            </div>
               <MyResultsItems result={result} noIsTriagnle={''}/>
            <span className='arrow_slider_left'>
               <MyButton onClick={next}>{`>`}</MyButton>
            </span>
         </ul>
      </div>    
     
   );
};

export default Slider;