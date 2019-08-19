import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
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
        <h2>myJson names</h2>
        <ul>
        {this.state.source.map(source => 
          <li key={source.id}>{source.first_name} {source.last_name}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
