import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';

// Example code string to highlight
const myCodeString = `
{- Map function written in Haskell. -}
map           :: (a->b) -> [a] -> [b]
map f  []     =  []
map f (x:xs)  =  f x : map f xs
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I edited <code>src/App.js</code> to display highlighted code.
          </p>
          Take me back to the tutorial on<a
            className="App-link"
            href="https://github.com/captainalan/react-syntax-highlighter-tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github.
          </a>
          <SyntaxHighlighter language='haskell'>
            {myCodeString}
          </SyntaxHighlighter>
        </header>
        <div>
          Couldn't you have made a more fashionable footer?
        </div>
      </div>
    );
  }
}

export default App;
