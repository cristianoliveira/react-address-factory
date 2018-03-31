import React, {Component} from 'react';
import {isEmpty} from 'lodash';
import logo from './logo.svg';
import CountryAddressForm from './components/CountryAddressForm';
import addressFieldsFactory from './components/AddressFieldsFactory';
import './App.css';

class App extends Component {
  onSubmitForm(state) {
    console.log('state: ', state);
    return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React address factory</h1>
        </header>
        <div className="App-container">
          <CountryAddressForm onSubmit={this.onSubmitForm.bind(this)}>
            {addressFieldsFactory}
          </CountryAddressForm>
        </div>
      </div>
    );
  }
}

export default App;
