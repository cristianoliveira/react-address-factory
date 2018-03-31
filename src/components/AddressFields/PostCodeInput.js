import React from 'react';
import PropTypes from 'prop-types';

function PostCodeInput({name, optional, ...props}) {
  return (
    <div>
      <label htmlFor={name}>
        Post code {props.type} {optional && '(optional)'}
      </label>
      <input {...{id: name, name, ...props}} />
    </div>
  );
}

PostCodeInput.defaultProps = {
  type: 'number',
  onChange: console.log,
  optional: false,
};

PostCodeInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
};

export default PostCodeInput;
