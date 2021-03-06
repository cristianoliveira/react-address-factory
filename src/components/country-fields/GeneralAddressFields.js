import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import GeneralInternationalAddress from '../address-fieldset/GeneralInternationalAddress';

// This is most generic implementation it can be used as default
// when there is no specific country requirement
function GeneralAddressFields(props) {
  return (
    <Fragment>
      <p>This is simple general fieldset for address {props.country}</p>
      <p>There is nothing special in it :)</p>
      <GeneralInternationalAddress {...props} />
    </Fragment>
  );
}

export default GeneralAddressFields;
