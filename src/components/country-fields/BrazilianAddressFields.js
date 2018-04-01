import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {
  AddressLineInput,
  StreetNumberInput,
  PostCodeInput,
  CityInput,
  StateSelector,
} from '../address-inputs';

const COUNTRY_STATES = {
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

// This is one example when you can't make it generic. Sometimes the
// requirements are so weird it's better to have some duplication than
// contaminating all your components with country specific logic :/
function BrazilianAddressFields(props) {
  const states = Object.keys(COUNTRY_STATES).map(code => ({
    code,
    name: COUNTRY_STATES[code],
  }));

  return (
    <Fragment>
      <p>This is the brazilian address</p>
      <p>I intentionally changed the fields order. (huehuebr)</p>
      <AddressLineInput value={props.address_line} />
      {props.address_line &&
        !props.street_no && <small> Please, inform the number </small>}
      <StreetNumberInput value={props.street_no} />
      <AddressLineInput
        name="address_line2"
        value={props.address_line2}
        optional
      />
      <PostCodeInput value={props.post_code} />
      <StateSelector states={states} value={props.country_state} />
      {props.country_state && (
        <div>
          <div>It's a behavior only for brazil</div>
          <div>Select the city of {COUNTRY_STATES[props.country_state]} </div>
          <CityInput value={props.city} />
        </div>
      )}
    </Fragment>
  );
}

export default BrazilianAddressFields;
