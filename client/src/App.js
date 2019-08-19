import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable/DataTable.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Data Match and Report</h1>
        </header>
        <DataTable />
      </div>
    );
  }
}

export default App;
