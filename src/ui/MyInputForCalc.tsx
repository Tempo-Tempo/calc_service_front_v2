import React, { useState } from "react";

interface MyInputProps {
   placeholder: string,
   value: number,
   onChange: (e: any) => void;
   startValid: boolean,
   validison: number
}

const MyInput = ({ placeholder, value, onChange, validison}: MyInputProps) => {
   const [ inputValue, setInputValue] = useState(value);
   const handlerInput = (e) => {
      onChange(e);
      setInputValue(e);
   }

   return (
      <form className='relative'>
          <input 
          tabIndex={0} 
          type='number'  
          className={'text-black m-1 rounded-sm pl-4'} 
          onChange={(e) => handlerInput(e.target.value)} 
          value={inputValue} placeholder={placeholder}/>
      </form>  
   );
};

export default MyInput;