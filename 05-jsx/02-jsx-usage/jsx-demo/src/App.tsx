import Greet from './components/Greet';

import './App.css';
import type React from 'react';

const App: React.FC = () => (
  <div className="App">
    <Greet name="Patty" times={4} />
  </div>
);

export default App;