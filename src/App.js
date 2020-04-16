import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';


function App() {
  return (
    <div className="App">
      <div className="page">
        <span className="menu_toggle">
          <i className="menu_open fa fa-bars fa-lg"></i>
          <i className="menu_close fa fa-times fa-lg"></i>
        </span>
        <ul className="menu_items">
          <li><a href="#"><i className="icon fa fa-signal fa-2x"></i> Moar</a></li>
          <li><a href="#"><i className="icon fa fa-coffee fa-2x"></i> Coffee</a></li>
          <li><a href="#"><i className="icon fa fa-heart fa-2x"></i> Please</a></li>
        </ul>
        <main className="content">
    <div className="content_inner">
      <p>TEXT</p>
      {/*<header className="App-header">
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
  </header> */}
      </div>
      </main>
      </div>
    </div>
  );
}

export default App;
