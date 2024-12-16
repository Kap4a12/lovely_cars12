import React from 'react';
import './App.css';
import { Home } from './components/pages/home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Home/>
      <footer>
        Подвал сайта
      </footer>
    </div>
  );
}

export default App;
