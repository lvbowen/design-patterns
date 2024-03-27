import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import "./test/decorator";

function App() {

  useEffect(() => {
    // 创建一个主题对象（Subject）
    const button = document.getElementById('myButton');

    // 创建观察者（Observer）
    const handleClick = () => {
      console.log('按钮被点击了！')
    }

    // 将观察者订阅到主题上
    button.addEventListener('click', handleClick);
    button.addEventListener('click', () => {});
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <button id='myButton'>按钮111</button>
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
