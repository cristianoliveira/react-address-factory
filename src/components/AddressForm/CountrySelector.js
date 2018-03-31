import React from 'react';
import PropTypes from 'prop-types';

function CountrySelector({name, countries, onChange, ...props}) {
  return (
    <div>
      <label htmlFor={name}>Country</label>
      <select id={name} name={name} onChange={onChange}>
        {countries.map(({code, name}) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

CountrySelector.defaultProps = {
  countries: [],
  onChange: console.log,
};

CountrySelector.propTypes = {
  name: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
};

export default CountrySelector;
