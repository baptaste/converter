import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({
  baseAmount, newBase, isFormOpen, onToggle,
}) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>

    <div className="header__subtitle">
      {baseAmount} euro(s)
      <button
        type="button"
        className="showFormBtn"
        onClick={onToggle}
      >
        {isFormOpen ? 'Close' : 'Change Amount'}
      </button>
    </div>

    <form className={isFormOpen ? 'header__form--open' : 'header__form'}>
      <input
        type="number"
        name="base"
        onChange={newBase}
        className="header__form__input"
      />
    </form>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  newBase: PropTypes.number.isRequired,
  isFormOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Header;
