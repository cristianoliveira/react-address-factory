import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {AddressLineInput, PostCodeInput, CityInput} from '../address-inputs';

function PostCodePriorAddress(props) {
  return (
    <Fragment>
      <AddressLineInput value={props.address_line} />
      <AddressLineInput
        name="address_line2"
        value={props.address_line2}
        optional
      />
      <CityInput value={props.city} />
      <PostCodeInput value={props.post_code} />
    </Fragment>
  );
}

export default PostCodePriorAddress;
