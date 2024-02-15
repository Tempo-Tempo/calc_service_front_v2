import React from 'react';

const MyImage = (props) => {
   const {width = 150, height = 100, src, alt, className} = props;
   return (
      <div className={className}>
           <img src={src} alt={alt} width={width} height={height}/>
      </div>
    
   );
};

export default MyImage;