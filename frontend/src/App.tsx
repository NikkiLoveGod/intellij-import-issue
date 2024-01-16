import React from 'react';
import './App.css';
import { debugPrint } from 'src/testing'

function App() {

  debugPrint('testing')
  const currencyExample = '30'

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <p>Might it cost { currencyExample }?</p>

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
