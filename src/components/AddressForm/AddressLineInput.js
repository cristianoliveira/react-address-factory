import React from 'react';
import PropTypes from 'prop-types';

function AddressLineInput({name, optional, onChange, ...props}) {
  return (
    <div>
      <label htmlFor="address_line">Address {optional && '(Optional)'}</label>
      <input type="text" name={name} id={name} onChange={onChange} />
    </div>
  );
}

AddressLineInput.defaultProps = {
  optional: false,
  onChange: console.log,
};

AddressLineInput.propTypes = {
  name: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
};

export default AddressLineInput;
