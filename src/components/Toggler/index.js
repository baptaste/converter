import React from 'react';
import PropTypes from 'prop-types';
import './toggler.scss';

const Toggler = ({ isTogglerOpen, onToggle }) => (
  <button
    className={isTogglerOpen ? 'toggler toggler--open' : 'toggler'}
    type="button"
    onClick={onToggle}
  >
    =
  </button>
);

Toggler.propTypes = {
  isTogglerOpen: PropTypes.bool.isRequired,
  // nouveauté : premiere prop de type fonction
  onToggle: PropTypes.func.isRequired,
};

export default Toggler;
