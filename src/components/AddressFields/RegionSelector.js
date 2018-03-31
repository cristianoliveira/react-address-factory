import React from 'react';
import PropTypes from 'prop-types';

function RegionSelector({name, regions, visible, onChange, ...props}) {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <label htmlFor={name}>Region</label>
      <select id={name} name={name} onChange={onChange}>
        <option value="">Select Region</option>
        {regions.map(({code, name}) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

RegionSelector.defaultProps = {
  visible: true,
  regions: [],
  onChange: console.log,
};

RegionSelector.propTypes = {
  visible: PropTypes.bool,
  name: PropTypes.string.isRequired,
  regions: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
};

export default RegionSelector;
