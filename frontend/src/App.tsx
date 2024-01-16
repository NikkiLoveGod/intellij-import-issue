import React from 'react';
import './App.css';
import { debugPrint } from 'src/testing'
import { formatCurrency } from 'common/utils/format'

function App() {

  debugPrint('testing')

  // On windows host side, the function argument documentation works as intended
  // It also works on MacOS
  // On Windows, having the files on wsl2, function argument documentation does not work.
  const currencyExample = formatCurrency(1234.56, 'USD', 'fi')


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
