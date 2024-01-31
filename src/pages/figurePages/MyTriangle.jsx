import React, { useCallback, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import LinkToMain from '../../ui/LinkToMain';
import { ErrorMessage } from '../../components/ErrorMessage';
import { calc } from '../../hooks/UseTestPost/GetCalcResult.js';
import MyResultsItems from '../../ui/MyResultsItems.jsx';
import { RulesTypeTriangle } from '../../components/RulesAndHelpers/HandlerTypeTriangle/RulesTypeTriangle.js';


const MyTriangle = () => {
   const [startValid, setStartValid] = useState(false);

   const [errorIsNoTriangle, setErrorIsNoTriangle] = useState('');

   const [ result, setResult ] = useState('');

   const [ newCalc, setNewCalc ] = useState({a: '', b: '', c: ''});
  
   const calcMyTriangle = useCallback(async () => {
      setStartValid(true)
      setTimeout(() => {
         setStartValid(false)
      }, 2500);

      let result = await calc(newCalc, "triangle");
      setErrorIsNoTriangle(RulesTypeTriangle(newCalc));
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
          <li className='flex flex-col'>
                <div className='flex mb-3 mt-2'>
                  {<MyImage src={require(`../../assets/imgFigure/newTriangle.png`)} alt='ooops' />}
                  <span className='ml-4'> Формула площади: P = (a + b + c) / 2; S = p * (p - a) * (p - b) * (p - c), где P - полупериметр, a,b,c стороны </span>
                </div> 
               <MyInput
               value={newCalc.a} 
               onChange={(e) => setNewCalc({...newCalc, a: e})} 
               placeholder='Введите сторону a'
               validison={ ErrorMessage(newCalc.a, startValid)} />
               <MyInput 
               value={newCalc.b} 
               onChange={(e) => setNewCalc({...newCalc, b: e})} 
               placeholder='Введите сторону b' 
               validison={ErrorMessage(newCalc.b, startValid)}/>
               <MyInput 
               value={newCalc.с} 
               onChange={(e) => setNewCalc({...newCalc, c: e})} 
               placeholder='Введите сторону с' 
               validison={ErrorMessage(newCalc.c, startValid)}/>
               <MyResultsItems noIsTriagnle={errorIsNoTriangle} result={result} />
            </li>
         </ul>
         <MyButton onSubmit={calcMyTriangle} onClick={calcMyTriangle}>Рассчитать</MyButton>
      </div>
   );
};

export default MyTriangle;