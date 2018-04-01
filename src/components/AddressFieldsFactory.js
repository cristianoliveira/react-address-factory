import React from 'react';

import GeneralAddressFields from './country-fields/GeneralAddressFields';
import IrishAddressFields from './country-fields/IrishAddressFields';
import BrazilianAddressFields from './country-fields/BrazilianAddressFields';

const ADDRESS_FIELDS = {
  IE: IrishAddressFields,
  BR: BrazilianAddressFields,
};

export default function fieldsFactory(country, props = {}) {
  const fields = ADDRESS_FIELDS[country] || GeneralAddressFields;
  return React.createElement(fields, {...props, country});
}
