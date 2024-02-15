import '../App.css';
import React from 'react';
import MyTriangle from './figurePages/MyTriangle';



function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
         <MyTriangle />
      </header>
    </div>
  );
}

export default MainPage;
