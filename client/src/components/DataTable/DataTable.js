import React, { Component } from 'react';
import './DataTable.css';

const JsonTable = require('ts-react-json-table');

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      source: []
    };
  }

  componentDidMount() {
    fetch('/api/myJson')
      .then(res => res.json())
      .then(source => this.setState({source}, () => console.log('Json data fetched...', source)));
  }

  render() {
    return (
      <div>
        <JsonTable rows={ this.state.source } />       
      </div>
    );
  }
}

export default DataTable;
