import React, { useCallback, useEffect, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import { calc} from '../../hooks/UseTestPost/GetCalcResult.js';
import MyResultsItems from '../../ui/MyResultsItems.jsx';
import { RulesTypeTriangle } from '../../components/RulesAndHelpers/HandlerTypeTriangle/RulesTypeTriangle.js';
import "./FigurePage.css";


const MyTriangle = () => {   
   const [ errorIsNoTriangle, setErrorIsNoTriangle ] = useState('');

   const [ result, setResult ] = useState('');

   const [ newCalc, setNewCalc ] = useState({a: '', b: '', c: '', angleA: '', angleB: '', angleC: ''});

   useEffect(() => {
      const result = JSON.parse(localStorage.getItem("result"));
      setResult(result);
   }, [])
  
   const calcMyTriangle = useCallback(async () => {
      if(RulesTypeTriangle(newCalc)?.length > 1) return setErrorIsNoTriangle(RulesTypeTriangle(newCalc));
      setErrorIsNoTriangle(RulesTypeTriangle(newCalc))
      let result = await calc(newCalc, "triangle");
      if(Number(result?.angleA) !== Number(newCalc.angleA) && Number(newCalc.angleA) !== 0 
      || Number(result?.angleB) !== Number(newCalc.angleB) && Number(newCalc.angleB) !== 0 
      || Number(result?.angleC) !== Number(newCalc.angleC) && Number(newCalc.angleC) !== 0) {
         setErrorIsNoTriangle("Такого треугольника не существует.");
      }
      localStorage.setItem("result", JSON.stringify(result));
      setResult(result);
   })


   return (
      <div className="figure_item">
         <div className='figure_title'>Калькулятор треугольникa</div>
         <div className='figure_title'>
         Треугольник — это геометрическая фигура, состоящая из трех отрезков
         </div>
            <ul>
                <div className='figure_description'>
                <MyImage width={400} src={require(`../../assets/imgFigure/triangle_last.png`)} alt='ooops'/>
                  {/* {<MyImage src={require(`../../assets/imgFigure/triangle_last.png`)} alt='ooops' />} */}
                  <li className='ml-4'> Площадь вычисляется по формуле Герона S = √(s * (s - a) * (s - b) * (s - c)) </li>
                </div> 
                <li className='li_figure'>
                <span>Введите сторону a:</span>
               <MyInput value={newCalc.a} onChange={(e) => setNewCalc({...newCalc, a: e})} placeholder='Введите сторону a'/>
                </li>
               <li className='li_figure'>
              <span>Введите сторону b:</span>
               <MyInput value={newCalc.b} onChange={(e) => setNewCalc({...newCalc, b: e})} placeholder='Введите сторону b'/>
              </li>
               <li className='li_figure'>
               <span>Введите сторону c:</span>
                 <MyInput value={newCalc.c} onChange={(e) => setNewCalc({...newCalc, c: e})} placeholder='Введите сторону с'/> 
               </li>
               <li className='li_figure'>
               <span>Введите угол А:</span>
               <MyInput value={newCalc.angleA} onChange={(e) => setNewCalc({...newCalc, angleA: e})} placeholder='Введите угол A' />
               </li>
               <li className='li_figure'>
               <span>Введите угол B:</span>
               <MyInput value={newCalc.angleB} onChange={(e) => setNewCalc({...newCalc, angleB: e})} placeholder='Введите угол B' />
                </li>
                <li className='li_figure'>
                <span>Введите угол C:</span>
               <MyInput value={newCalc.angleC} onChange={(e) => setNewCalc({...newCalc, angleC: e})} placeholder='Введите угол C' 
              />
                </li> 
               <MyResultsItems noIsTriagnle={errorIsNoTriangle} result={result} />
         </ul>
         {<MyButton className={"bg-black mt-2 font-bold p-1 border border-white text-base text-white rounded-md hover:bg-gray-900"} onSubmit={calcMyTriangle} onClick={calcMyTriangle}>Рассчитать</MyButton>}
      </div>
   );
};

export default MyTriangle;