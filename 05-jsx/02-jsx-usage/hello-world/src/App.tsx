import type { FC } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App: FC = () => {
  return (
      <div className = "App">
        <header className="App-header">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>Hello World!</p>
        </header>
      </div>
  );
};

export default App;
