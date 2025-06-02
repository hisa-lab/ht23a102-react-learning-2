import Greet from './components/Greet';
import Summary from './components/Summary';

import './App.css';
import type React from 'react';

const App: React.FC = () => (
  <div className="App">
    <Greet name="Patty" times={4} />
    <Summary title="Maple Town">
      <p>
        Patty Hope-rabbit, along with her family, arrives in Maple Town, a
        smalltown inhabited by friendly animals.
      </p>
      <p>
        Soon, the Rabbit Family settles in Maple Town as mail carriers and the
        bitter, yet sweet friendship of Patty and Bobby begins to blossom.
      </p>
    </Summary>

    <form>
      <label htmlFor="favChar">好きなキャラクターは？</label>
      <select id="favCahr" defaultValue="fox">
        <option value="rabbit">パティ</option>
        <option value="bear">ボビー</option>
        <option value="fox">ダイアナ</option> {/* selected */}
        <option value="pig">プリプリン</option>
        <option value="squirrel">ジュディ</option>
      </select>
      <label htmlFor="favReason">そのキャラクターのどこが好き？</label>
      <textarea id="favReason" defaultValue=" 【例】見た目が好き" />
    </form>
  </div>
);

export default App;