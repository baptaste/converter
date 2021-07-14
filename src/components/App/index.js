/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React, { Component } from 'react';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Footer from 'src/components/Footer';
import Toggler from 'src/components/Toggler';
import data from 'src/data/currencies';
import currencies from '../../data/currencies';

// == Composant

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isListOpen: true,
      baseAmount: 1,
      selectedCurrency: 'United States Dollar',
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
  }

  handleToggleClick() {
    this.setState({
      isListOpen: !this.state.isListOpen,
    });
  }

  handleCurrencyClick(e) {
    const clickedCurrency = e.target.textContent;
    this.setState({
      selectedCurrency: clickedCurrency,
    });
  }

  makeConversion() {
    // eslint-disable-next-line max-len
    const foundCurrency = data.find((currency) => currency.name === this.state.selectedCurrency);

    const result = foundCurrency.rate * this.state.baseAmount;

    // on arroundi à deux décimales
    return Math.round(result * 100) / 100;
  }

  render() {
    return (
      <div className="app">
        <Header baseAmount={this.state.baseAmount} />
        <Toggler
          isOpen={this.state.isListOpen}
          onToggle={this.handleToggleClick}
        />
        {this.state.isListOpen
        && <Currencies currencies={data} target={this.handleCurrencyClick} />}
        <Footer
          currencyName={this.state.selectedCurrency}
          value={this.makeConversion()}
        />
      </div>
    );
  }
}

// == Export
export default App;
