import type { FC } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App: FC = () => {
  const name = "Patty";
  const greet = (name: string) => <p>Hello, { name || "Guest"}!</p>;

  const n = Math.floor(Math.random() * 10);
  const threshold = 5;

  const list = ['Patty', 'Rolley', 'Bobby'];
  const list2 = [1, 2, 3, 4, 5];

  const elems = (
    <>
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </>
  );

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

        <ul>
          {list.map((name) => (
            <li>Hello, {name}!</li>
          ))}
        </ul>
        <ul>
          {list2.filter((n) => n % 2 === 0).map((n) => <li>{n}は偶数だ</li>)}
        </ul>
        
        {
          // インラインコメント
        }
        {/*           
          複数行に
          渡るコメント 
        */}
        
        {elems}
      </div>
  );
};

export default App;
