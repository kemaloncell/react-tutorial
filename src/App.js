import './App.css';
import React from 'react';
import ErrorHandlingHero from "./components/ErrorHandlingHero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
            <ErrorBoundary>
         <ErrorHandlingHero heroName='batman'/>
         <ErrorHandlingHero heroName='spiderman'/>
         <ErrorHandlingHero heroName='joker'/>
            </ErrorBoundary>
    </div>
  );
}

export default App;
