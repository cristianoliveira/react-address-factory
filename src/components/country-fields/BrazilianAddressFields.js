import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {
  AddressLineInput,
  StreetNumberInput,
  PostCodeInput,
  CityInput,
  StateSelector,
} from '../AddressFields';

const STATES = {
  AC: 'Acre',
  AL: 'Alagoas',
  AM: 'Amazonas',
  AP: 'Amapá',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MG: 'Minas Gerais',
  MS: 'Mato Grosso do Sul',
  MT: 'Mato Grosso',
  PA: 'Pará',
  PB: 'Paraíba',
  PE: 'Pernambuco',
  PI: 'Piauí',
  PR: 'Paraná',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RO: 'Rondônia',
  RR: 'Roraima',
  RS: 'Rio Grande do Sul',
  SC: 'Santa Catarina',
  SE: 'Sergipe',
  SP: 'São Paulo',
  TO: 'Tocantins',
};

function BrazilianAddressFields() {
  const states = Object.keys(STATES).map(code => ({
    code,
    name: STATES[code],
  }));

  return (
    <Fragment>
      <AddressLineInput name="address_line" />
      <AddressLineInput name="address_line2" optional />
      <StreetNumberInput name="number" />
      <PostCodeInput name="post_code" type="text" />
      <StateSelector name="state" states={states} />
      <CityInput name="city" />
    </Fragment>
  );
}

export default BrazilianAddressFields;
