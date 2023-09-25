import './App.css';
import React from 'react';
import ErrorHandlingHero from "./components/Error-Handling/ErrorHandlingHero";
import higherParent from "./components/Higher-Order-Comp/Parent";
import RenderParent from "./components/Render-Props-Comp/Parent";
import httpParent from "./components/HTTP/Parent";
import ErrorParent from "./components/Error-Handling/Parent"
import PureParentReqComp from "./components/Pure-Comp/PureParentReqComp"
import MemoParent from "./components/Memo-Comp/MemoParent"
import RefsDemo from "./components/Ref-Comp/exp1/RefsDemo"
import FocusInput from "./components/Ref-Comp/exp2/FocusInput"


function App() {
  return (
    <div className="App">
         <RenderParent/>
    </div>
  )
}

export default App;
