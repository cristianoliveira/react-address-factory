import React from 'react';

import GeneralAddressFields from './country-fields/GeneralAddressFields';
import IrishAddressFields from './country-fields/IrishAddressFields';
import BrazilianAddressFields from './country-fields/BrazilianAddressFields';

const ADDRESS_FIELDS = {
  DE: GeneralAddressFields,
  FR: GeneralAddressFields,
  IE: IrishAddressFields,
  BR: BrazilianAddressFields,
};

export default function fieldsFactory(country, props = {}) {
  return React.createElement(ADDRESS_FIELDS[country], {...props, country});
}
