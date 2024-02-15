import React from 'react';
import MyImage from '../ui/MyImage';

const DescripFigure = ({typeTriangle}) => {
   console.log(typeTriangle)
   return (
      <ul>
         {!typeTriangle  && <div className='flex'>
         {/* <MyImage src={require(`../assets/imgFigure/triangle_last.png`)} alt='ooops'/> */}
         <li className='ml-4'> Площадь по формуле Герона S = √(s * (s - a) * (s - b) * (s - c)) </li>
         </div> }
         {typeTriangle === "Прямоугольный" && <div className='flex'>
         {/* <MyImage src={require(`../assets/imgFigure/rectangle.png`)} alt='ooops'/> */}
         <li className='ml-4'> Прямоугольный треугольник — это треугольник, в котором один угол прямой (то есть 90 градусов). </li>
         </div> }
         {typeTriangle === "Равнобедренный" && <div className='flex'>
         {/* <MyImage src={require(`../assets/imgFigure/triangleBedr.png`)} alt='ooops'/> */}
           <li className='ml-4'> Равнобедренный треугольник — треугольник, в котором две стороны имеют равную длину. </li> 
         </div>
         }
         {typeTriangle === "Разносторонний" && <div className='flex'>
         {/* <MyImage src={require(`../assets/imgFigure/newTriangle.png`)} alt='ooops'/> */}
           <li className='ml-4'> Разносторонним называется — треугольник, у которого все три стороны не равны. </li> 
         </div>
         }
         {typeTriangle === "Равносторонний" &&  <div className='flex'>
         {/* <MyImage src={require(`../assets/imgFigure/triangleRawn.png`)} alt='ooops'/> */}
         <li className='ml-4'> Равносторонний треугольник — треугольник, у которого все стороны равны. </li>
         </div>
         }

      </ul>
   );
};

export default DescripFigure;