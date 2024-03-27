import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import "./test/decorator";
import Target from './components/target';
 
function App() {

  useEffect(() => {
    
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <button id='myButton'>按钮111</button>
        <br />
        {/* 目标组件 */}
        <Target title="目标组件" />

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
     
    </div>
  );
}

export default App;
