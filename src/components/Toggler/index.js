import React from 'react';
import PropTypes from 'prop-types';
import './toggler.scss';

const Toggler = ({ isOpen, onToggle }) => (
  <button
    className={isOpen ? 'toggler toggler--open' : 'toggler'}
    type="button"
    onClick={onToggle}
  >
    =
  </button>
);

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  // nouveauté : premiere prop de type fonction
  onToggle: PropTypes.func.isRequired,
};

export default Toggler;
