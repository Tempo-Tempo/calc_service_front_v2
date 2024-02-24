import React, { useState } from 'react';
import DescripFigure from '../../components/DescripFigure';
import LinkToMain from '../../ui/LinkToMain';
import Slider from '../../components/Slider.jsx';

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
      </div>
      </div>
   );
};

export default MyTriangleMoreInfoPage;