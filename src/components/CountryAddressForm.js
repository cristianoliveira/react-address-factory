import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const COUNTRIES = {
  DE: 'Germany',
  IE: 'Ireland',
  FR: 'France',
  BR: 'Brazil',
};

class CountryAddressForm extends PureComponent {
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

    this.setState(prev => {
      if (valueChanged['country']) {
        // Sorry for this magic but in order to reset the state.
        const emptyState = Object.keys(prev).reduce(
          (acc, key) => ({...acc, [key]: undefined}),
          {},
        );

        return {...emptyState, ...valueChanged};
      }

      return {...prev, ...valueChanged};
    });

    this.props.onChange && this.props.onChange(valueChanged);
  }

  render() {
    const {name, children: fields} = this.props;

    const countries = Object.keys(COUNTRIES).map(code => ({
      code,
      name: COUNTRIES[code],
    }));

    return (
      <form
        action="#"
        method="post"
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}>
        <input type="hidden" name="country" id="country" value="DE" />
        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          onChange={this.handleChange.bind(this)}>
          {countries.map(({code, name}) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>

        {fields(this.state.country)}

        <button>Submit</button>
        <h4>State preview:</h4>
        <pre>{JSON.stringify(this.state)}</pre>
      </form>
    );
  }
}

CountryAddressForm.defaultProps = {
  countries: [],
  onChange: console.log,
};

CountryAddressForm.propTypes = {
  name: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
};

export default CountryAddressForm;
