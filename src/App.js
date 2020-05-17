import React, { Component } from 'react';
import './App.css';
import Products from './Products.js';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My SUPER AMAZING React App</h1>
        </header>
        <section>
          <Products></Products>
        </section>
      </div>
    );
  }
}

export default App;
