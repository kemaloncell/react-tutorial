import './App.css';
import { FunctionalComponent } from './components/FunctionalComponents'; // you have to use that, if you use `export` tag by the direct function in the relevant component
import { ClassComponent } from './components/ClassComponents'
import JsxComponent from './components/JsxComponents'
import Props from './components/Props'
import State from './components/State'
function App() {
  return (
    <div className="App">
     <JsxComponent/>
     <FunctionalComponent/>
     <ClassComponent name='prop cumali'/>
     <Props  name='prop kemal' >
        <p style={{color:"red"}}>this is a children prop</p>
         <button>Action</button>
      </Props>

      <State/>
    </div>
  );
}

export default App;
