import React from 'react';
import PropTypes from 'prop-types';

function PostCodeInput({name, onChange, ...props}) {
  return (
    <div>
      <label htmlFor={name}>Post code</label>
      <input type="number" name={name} id={name} onChange={onChange} />
    </div>
  );
}

PostCodeInput.defaultProps = {
  onChange: console.log,
};

PostCodeInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default PostCodeInput;
