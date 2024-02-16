import React, { useState } from 'react';
import TriangleCanvas from './MyTriangleCanvas';
import DescripFigure from '../../components/DescripFigure';
import LinkToMain from '../../ui/LinkToMain';
import Slider from '../../components/DynamicDesrip.jsx';

const MyTriangleMoreInfoPage = ({result}) => {
   const type = JSON.parse(localStorage.getItem('result'));

   const [typeTriangle, setTypeTriangle] = useState(type?.typeTriangle);
   
   const vertices = [
      { x: 0, y: 0 },
      { x: 150, y: 100 },
      { x: 50, y: 150 },
    ];
   return (
      <div className="App-header">
          <div className="figure_item">
          <LinkToMain />
         <div className='figure_title'>Калькулятор треугольникa</div>
         <div className='figure_title'>
         <DescripFigure typeTriangle={typeTriangle}/>
         <Slider />
         </div>  
         {/* <TriangleCanvas width={200} height={200}  vertices={vertices}/> */}
      </div>
      </div>
   );
};

export default MyTriangleMoreInfoPage;