import React from 'react';
import PropTypes from 'prop-types';

function AddressLineInput({name, optional, value, onChange, ...props}) {
  return (
    <div>
      <label htmlFor="address_line">Address {optional && '(optional)'}</label>
      <input
        type="text"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

AddressLineInput.defaultProps = {
  name: 'address_line',
  optional: false,
  onChange: console.log,
};

AddressLineInput.propTypes = {
  name: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
};

export default AddressLineInput;
