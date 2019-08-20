import React, { Component } from 'react';
import './DupeAlert.css';

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

class DupeAlert extends Component {
  constructor() {
    super();
    this.state = {
      antisource: []
    };
  }

  componentDidMount() {

    fetch('/api/dupes')
      .then(res => res.json())
      .then(antisource => this.setState({antisource}, () => console.log('Dupe Data...', antisource)));
    
  }

  render() {
    return (
    <div style={{marginTop:'20px'}}>
      <img src={require("../../assets/DupesFound.png")} className='DupeAlert-image'/>
      <div className='DupeAlert-container'>
        <JsonTable 
          className='DupeAlert-table' 
          rows={ this.state.antisource } 
          columns={ columnsJSON } 
          excludeColumns={ excludeColumns }
          />       
      </div>
      </div>
    );
  }
}

export default DupeAlert;
