import type { FC } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App: FC = () => {
  const name = "Patty";
  const greet = (name: string) => <p>Hello, { name || "Guest"}!</p>;

  const n = Math.floor(Math.random() * 10);
  const threshold = 5;

  return (
      <div className = "App">
        <div>{greet(name)}</div>

        <div />
        <div></div>
        <div>{''}</div>
        <div>{undefined}</div>
        <div>{null}</div>
        <div>{true}</div>
        <div>{false}</div>
        
        {n > threshold && (<p>{n}は{threshold}よりも大きい値です</p>)}
        {n > threshold || (<p>{n}は{threshold}以下の値です</p>)}
        <p>{n}は{n % 2 === 0 ? '偶数' : '奇数'}です</p>
        <header className="App-header">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>Hello World!</p>
        </header>
      </div>
  );
};

export default App;
