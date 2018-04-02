import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import AddressWithRegion from '../address-fieldset/AddressWithRegion';

function IrishAddressFields(props) {
  return (
    <Fragment>
      <h5>This an address with region</h5>
      <p>Also it has some special behavior :)</p>
      <AddressWithRegion {...props} />
      {props.region && (
        <p>
          You selected a region! <br /> This only shows for Ireland. Have a 🍺
        </p>
      )}
    </Fragment>
  );
}
export default IrishAddressFields;
