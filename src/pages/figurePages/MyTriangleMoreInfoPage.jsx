import React, { useState } from 'react';
import TriangleCanvas from './MyTriangleCanvas';
import DescripFigure from '../../components/DescripFigure';
import LinkToMain from '../../ui/LinkToMain';
import MyImage from '../../ui/MyImage';
import MyButton from '../../ui/MyButton.tsx';

const MyTriangleMoreInfoPage = ({result}) => {

   const type = JSON.parse(localStorage.getItem('result'))

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
         </div>
         <div className='slider'>
            <span className='arrow_slider' > {`<`} </span>
               <ul className='text-left p-2'>
                <div className='flex mb-3 mt-2'>
              <li>
               <MyImage src={require(`../../assets/imgFigure/newTriangle.png`)} alt='ooops'/>
              </li>
                 {/* <li>
                   <MyImage src={require(`../../assets/imgFigure/triangleBedr.png`)} alt='ooops'/>
                 </li>
                <li>
                 <MyImage src={require(`../../assets/imgFigure/triangle_last.png`)} alt='ooops'/> 
                </li> */}
                 
                </div> 
                <span className='arrow_slider_left' > {`>`} </span>
         </ul> 
      </div>
         
   
         <TriangleCanvas width={200} height={200}  vertices={vertices}/>
      </div>
      </div>
   );
};

export default MyTriangleMoreInfoPage;