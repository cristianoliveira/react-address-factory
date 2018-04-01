import React from 'react';
import PropTypes from 'prop-types';

function StateSelector({name, states, visible, onChange, ...props}) {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <label htmlFor={name}>State</label>
      <select id={name} name={name} onChange={onChange}>
        <option value="">Select State</option>
        {states.map(({code, name}) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

StateSelector.defaultProps = {
  name: 'country_state',
  visible: true,
  states: [],
  onChange: console.log,
};

StateSelector.propTypes = {
  visible: PropTypes.bool,
  name: PropTypes.string.isRequired,
  states: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
};

export default StateSelector;
