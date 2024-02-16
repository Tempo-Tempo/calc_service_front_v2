import React, { ReactNode } from "react";


interface MyButtonProps {
   children: ReactNode,
   onClick: () => void,
   onSubmit: () => void,
   className: string;
}

const MyButton = ({children, onClick, onSubmit, className = 'MyButton', ...props}: MyButtonProps) => {
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