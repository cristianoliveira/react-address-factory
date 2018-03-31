import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {
  AddressLineInput,
  PostCodeInput,
  CityInput,
  RegionSelector,
} from '../AddressFields';

const COUNTRY_REGIONS = {
  5: 'Carlow',
  23: 'Cavan',
  21: 'Clare',
  12: 'Cork',
  18: 'Donegal',
  16: 'Dublin',
  17: 'Galway',
  11: 'Kerry',
  14: 'Kildare',
  9: 'Kilkenny',
  22: 'Laois',
  7: 'Leitrim',
  3: 'Limerick',
  6: 'Longford',
  25: 'Louth',
  10: 'Mayo',
  15: 'Meath',
  24: 'Monaghan',
  2: 'Offaly',
  20: 'Roscommon',
  19: 'Sligo',
  8: 'Tipperary',
  4: 'Waterford',
  1: 'West',
  26: 'Wexford',
  13: 'Wicklow',
};

function IrishAddressFields() {
  const regions = Object.keys(COUNTRY_REGIONS).map(code => ({
    code,
    name: COUNTRY_REGIONS[code],
  }));

  return (
    <Fragment>
      <AddressLineInput name="address_line" />
      <AddressLineInput name="address_line2" optional />
      <PostCodeInput name="post_code" type="text" optional />
      <CityInput name="city" />
      <RegionSelector name="region" regions={regions} />
    </Fragment>
  );
}

export default IrishAddressFields;
