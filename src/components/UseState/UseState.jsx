import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  function darkClick(){
    setTheme('dark');
  }
  function lightClick(){
    setTheme('light');
  }
  function decr(){
    setCount((prevCount) => prevCount - 1);
  }
  function incr(){
    setCount((prevCount) => prevCount + 1);
  }
  function toggleClick(){
    if(theme==='light'){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }
  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={toggleClick}>Toggle theme</button>
      <h2>{count}</h2>
      <button onClick={incr}>
        Increment
      </button>
      <button onClick={decr}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
