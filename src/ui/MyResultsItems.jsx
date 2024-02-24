import React from 'react';
import MyButton from './MyButton.tsx';
import { Link } from 'react-router-dom';

const MyResultsItems = ( { result, noIsTriagnle, clearResults }) => {
   const clearResult = () => {
     localStorage.removeItem("result");
     localStorage.removeItem("newCalc");
     return clearResults();
   }

   return (
         <div className='result_line'>  
               <div>
                  {noIsTriagnle && <span className='text_error'>{ noIsTriagnle }</span> }
               </div>
               <div>
                  {result?.testErr !== null && <span className='text_error'>{ result?.testErr }</span> }
               </div>
        {result && noIsTriagnle.length === 0 && result.testErr === null && <ul>
         <span className='title_result'>Результат:</span>
               <li>
                  {result?.typeTriangle !== "" && 
                  <span className='text_green'>Тип треугольникa: {result.typeTriangle}
                  </span> }
               </li>
               <li>
                  {result.area !== 0 && result.area !== "NaN" && 
                  <span className='text_green'>Площадь: { result?.area?.toFixed(4) * 100 / 100 }
                  </span> }
               </li>
               <li>
                  {result.per !== 0 && result.per !== "NaN" && 
                  <span className='text_green'>Периметр: { Math.trunc(result.per * 100 ) / 100 }
                  </span> }
               </li>
               <li>
                  {result.bess !== 0 && result.bess !== "NaN" && result.tang !== "NaN" && 
                  <span className='text_green'>Биссектриса из вершины угла С: { result?.bess?.toFixed(4) * 100 / 100}
                  </span> } 
               </li>
               <li>
                   {result.med  !== 0 && result.med !== "NaN" && 
                   <span className='text_green'>Медиана, проведенная из вершины А: { result?.med?.toFixed(4) * 100 / 100 }
                   </span> }
               </li>
               <li>
                   {result.height  !== 0 && result.height !== "NaN" && result.height !== "NaN" && 
                   <span className='text_green'>Высота из угла А: { result?.height?.toFixed(4) * 100 / 100 }
                   </span> } 
               </li>
               <li>
                 {result.outCircle !== 0  && result.outCircle !== "NaN" && 
                 <span className='text_green'> Площадь описаной окружности: { result?.outCircle?.toFixed(4) * 100 / 100 } 
                 </span> }
               </li>
               <li>
                 {result.inCircle !== 0  && result.inCircle !== "NaN" && 
                 <span className='text_green'> Площадь вписаной окружности: { result?.inCircle?.toFixed(4) * 100 / 100 } 
                 </span> } 
               </li>
               <li>
                 {result.cos !== 0 &&  result.cos !== "NaN" && 
                 <span className='text_green'>Косинус угла А в радианах: { result?.cos?.toFixed(4) * 100 / 100 } 
                 </span> } 
               </li>
               <li>
                 {result.cosDegrees !== 0 &&  result.cosDegrees !== "NaN"  && 
                 <span className='text_green'>Косинус угла А в градусах: { Math.trunc(result?.cosDegrees * 100 ) / 100 } 
                 </span> } 
               </li>
               <li>
                 {result.sin !== 0 && result.sin !== "NaN" && 
                 <span className='text_green'>Синус угла А в радианах: { result?.sin.toFixed(5) } 
                 </span> } 
               </li>
               <li>
                 {result.sinDegrees !== 0 && result.sinDegrees !== "NaN" && 
                 <span className='text_green'>Синус угла А в градусах: { Math.trunc(result?.sinDegrees * 100 ) / 100 }
                 </span> } 
               </li>
               <li>
                  {result.tang !== 0 &&  result.tang !== "NaN" && 
               <span className='text_green'>Тангенс угла А в радианах: { result?.tang.toFixed(5) } 
               </span> }
               </li>
               <li>
                  {result.tangDegrees !== 0 &&  result.tangDegrees !== "NaN" && 
               <span className='text_green'>Тангенс угла А в градусах: { Math.trunc(result.tangDegrees * 100 ) / 100 } 
               </span> }
               </li>
               {window.location.pathname !== "/triangle/info" &&  <div className='flex justify-between'>
                  <Link to={"/triangle/info"}><MyButton>Подробнее</MyButton></Link> 
                  <MyButton onClick={clearResult}>Сбросить результат</MyButton>
               </div>}
              
         </ul>
         }
      </div>
     
   );
};

export default MyResultsItems;