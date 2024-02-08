import React, { useCallback, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc} from '../../hooks/UseTestPost/GetCalcResult.js';
import MyResultsItems from '../../ui/MyResultsItems.jsx';
import { RulesTypeTriangle } from '../../components/RulesAndHelpers/HandlerTypeTriangle/RulesTypeTriangle.js';


const MyTriangle = () => {
   const [startValid, setStartValid] = useState(false);

   const [errorIsNoTriangle, setErrorIsNoTriangle] = useState('');

   const [ result, setResult ] = useState('');

   const [ newCalc, setNewCalc ] = useState({a: '', b: '', c: '', angleA: '', angleB: '', angleC: ''});
  
   const calcMyTriangle = useCallback(async () => {
      console.log(RulesTypeTriangle(newCalc)?.length)
      if(RulesTypeTriangle(newCalc)?.length > 1) return setErrorIsNoTriangle(RulesTypeTriangle(newCalc));
      setErrorIsNoTriangle(RulesTypeTriangle(newCalc))
      let result = await calc(newCalc, "triangle");   
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
                  {<MyImage src={require(`../../assets/imgFigure/triangle_last.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула площади: P = (a + b + c) / 2; S = p * (p - a) * (p - b) * (p - c), где P - полупериметр, a,b,c стороны </span>
                </div> 
                <li className='flex justify-between'>
                <span>Введите сторону a:</span>
               <MyInput
               value={newCalc.a} 
               onChange={(e) => setNewCalc({...newCalc, a: e})} 
               placeholder='Введите сторону a'
               validison={ ErrorMessage(newCalc.a, startValid)} />
                </li>
               <li className='flex justify-between'>
              <span>Введите сторону b:</span>
               <MyInput 
               value={newCalc.b} 
               onChange={(e) => setNewCalc({...newCalc, b: e})} 
               placeholder='Введите сторону b' 
               validison={ErrorMessage(newCalc.b, startValid)}/>
              </li>
               <li  className='flex justify-between'>
               <span>Введите сторону c:</span>
                 <MyInput 
               value={newCalc.c} 
               onChange={(e) => setNewCalc({...newCalc, c: e})} 
               placeholder='Введите сторону с' 
               validison={ErrorMessage(newCalc.c, startValid)}/> 
               </li>
               <li className='flex justify-between'>
               <span>Введите угол А:</span>
               <MyInput 
               value={newCalc.angleA} 
               onChange={(e) => setNewCalc({...newCalc, angleA: e})} 
               placeholder='Введите угол A' 
               validison={ErrorMessage(newCalc.angleA, startValid)}/>
               </li>
               <li className='flex justify-between'>
               <span>Введите угол B:</span>
               <MyInput 
               value={newCalc.angleB} 
               onChange={(e) => setNewCalc({...newCalc, angleB: e})} 
               placeholder='Введите угол B' 
               validison={ErrorMessage(newCalc.angleB, startValid)}/>
                </li>
                <li className='flex justify-between'>
                <span>Введите угол C:</span>
               <MyInput 
               value={newCalc.angleC} 
               onChange={(e) => setNewCalc({...newCalc, angleC: e})} 
               placeholder='Введите угол C' 
               validison={ErrorMessage(newCalc.angleC, startValid)}/>
                </li>
                
               <MyResultsItems noIsTriagnle={errorIsNoTriangle} result={result} />
         </ul>
         <MyButton onSubmit={calcMyTriangle} onClick={calcMyTriangle}>Рассчитать</MyButton>
      </div>
   );
};

export default MyTriangle;