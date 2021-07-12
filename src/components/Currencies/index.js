import React from 'react';

import './currencies.scss';

const Currencies = ({ currencies }) => (
  <ul className="currencies__list">
    <li className="currencies__list__title">Currencies</li>
    {currencies.map((currency) => (
      <li key={currency.name} className="currencies__list__currency">{currency.name}</li> 
    ))};
  </ul>
);

export default Currencies;
