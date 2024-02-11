import React, { useCallback, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc} from '../../hooks/UseTestPost/GetCalcResult.js';
import MyResultsItems from '../../ui/MyResultsItems.jsx';
import { RulesTypeTriangle } from '../../components/RulesAndHelpers/HandlerTypeTriangle/RulesTypeTriangle.js';
import DescripFigure from '../../components/DescripFigure.jsx';


const MyTriangle = () => {
   const [typeTriangle, setTypeTriangle] = useState('');

   const [errorIsNoTriangle, setErrorIsNoTriangle] = useState('');

   const [ result, setResult ] = useState('');

   const [ newCalc, setNewCalc ] = useState({a: '', b: '', c: '', angleA: '', angleB: '', angleC: ''});
  
   const calcMyTriangle = useCallback(async () => {
      if(RulesTypeTriangle(newCalc)?.length > 1) return setErrorIsNoTriangle(RulesTypeTriangle(newCalc));
      setErrorIsNoTriangle(RulesTypeTriangle(newCalc))
      let result = await calc(newCalc, "triangle");
      console.log(result);
     // console.log(RulesTypeTriangle(result.typeTriangle))
      setResult(result);
   })

   return (
      <div className={'absolute flex flex-col bg-black p-2 border-2 text-base border-sky-500 rounded-md w-96 h-100'}>
         <LinkToMain />
         <div className='border-b-2'>Калькулятор треугольникa</div>
         <div className='mt-1 mb-2 border-b-2 relative flex flex-col justify-center items-center'>
         Треугольник — это геометрическая фигура, состоящая из трех отрезков
         </div>
         <ul className='text-left p-2'>
                <div className='flex mb-3 mt-2'>
                <MyImage src={require(`../../assets/imgFigure/triangle_last.png`)} alt='ooops'/>
                  {/* {<MyImage src={require(`../../assets/imgFigure/triangle_last.png`)} alt='ooops' />} */}
                 {/* <DescripFigure typeTriangle={result.typeTriangle}/> */}
                </div> 
                <li className='flex justify-between'>
                <span>Введите сторону a:</span>
               <MyInput value={newCalc.a} onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону a'/>
                </li>
               <li className='flex justify-between'>
              <span>Введите сторону b:</span>
               <MyInput value={newCalc.b} onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите сторону b'/>
              </li>
               <li  className='flex justify-between'>
               <span>Введите сторону c:</span>
                 <MyInput value={newCalc.c} onChange={(e) => setNewCalc({...newCalc, c: e})} placeholder='Введите сторону с'/> 
               </li>
               <li className='flex justify-between'>
               <span>Введите угол А:</span>
               <MyInput value={newCalc.angleA} onChange={(e) => setNewCalc({...newCalc, angleA: e})} placeholder='Введите угол A' />
               </li>
               <li className='flex justify-between'>
               <span>Введите угол B:</span>
               <MyInput value={newCalc.angleB} onChange={(e) => setNewCalc({...newCalc, angleB: e})} placeholder='Введите угол B' />
                </li>
                <li className='flex justify-between'>
                <span>Введите угол C:</span>
               <MyInput value={newCalc.angleC} onChange={(e) => setNewCalc({...newCalc, angleC: e})} placeholder='Введите угол C' 
              />
                </li> 
               <MyResultsItems noIsTriagnle={errorIsNoTriangle} result={result} />
         </ul>
         <MyButton onSubmit={calcMyTriangle} onClick={calcMyTriangle}>Рассчитать</MyButton>
      </div>
   );
};

export default MyTriangle;