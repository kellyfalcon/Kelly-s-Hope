import React from 'react';
import heart from './heartgif.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={heart} className="App-logo" alt="heart" />
        <p>
        Edit <code>src/App.js</code>and save to reload.
        </p>
        <p>
        By Kelly Falcon
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
