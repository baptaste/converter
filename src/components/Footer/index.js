import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import './footer.scss';

const Footer = ({ currencyName, value }) => (
  <footer className="footer">
    <CountUp
      decimals={2}
      end={value}
      className="footer__value"
    />
    <h2 className="footer__current-currency">{currencyName}</h2>
  </footer>
);

Footer.propTypes = {
  currencyName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Footer;
