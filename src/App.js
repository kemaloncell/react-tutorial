import './App.css';
import React from 'react';
import ErrorHandlingHero from "./components/ErrorHandlingHero";
import HigherOrderParentComp from "./components/HigherOrderParentComp";
import RenderPropsClickCounter from "./components/RenderPropsClickCounter";
import RenderPropsParentComp from "./components/RenderPropsParentComp";


function App() {
  return (
    <div className="App">
         <RenderPropsParentComp/>
    </div>
  );
}

export default App;
