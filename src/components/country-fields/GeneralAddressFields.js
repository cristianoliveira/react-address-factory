import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import AddressCommonInternational from '../address-fieldset/AddressCommonInternational';

function GeneralAddressFields(props) {
  debugger;
  return (
    <Fragment>
      <p>This is simple general fieldset for address {props.country}</p>
      <p>There is nothing special in it :)</p>
      <AddressCommonInternational {...props} />
    </Fragment>
  );
}

export default GeneralAddressFields;
