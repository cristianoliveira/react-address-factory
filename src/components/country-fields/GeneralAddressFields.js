import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {AddressLineInput, PostCodeInput, CityInput} from '../AddressFields';

function GermanAddressFields() {
  return (
    <Fragment>
      <AddressLineInput name="address_line" />
      <AddressLineInput name="address_line2" optional />
      <PostCodeInput name="post_code" />
      <CityInput name="city" />
    </Fragment>
  );
}

export default GermanAddressFields;
