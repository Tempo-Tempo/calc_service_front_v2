import React from 'react';

const MyImage = (props) => {
   const {width = 150, height = 100, src, alt, style, className} = props;
   return (
      <div className={className}>
           <img src={src} style={style} alt={alt} width={width} height={height}/>
      </div>
    
   );
};

export default MyImage;