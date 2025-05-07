import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
const [count, setCount] = useState(0);
  return (
    <div className="App">
              <h1>欢迎来到我的旅游日记平台！</h1>
       	      <button onClick={() => alert("你好！")}>点击测试</button>
             <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>

  );
}

export default App;
