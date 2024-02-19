import React from 'react';

const DescripFigure = ({typeTriangle}) => {
   return (
      <ul>
         {!typeTriangle  && <div className='flex'>
         <li className='ml-4'> Площадь по формуле Герона S = √(s * (s - a) * (s - b) * (s - c)) </li>
         </div> }
         {typeTriangle === "Прямоугольный" && <div className='flex'>
         <li className='ml-4'> Прямоугольный треугольник — это треугольник, в котором один угол прямой (то есть 90 градусов). </li>
         </div> }
         {typeTriangle === "Равнобедренный" && <div className='flex'>
           <li className='ml-4'> Равнобедренный треугольник — треугольник, в котором две стороны имеют равную длину. </li> 
         </div>
         }
         {typeTriangle === "Разносторонний" && <div className='flex'>
           <li className='ml-4'> Разносторонним называется — треугольник, у которого все три стороны не равны. </li> 
         </div>
         }
         {typeTriangle === "Равносторонний" &&  <div className='flex'>
         <li className='ml-4'> Равносторонний треугольник — треугольник, у которого все стороны равны. </li>
         </div>
         }
         {typeTriangle === "Остроугольный" &&  <div className='flex'>
         <li className='ml-4'> Остроугольный треугольник — треугольник, у которого все углы острые. </li>
         </div>
         }
          {typeTriangle === "Тупоугольный" &&  <div className='flex'>
         <li className='ml-4'> Тупоугольный треугольник — треугольник, у которого один из его углов лежит в пределах между 90° и 180°. </li>
         </div>
         }
      </ul>
   );
};

export default DescripFigure;