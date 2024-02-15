import React, { ReactNode, useEffect } from "react";

interface MyButtonProps {
   children: ReactNode,
   onClick: () => void,
   onSubmit: () => void,
   className: string;
}

const MyButton = ({children, onClick, onSubmit, className = '', ...props}: MyButtonProps) => {
   return (
         <button 
         onClick={onClick} 
         {...props} 
         className={className}>
            {children}
         </button>
   )
}

export default MyButton;