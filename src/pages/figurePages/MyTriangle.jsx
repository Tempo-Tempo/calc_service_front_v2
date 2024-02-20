import React, { useCallback, useEffect, useState } from 'react';
import MyInput from '../../ui/MyInputForCalc.tsx';
import MyButton from '../../ui/MyButton.tsx';
import MyImage from '../../ui/MyImage';
import { calc} from '../../hooks/UseTestPost/GetCalcResult.js';
import MyResultsItems from '../../ui/MyResultsItems.jsx';
import { RulesTypeTriangle } from '../../components/RulesAndHelpers/HandlerTypeTriangle/RulesTypeTriangle.js';
import "../stylePages/FigurePage.css";


const MyTriangle = () => {   
   const [ errorIsNoTriangle, setErrorIsNoTriangle ] = useState('');
   const [moreInfoIsOpen, setMoreInfoIsOpen] = useState(false);
   const [ result, setResult ] = useState('');
   const [ newCalc, setNewCalc ] = useState({a: '', b: '', c: '', angleA: '', angleB: '', angleC: ''});


   useEffect(() => {
      const result = JSON.parse(localStorage.getItem("result"));
      const newCalc = JSON.parse(localStorage.getItem("newCalc"));
      if(!newCalc) return;
      setResult(result);
      setNewCalc(newCalc);
   }, [])

    const clearResults = () => {
      setNewCalc({a: '', b: '', c: '', angleA: '', angleB: '', angleC: ''});
      setResult('');
   }

   const comparisonOfValues = (oldValue, newValue) => {
      return Number(oldValue) !== Number(newValue) && Number(oldValue) !== 0;
    }
  
   const calcMyTriangle = useCallback(async () => {
      if(RulesTypeTriangle(newCalc)?.length > 1) return setErrorIsNoTriangle(RulesTypeTriangle(newCalc));
      setErrorIsNoTriangle(RulesTypeTriangle(newCalc))
      let result = await calc(newCalc, "triangle");
      if(comparisonOfValues(newCalc.angleA, result?.angleA) 
      || comparisonOfValues(newCalc.angleB, result?.angleB) 
      || comparisonOfValues(newCalc.angleC, result?.angleC)) {
         setErrorIsNoTriangle("Такого треугольника не существует.");
      }
      console.log(result);
      localStorage.setItem("result", JSON.stringify(result));
      localStorage.setItem("newCalc", JSON.stringify(newCalc));
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
               <span><MyImage style={{height: 150}} src={require(`../../assets/imgFigure/triangle_last.png`)} alt='ooops'/></span> 
                  <li className='ml-4'> Площадь вычисляется по формуле Герона S = √(s * (s - a) * (s - b) * (s - c)) </li>
                </div> 
                <li className='li_figure'>
                <span>Введите сторону AB:</span>
               <MyInput value={newCalc.a} onChange={(val) => setNewCalc({...newCalc, a: val})} placeholder='Введите сторону a'/>
                </li>
               <li className='li_figure'>
              <span>Введите сторону AC:</span>
               <MyInput value={newCalc.b} onChange={(val) => setNewCalc({...newCalc, b: val})} placeholder='Введите сторону b'/>
              </li>
               <li className='li_figure'>
               <span>Введите сторону BC:</span>
                 <MyInput value={newCalc.c} onChange={(val) => setNewCalc({...newCalc, c: val})} placeholder='Введите сторону с'/> 
               </li>
               <li className='li_figure'>
               <span>Введите угол А:</span>
               <MyInput value={newCalc.angleA} onChange={(val) => setNewCalc({...newCalc, angleA: val})} placeholder='Введите угол A' />
               </li>
               <li className='li_figure'>
               <span>Введите угол B:</span>
               <MyInput value={newCalc.angleB} onChange={(val) => setNewCalc({...newCalc, angleB: val})} placeholder='Введите угол B' />
                </li>
                <li className='li_figure'>
                <span>Введите угол C:</span>
               <MyInput value={newCalc.angleC} onChange={(val) => setNewCalc({...newCalc, angleC: val})} placeholder='Введите угол C' 
              />
                </li> 
               <MyResultsItems noIsTriagnle={errorIsNoTriangle} result={result} clearResults={clearResults} />
         </ul>
         {<MyButton onSubmit={calcMyTriangle} onClick={calcMyTriangle}>Рассчитать</MyButton>}
      </div>
   );
};

export default MyTriangle;