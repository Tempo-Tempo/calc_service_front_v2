import React, {useState } from 'react';
import MyImage from '../ui/MyImage';
import bg1 from '../assets/imgFigure/triangle_bess_med_height.png';
import bg2 from '../assets/imgFigure/triangle_inCircle.png';
import bg3 from '../assets/imgFigure/triangle_outCircle.png';
import MyButton from '../ui/MyButton.tsx';

const Slider = () => {
    const type = JSON.parse(localStorage.getItem('result'));
   const triangleImg = [bg1, bg2, bg3];
   
   const [ transform, setTransform ] = useState(0);
   const styles = { transform:`translateX(${transform}px)`};

   const prev = () => {
      setTransform(transform + 288)
      if(transform >= 0) setTransform(-576);
   }
   const next = () => {
      setTransform(transform - 288)
      if(transform < (-400)) setTransform(0);
   }
   return (
      <div className='slider'>
       <span className='arrow_slider'>
         <MyButton onClick={prev}>{'<'}</MyButton>
       </span>
          <ul className='text-left mb-2'>
            <div className='slide_panel'>
            {type.bess &&
               <li className='img_wrap' style={styles}>
                     <MyImage src={bg1} />
                     <span> <span className='text_green'>Биссектриса</span> обозначена буквой D и проведена из вершины угла С =
                     <span className='text_green'> { Math.trunc(type.bess * 100 ) / 100 }</span> </span> <br />
                     <span><span className='text_green'>Медиана</span> обозначена буквой M и проведена из угла А = 
                     <span className='text_green'> { Math.trunc(type.med * 100 ) / 100 }</span></span> <br />
                     <span><span className='text_green'>Высота</span>обозначена буквой H и проведена к соторне а = 
                     <span className='text_green'> { Math.trunc(type.height * 100 ) / 100 }</span></span>
               </li>}
            {type.inCircle &&
               <li className='img_wrap' style={styles}>
                     <MyImage src={bg2}/>
                     <span><span className='text_green'>Площадь вписаной окружности</span> обозначена O и равна
                     <span className='text_green'> { Math.trunc(type.inCircle * 100 ) / 100 }</span> </span>
               </li>}
            {type.outCircle &&
               <li className='img_wrap' style={styles}>
                     <MyImage src={bg3}/>
                     <span><span className='text_green'>Площадь описаной окружности</span> обозначена Sr и равна
                     <span className='text_green'> { Math.trunc(type.outCircle * 100 ) / 100 }</span> </span>
               </li>}
            </div> 
            <span className='arrow_slider_left'>
               <MyButton onClick={next}>{`>`}</MyButton>
            </span>
         </ul>
      </div>    
     
   );
};

export default Slider;