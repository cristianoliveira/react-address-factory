import React from 'react';
import PropTypes from 'prop-types';

function CityInput({name, onChange}) {
  return (
    <div>
      <label htmlFor={name}>City</label>
      <input type="text" name={name} id={name} onChange={onChange} />
    </div>
  );
}

CityInput.defaultProps = {
  name: 'city',
  onChange: console.log,
};

CityInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default CityInput;
