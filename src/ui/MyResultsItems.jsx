import React from 'react';
import MyButton from './MyButton.tsx';
import { Link } from 'react-router-dom';

const MyResultsItems = ( { result, noIsTriagnle }) => {
   let { typeTriangle } = result;
   console.log(typeTriangle);
   return (
         <div className='result_line'>  
               <div>
                  {noIsTriagnle && <span className='text_error'>{ noIsTriagnle }</span> }
               </div>
               <div>
                  {result.testErr !== null && <span className='text_error'>{ result?.testErr }</span> }
               </div>
        {result && noIsTriagnle.length === 0 && result.testErr === null && <ul>
         <span className='title_result'>Результат:</span>
               <li>
                  {result?.typeTriangle !== "" && <span className='text_green'>Тип треугольникa: {result.typeTriangle}</span> }
               </li>
               <li>
                  {result.area !== 0 && result.area !== "NaN" && <span className='text_green'>Площадь: { Math.trunc(result.area * 100 ) / 100 }</span> }
               </li>
               <li>
                  {result.per !== 0 && result.per !== "NaN" && <span className='text_green'>Периметр: { Math.trunc(result.per * 100 ) / 100 }</span> }
               </li>
               <li>
                  {result.bess !== 0 && result.bess !== "NaN" && result.tang !== "NaN" && <span className='text_green'>Биссектриса из вершины угла С: { Math.trunc(result.bess * 100 ) / 100 }</span> } 
               </li>
               <li>
                   {result.med  !== 0 && result.med !== "NaN" && <span className='text_green'>Медиана, проведенная из угла А: { Math.trunc(result.med * 100 ) / 100 }</span> }
               </li>
               <li>
                   {result.height  !== 0 && result.height !== "NaN" && result.height !== "NaN" && <span className='text_green'>Высота к стороне а: { Math.trunc(result.height * 100 ) / 100 }</span> } 
               </li>
               <li>
                 {result.outCircle !== 0  && result.outCircle !== "NaN" && <span className='text_green'> Площадь описаной окружности: { Math.trunc(result.outCircle * 100 ) / 100 } </span> }
               </li>
               <li>
                 {result.inCircle !== 0  && result.inCircle !== "NaN" && <span className='text_green'> Площадь вписаной окружности: { Math.trunc(result.inCircle * 100 ) / 100 } </span> } 
               </li>
               <li>
                 {result.cos !== 0 &&  result.cos !== "NaN" && result.cos !== "0" && <span className='text_green'>Косинус: { Math.trunc(result.cos * 100 ) / 100 } </span> } 
               </li>
               <li>
                 {result.sin !== 0 && result.sin !== "NaN" && <span className='text_green'>Синус: { Math.trunc(result.sin * 100 ) / 100 } </span> } 
               </li>
               <li>{result.tang !== 0 &&  result.tang !== "NaN" && <span className='text_green'>Тангенс: { Math.trunc(result.tang * 100 ) / 100 } </span> }
               </li>
               <Link to={"/triangle/info"}><MyButton>Подробнее</MyButton></Link>
         </ul>
         }
      </div>
     
   );
};

export default MyResultsItems;