import React from 'react';

const MyResultsItems = ({result, noIsTriagnle}) => {
   console.log(noIsTriagnle.length)
   return (
         <div className='border-t-2 mt-3'>  
               <div>
                  {noIsTriagnle && <span className='text-red-500'>{ noIsTriagnle }</span> }
               </div>
        {result && noIsTriagnle.length === 0 && <ul>
         <span className='font-bold text-lg'>Результат:</span>
               <li>
                  {result.area !== "" && <span className='text-green-500'>Тип треугольникa: {result.typeTriangle}</span> }
               </li>
               <li>
                  {result.area !== 0 && <span className='text-green-500'>Площадь: { Math.trunc(result.area * 100 ) / 100 }</span> }
               </li>
               <li>
                  {result.per !== 0 && <span className='text-green-500'>Периметр: { Math.trunc(result.per * 100 ) / 100 }</span> }
               </li>
               <li>
                  {result.bess !== 0 && <span className='text-green-500'>Биссектриса угла С: { Math.trunc(result.bess * 100 ) / 100 }</span> } 
               </li>
               <li>
                   {result.med  !== 0 && <span className='text-green-500'>Медиана, проведенная из угла А: { Math.trunc(result.med * 100 ) / 100 }</span> }
               </li>
               <li>
                   {result.height  !== 0 && <span className='text-green-500'>Высота к стороне а: { Math.trunc(result.height * 100 ) / 100 }</span> } 
               </li>
               <li>
                 {result.outCircle !== 0 && <span className='text-green-500'> Площадь описаной окружности: { Math.trunc(result.outCircle * 100 ) / 100 } </span> }
               </li>
               <li>
                 {result.inCircle !== 0 && <span className='text-green-500'> Площадь вписаной окружности: { Math.trunc(result.inCircle * 100 ) / 100 } </span> } 
               </li>
               <li>
                 {result.cos !== 0 && result.cos !== "0" && <span className='text-green-500'>Косинус: { Math.trunc(result.cos * 100 ) / 100 } </span> } 
               </li>
               <li>
                 {result.sin !== 0 && <span className='text-green-500'>Синус: { Math.trunc(result.sin * 100 ) / 100 } </span> } 
               </li>
               <li>
                 {result.tang !== 0 && <span className='text-green-500'>Тангенс: { Math.trunc(result.tang * 100 ) / 100 } </span> } 
               </li>
         </ul>}  
      </div>
     
   );
};

export default MyResultsItems;