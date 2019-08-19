import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable/DataTable.js';
import Header from './components/Header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <DataTable/>
      </div>
    );
  }
}

export default App;
