import React from 'react';
import PropTypes from 'prop-types';

function StreetNumberInput({name, optional, onChange, ...props}) {
  return (
    <div>
      <label htmlFor={name}>Street number {optional && '(optional)'}</label>
      <input type="number" name={name} id={name} onChange={onChange} />
    </div>
  );
}

StreetNumberInput.defaultProps = {
  optional: false,
  onChange: console.log,
};

StreetNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
};

export default StreetNumberInput;
