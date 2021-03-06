import React, {Component} from 'react';
import {isEmpty} from 'lodash';
import logo from './logo.svg';
import {CountryFields} from './components/CountryFieldsFactory';
// import CountryAddressForm from './components/NaiveCountryAddressForm';
import CountryAddressForm from './components/CountryAddressForm';
import './App.css';

class App extends Component {
  onSubmitForm(state) {
    window.alert('Your data:' + JSON.stringify(state));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React address factory</h1>
        </header>
        <div className="App-container">
          <CountryAddressForm onSubmit={this.onSubmitForm.bind(this)}>
            {state => <CountryFields {...state} />}
          </CountryAddressForm>
        </div>
      </div>
    );
  }
}

export default App;
