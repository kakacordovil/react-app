import React, { Component } from 'react';
import './App.css';
import Products from './Products.js';


var PRODUCTS = {
  '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
};

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
