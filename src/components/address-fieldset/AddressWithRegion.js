import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {
  AddressLineInput,
  PostCodeInput,
  CityInput,
  RegionSelector,
} from '../address-inputs';

function AddressRegionFieldset(props) {
  return (
    <Fragment>
      <AddressLineInput value={props.address_line} />
      <AddressLineInput
        name="address_line2"
        value={props.address_line2}
        optional
      />
      <PostCodeInput type="text" value={props.post_code} />
      <CityInput value={props.city} />
      <RegionSelector regions={props.regions} />
    </Fragment>
  );
}

export default AddressRegionFieldset;
