import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArrRoutes } from './components/MyRoutes';
function App() {
  return (
      <div className="App">
      <header className="App-header">
        <Routes>
          {ArrRoutes.map((r) => 
            <Route 
            key={r.path}
            path={r.path}
            Component={r.component}
            exact={r.exact}
            />
          )}
        </Routes>
      </header>
    </div>
  );
}

export default App;
