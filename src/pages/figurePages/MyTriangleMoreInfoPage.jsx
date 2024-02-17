import React, { useState } from 'react';
import TriangleCanvas from './MyTriangleCanvas';
import DescripFigure from '../../components/DescripFigure';
import LinkToMain from '../../ui/LinkToMain';
import Slider from '../../components/DynamicDesrip.jsx';

const MyTriangleMoreInfoPage = ({result}) => {
   const type = JSON.parse(localStorage.getItem('result'));
   const [typeTriangle, setTypeTriangle] = useState(type?.typeTriangle);
   console.log(type)
   return (
      <div className="App-header">
          <div className="figure_item">
          <LinkToMain />
         <div className='figure_title'>Калькулятор треугольникa</div>
         <div className='figure_title'>
         <DescripFigure typeTriangle={typeTriangle}/>
         <Slider />
         </div>  
         <TriangleCanvas   
         width={100} 
         height={100}
         sideA={type.a * 4}
         sideB={type.b * 4}
         sideC={type.c * 4}
         angleA={type.angleA}
         angleB={type.angleB}
         angleC={type.angleC} />
      </div>
      </div>
   );
};

export default MyTriangleMoreInfoPage;