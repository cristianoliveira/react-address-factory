import React from 'react';

import RegionAddress from './address-fieldset/RegionAddress';
import PostCodePriorAddress from './address-fieldset/PostCodePriorAddress';
import GeneralAddressFields from './country-fields/GeneralAddressFields';
import IrishAddressFields from './country-fields/IrishAddressFields';
import BrazilianAddressFields from './country-fields/BrazilianAddressFields';

const ADDRESS_FIELDS = {
  DE: PostCodePriorAddress,
  SE: PostCodePriorAddress,
  SP: RegionAddress,
  IT: RegionAddress,
  IE: IrishAddressFields,
  BR: BrazilianAddressFields,
};

const COUNTRY_REGIONS = {
  IE: {
    5: 'Carlow',
    23: 'Cavan',
    21: 'Clare',
    12: 'Cork',
    18: 'Donegal',
    16: 'Dublin',
    17: 'Galway',
  },
  IT: {
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
  },
  SP: {
    15: 'foo',
    24: 'bra',
  },
};

const formatRegions = regions =>
  regions &&
  Object.keys(regions).map(code => ({
    code,
    name: regions[code],
  }));

export function CountryFields({country, ...props}) {
  const Fields = ADDRESS_FIELDS[country] || GeneralAddressFields;
  const regions = formatRegions(COUNTRY_REGIONS[country]);

  return <Fields {...{...props, regions, country}} />;
}

// It can be used as a simple function too :)
//
// <CountryAddressForm onSubmit={this.onSubmitForm.bind(this)}>
//   {fieldsFactory}
// </CountryAddressForm>
export default function fieldsFactory({country, ...props}) {
  const fields = ADDRESS_FIELDS[country] || GeneralAddressFields;
  const regions = formatRegions(regions);

  return React.createElement(fields, {...props, country});
}
