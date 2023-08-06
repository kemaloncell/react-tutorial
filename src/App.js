import './App.css';
import React from 'react';
import ErrorHandlingHero from "./components/Error-Handling/ErrorHandlingHero";
import HigherOrderParentComp from "./components/Higher-Order-Comp/HigherOrderParentComp";
import RenderPropsClickCounter from "./components/Render-Props-Comp/RenderPropsClickCounter";
import RenderPropsParentComp from "./components/Render-Props-Comp/RenderPropsParentComp";
import Parent from "./components/HTTP/Parent";


function App() {
  return (
    <div className="App">
         <Parent/>
    </div>
  );
}

export default App;
