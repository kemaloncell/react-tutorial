import './App.css';
import { FunctionalComponent } from './components/FunctionalComponents'; // you have to use that, if you use `export` tag by the direct function in the relevant component
import { ClassComponent } from './components/ClassComponents'
import JsxComponent from './components/JsxComponents'
import Props from './components/Props'
import State from './components/State'
import SetStateCounter from  './components/SetStateCounter'
import FunctionClick from "./components/FunchtionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
        {/*
            <JsxComponent/>
            <FunctionalComponent/>
            <ClassComponent name='prop cumali'/>
            <hr/>
            <Props  name='prop kemal' >
            <p style={{color:"red"}}>this is a children prop</p>
            <button>Action</button>
            </Props>
            <hr/>
            <State/>
            <hr/>
            <SetStateCounter/>
               <ClassClick/>
        <hr></hr>
        <FunctionClick/>
        <hr></hr>
        <hr></hr>
        <EventBind/>

            */}

        <ParentComponent/>

    </div>
  );
}

export default App;
