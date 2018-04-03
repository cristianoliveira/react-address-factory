import React from 'react';

import {COUNTRY_REGIONS} from './constants';

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
  const regions = formatRegions(COUNTRY_REGIONS[country]);

  return React.createElement(fields, {...props, country});
}
