import type { FC } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App: FC = () => {
  const name = "Patty";
  const greet = (name: string) => <p>Hello, { name || "Guest"}!</p>;
  return (
      <div className = "App">
        <div>{greet(name)}</div>

        <header className="App-header">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>Hello World!</p>
        </header>
      </div>
  );
};

export default App;
