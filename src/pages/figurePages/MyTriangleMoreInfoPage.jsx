import React, { useState } from 'react';
import TriangleCanvas from './MyTriangleCanvas';
import DescripFigure from '../../components/DescripFigure';
import LinkToMain from '../../ui/LinkToMain';
import Slider from '../../components/DynamicDesrip.jsx';

const MyTriangleMoreInfoPage = () => {
   const result = JSON.parse(localStorage.getItem('result'));
   const [typeTriangle, setTypeTriangle] = useState(result?.typeTriangle);
   return (
      <div className="App-header">
          <div className="figure_item">
          <LinkToMain />
         <div className='figure_title'>Калькулятор треугольникa</div>
         <div className='figure_title'>
         <DescripFigure typeTriangle={typeTriangle}/>
         <Slider />
         </div> 
         {/* <div className='wrapper_canvas'> 
            <TriangleCanvas width={300} height={300}
            sideA={result.a * 15}
            sideB={result.b * 15}
            sideC={result.c * 15}
            angleA={result.angleA}
            angleB={result.angleB}
            angleC={result.angleC} />
         </div>  */}
        
      </div>
      </div>
   );
};

export default MyTriangleMoreInfoPage;