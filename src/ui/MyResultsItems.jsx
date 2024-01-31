import React from 'react';

const MyResultsItems = ({result, noIsTriagnle}) => {
   return (
         <div>  
               <div>
                  {noIsTriagnle && <span className='text-green-500'>{ noIsTriagnle.resultText }</span> }
               </div>
        {result && !noIsTriagnle && <ul>
          Результат:
               <li>
                  {result.area && <span className='text-green-500'>Площадь: { Math.trunc(result.area * 100 ) / 100 }</span> }
               </li>
               <li>
                  {result.per && <span className='text-green-500'>Периметр: { Math.trunc(result.per * 100 ) / 100 }</span> }
               </li>
               <li>
                  {result.bess && <span className='text-green-500'>Биссектриса: { Math.trunc(result.bess * 100 ) / 100 }</span> } 
               </li>
               <li>
                   {result.med && <span className='text-green-500'>Медиана: { Math.trunc(result.med * 100 ) / 100 }</span> } 
               </li>
               <li>
                 {result.inCircle && <span className='text-green-500'>Площадь вписаной окружности: { Math.trunc(result.inCircle * 100 ) / 100 } </span> }
               </li>
               <li>
                 {result.outCircle && <span className='text-green-500'>Площадь описаной окружности: { Math.trunc(result.outCircle * 100 ) / 100 } </span> } 
               </li>
         </ul>}  
      </div>
     
   );
};

export default MyResultsItems;