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
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import StyleSheet from "./components/StyleSheet";
import './appStyles.css'
import styles from './components/appStyle.module.css'
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
        <ParentComponent/>
              <ConditionalRendering/>
                    <ListRendering/>

            */}
        <StyleSheet primary={false}/>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>

    </div>
  );
}

export default App;
