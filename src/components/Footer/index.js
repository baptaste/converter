import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import './footer.scss';

const Footer = ({ currency, value }) => (
  <footer className="footer">
    <CountUp decimals={2} className="footer__value" end={value} />
    <h2 className="footer__current-currency">{currency}</h2>
  </footer>
);

Footer.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Footer;
