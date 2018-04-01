import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {AddressLineInput, PostCodeInput, CityInput} from '../address-inputs';

function AddressCommonInternational(props) {
  return (
    <Fragment>
      <AddressLineInput value={props.address_line} />
      <AddressLineInput
        name="address_line2"
        value={props.address_line2}
        optional
      />
      <PostCodeInput value={props.post_code} />
      <CityInput value={props.city} />
    </Fragment>
  );
}

export default AddressCommonInternational;
