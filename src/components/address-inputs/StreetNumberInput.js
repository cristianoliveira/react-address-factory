import React from 'react';
import PropTypes from 'prop-types';

function StreetNumberInput({name, optional, error, onChange, ...props}) {
  return (
    <div>
      <label htmlFor={name}>Street number {optional && '(optional)'}</label>
      <input type="number" name={name} id={name} onChange={onChange} />
    </div>
  );
}

StreetNumberInput.defaultProps = {
  name: 'street_no',
  optional: false,
  onChange: console.log,
};

StreetNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
};

export default StreetNumberInput;
