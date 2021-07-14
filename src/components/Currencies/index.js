import React from 'react';
import PropTypes from 'prop-types';
import './currencies.scss';

const Currencies = ({ currencies, target }) => (
  <ul className="currencies__list">
    <li className="currencies__list__title">Currencies</li>
    {currencies.map((currency) => (
      <li
        key={currency.name}
        className="currencies__list__currency"
        onClick={target}
      >
        {currency.name}
      </li>
    ))};
  </ul>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      target: PropTypes.func.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
