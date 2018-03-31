import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AddressLineInput from './AddressLineInput';
import CountrySelector from './CountrySelector';
import PostCodeInput from './PostCodeInput';
import CityInput from './CityInput';
import RegionSelector from './RegionSelector';

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

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: 'DE',
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit && this.props.onSubmit(this.state);
  }

  handleChange(event) {
    const {target} = event;
    const valueChanged = {[target.name]: target.value};

    this.setState(valueChanged);
    this.props.onChange && this.props.onChange(valueChanged);
  }

  render() {
    const {onSubmit} = this.props;

    const countries = Object.keys(COUNTRIES).map(code => ({
      code,
      name: COUNTRIES[code],
    }));

    const regions = Object.keys(COUNTRY_REGIONS[this.state.country] || []).map(
      code => ({
        code,
        name: COUNTRY_REGIONS[this.state.country][code],
      }),
    );

    return (
      <form
        action="#"
        method="post"
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}>
        <AddressLineInput name="address_line" />
        <AddressLineInput name="address_line2" optional />
        <CountrySelector name="country" countries={countries} />
        <PostCodeInput name="post_code" />
        <CityInput name="city" />
        <RegionSelector
          name="region"
          visible={regions.length > 0}
          regions={regions}
        />
        <button>Submit</button>
        <h4>preview:</h4>
        <pre>{JSON.stringify(this.state)}</pre>
      </form>
    );
  }
}

AddressForm.defaultProps = {};

AddressForm.propTypes = {};

export default AddressForm;
