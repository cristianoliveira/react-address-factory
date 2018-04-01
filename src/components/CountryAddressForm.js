import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './CountryAddressForm.css';

const COUNTRIES = {
  DE: 'Germany',
  IE: 'Ireland',
  US: 'USA',
  FR: 'France',
  BR: 'Brazil',
};

const initialState = {
  country: 'DE',
  address_line: '',
  address_line2: '',
  city: '',
  post_code: '',
};

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

        {fields(this.state)}

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
