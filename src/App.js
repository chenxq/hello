import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';

const array = [1, 2, 3];
class App extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }
  
  render() {
    return (
      <div className="App">
        <div>
          {array.map(item => this.renderSquare(item))}
        </div>
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
}

export default App;
