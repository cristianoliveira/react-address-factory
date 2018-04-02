import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {
  AddressLineInput,
  StreetNumberInput,
  RegionSelector,
  PostCodeInput,
  CityInput,
} from './address-inputs';
import './CountryAddressForm.css';

const WarningMessage = ({text}) => <div>{text}</div>;

const COUNTRIES = {
  DE: 'Germany',
  SE: 'Sweden',
  IE: 'Ireland',
  IT: 'Italy',
  SP: 'Spain',
  US: 'USA',
  FR: 'France',
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
  },
  IT: {
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
  SP: {
    15: 'foo',
    24: 'bra',
  },
};

const initialState = {
  country: 'DE',
  address_line: '',
  address_line2: '',
  city: '',
  post_code: '',
};

const formatRegions = regions =>
  Object.keys(regions).map(code => ({
    code,
    name: regions[code],
  }));

class CountryAddressForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit && this.props.onSubmit(this.state);
  }

  handleChange(event) {
    const {target} = event;
    const valueChanged = {[target.name]: target.value};

    this.setState(prev => {
      if (valueChanged['country']) {
        const resetState = Object.keys(prev).reduce(
          (acc, key) => ({...acc, [key]: initialState[key]}),
          initialState,
        );

        return {...resetState, ...valueChanged};
      }

      return {...prev, ...valueChanged};
    });

    this.props.onChange && this.props.onChange(valueChanged);
  }

  render() {
    const {children: fields} = this.props;

    const countries = Object.keys(COUNTRIES).map(code => ({
      code,
      name: COUNTRIES[code],
    }));

    return (
      <form
        className="country-form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          {countries.map(({code, name}) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>

        <AddressLineInput name="address_line" value={this.state.address_line} />
        {this.state.country === 'BR' && <StreetNumberInput name="street_no" />}
        {this.state.country === 'BR' &&
          this.state.address_line && (
            <WarningMessage text="address_form.fill_form" />
          )}
        <AddressLineInput
          name="address_line2"
          value={this.state.address_line2}
          optional
        />

        {['SE', 'DE'].indexOf(this.state.country) >= 0 ? (
          <div>
            <PostCodeInput name="post_code" value={this.state.post_code} />
            <CityInput name="city" value={this.state.city} />
          </div>
        ) : (
          <div>
            <CityInput name="city" value={this.state.city} />
            <PostCodeInput name="post_code" value={this.state.post_code} />
          </div>
        )}

        {COUNTRY_REGIONS[this.state.country] && (
          <RegionSelector
            name="region"
            regions={formatRegions(COUNTRY_REGIONS[this.state.country])}
          />
        )}

        <button>Submit</button>

        <div className="country-form-state">
          <h4>State preview:</h4>
          <pre>
            {JSON.stringify(
              this.state,
              (k, value) => (!!value ? value : undefined),
            )}
          </pre>
        </div>
      </form>
    );
  }
}

CountryAddressForm.defaultProps = {
  countries: [],
  onChange: console.log,
};

CountryAddressForm.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
};

export default CountryAddressForm;
