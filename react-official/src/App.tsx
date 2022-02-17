import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import EffectClass from './EffectClass'
import EffectFunc from './EffectFunc'

function App() {
  return (
    <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://qiita.com/seira/items/fccdf4e73c59c491558d
            </a>
          </header> */}
          <Counter />
          <EffectClass />
          <EffectFunc />
    </div>
  );
}

export default App;
