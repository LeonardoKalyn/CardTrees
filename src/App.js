import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import treesServices from './services/trees';

function App() {
  useEffect(() => {
    (async ()=> {
      const { data, error } = await treesServices.getTrees();
      console.log(data)
    })();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
