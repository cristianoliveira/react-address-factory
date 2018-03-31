import React, {Component} from 'react';
import {isEmpty} from 'lodash';
import logo from './logo.svg';
import './App.css';

const COUNTRIES = {
  DE: 'Germany',
  IE: 'Ireland',
  BR: 'Brazil',
};

const COUNTRY_REGIONS = {
  IE: {
    5: 'Carlow',
    23: 'Cavan',
    21: 'Clare',
    12: 'Cork',
    18: 'Donegal',
    16: 'Dublin',
    17: 'Galway',
    11: 'Kerry',
    14: 'Kildare',
    9: 'Kilkenny',
    22: 'Laois',
    7: 'Leitrim',
    3: 'Limerick',
    6: 'Longford',
    25: 'Louth',
    10: 'Mayo',
    15: 'Meath',
    24: 'Monaghan',
    2: 'Offaly',
    20: 'Roscommon',
    19: 'Sligo',
    8: 'Tipperary',
    4: 'Waterford',
    1: 'West',
    26: 'Wexford',
    13: 'Wicklow',
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: 'DE',
    };
  }
  onSubmitForm(event) {
    event.preventDefault();
    console.log('this.state: ', this.state);
    return false;
  }

  handleInput({target}) {
    this.setState({[target.name]: target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React address factory</h1>
        </header>
        <div className="App-intro">
          <form
            action="#"
            method="post"
            onSubmit={this.onSubmitForm.bind(this)}>
            <div>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                onChange={this.handleInput.bind(this)}>
                {Object.keys(COUNTRIES).map(code => (
                  <option value={code} key={code}>
                    {COUNTRIES[code]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="address_line">Address</label>
              <input
                type="text"
                name="address_line"
                id="address_line"
                onChange={this.handleInput.bind(this)}
              />
            </div>
            <div>
              <label htmlFor="address_lines2">Address (optional)</label>
              <input
                type="text"
                name="address_line2"
                id="address_line2"
                onChange={this.handleInput.bind(this)}
              />
            </div>
            <div>
              <label htmlFor="post_code">Post code</label>
              <input
                type="number"
                name="post_code"
                id="post_code"
                onChange={this.handleInput.bind(this)}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                onChange={this.handleInput.bind(this)}
              />
            </div>
            {!isEmpty(COUNTRY_REGIONS[this.state.country]) && (
              <div>
                <label htmlFor="region_id">Region</label>
                <select
                  id="region_id"
                  name="region_id"
                  onChange={this.handleInput.bind(this)}>
                  <option value="">Select Region</option>
                  {Object.keys(COUNTRY_REGIONS[this.state.country]).map(
                    (code, i) => (
                      <option value={code} key={i}>
                        {COUNTRY_REGIONS[this.state.country][code]}
                      </option>
                    ),
                  )}
                </select>
              </div>
            )}
            <button>Submit</button>
          </form>
        </div>

        <h4>Data:</h4>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    );
  }
}

export default App;
