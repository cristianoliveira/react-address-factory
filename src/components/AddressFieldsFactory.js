import React from 'react';

import GeneralAddressFields from './country-fields/GeneralAddressFields';
import IrishAddressFields from './country-fields/IrishAddressFields';
import BrazilianAddressFields from './country-fields/BrazilianAddressFields';

const ADDRESSES = {
  DE: GeneralAddressFields,
  FR: GeneralAddressFields,
  IE: IrishAddressFields,
  BR: BrazilianAddressFields,
};

export default function fieldsFactory(country, props = {}) {
  return React.createElement(ADDRESSES[country], {...props, country});
}
