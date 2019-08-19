import React, { Component } from 'react';
import './DataTable.css';


const JsonTable = require('ts-react-json-table');

var columnsJSON = [
   {key: 'id', label: 'id'},
   {key: 'first_name', label: 'First Name'},
   {key: 'last_name', label: 'Last Name'},
   {key: 'company', label: 'Company'},
   {key: 'email', label: 'Email'},
   {key: 'address1', label: 'Address1'},
   {key: 'address2', label: 'Address2'},
   {key: 'zip', label: 'Zip'},
   {key: 'city', label: 'City'},
   {key: 'state_long', label: 'State Long'},
   {key: 'state', label: 'State'},
   {key: 'phone', label: 'Phone'},
  ];

  var excludeColumns = [
   'id',
];


class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      source: []
    };
  }

  componentDidMount() {

    fetch('/api/myJSON')
      .then(res => res.json())
      .then(source => this.setState({source}, () => console.log('JSON Data...', source)));
    
  }


  render() {
    return (
      <div className='DataTable-container'>
        <JsonTable 
          className='mainTable' 
          theadClassName={'headers'}
          rows={ this.state.source } 
          columns={ columnsJSON } 
          excludeColumns={ excludeColumns }

          />       
      </div>
    );
  }
}

export default DataTable;
