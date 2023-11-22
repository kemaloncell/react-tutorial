import './App.css';
import React from 'react';
import ErrorHandlingHero from "./components/Error-Handling/ErrorHandlingHero";
import higherParent from "./components/Higher-Order-Comp/Parent";
import RenderParent from "./components/Render-Props-Comp/Parent";
import HookUseStateParent from "./components/React-Hook-useState/Parent";
import HookUseEffectParent from "./components/React-Hook-useEffect/Parent";
import Context from "./components/React-Hooks-useContext/Parent";
import UseReducer  from "./components/React-Hook-useReducer/Parent";
import CallBack  from "./components/React-Hook-Callback/Parent";
import UseMemo  from "./components/React-Hook-useMemo/Parent";
import UseRef  from "./components/Reack-Hook-useRef/Parent";
import httpParent from "./components/HTTP/Parent";
import ErrorParent from "./components/Error-Handling/Parent"
import PureParentReqComp from "./components/Pure-Comp/PureParentReqComp"
import MemoParent from "./components/Memo-Comp/MemoParent"
import RefsDemo from "./components/Ref-Comp/exp1/RefsDemo"
import FocusInput from "./components/Ref-Comp/exp2/FocusInput"


function App() {
  return (
    <div className="App">
         <UseRef/>
    </div>
  )
}

export default App;
