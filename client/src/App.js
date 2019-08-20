import React, { Component } from 'react';
import './App.css';
import DataTable from './components/DataTable/DataTable';
import Header from './components/Header/Header.js';
import DupeAlert from './components/DupeAlert/DupeAlert.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <DupeAlert/>
        <DataTable/>
      </div>
    );
  }
}

export default App;
