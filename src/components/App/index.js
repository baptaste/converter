/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './app.scss';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Footer from 'src/components/Footer';
import Toggler from 'src/components/Toggler';
import data from 'src/data/currencies';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isListOpen: true,
      isFormOpen: false,
      baseAmount: 1,
      selectedCurrency: 'United States Dollar',
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleFormBtnClick = this.handleFormBtnClick.bind(this);
  }

  handleToggleClick() {
    this.setState({
      isListOpen: !this.state.isListOpen,
    });
  }

  handleFormBtnClick() {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
    });
  }

  handleCurrencyClick(e) {
    const clickedCurrency = e.target.textContent;
    this.setState({
      selectedCurrency: clickedCurrency,
    });
  }

  handleChangeAmount(e) {
    const newBaseAmount = e.target.value;
    this.setState({
      baseAmount: newBaseAmount,
    });
  }

  makeConversion() {
    // eslint-disable-next-line max-len
    const foundCurrency = data.find((currency) => currency.name === this.state.selectedCurrency);
    const result = foundCurrency.rate * this.state.baseAmount;
    return Math.round(result * 100) / 100;
  }

  render() {
    return (
      <div className="app">
        <Header
          baseAmount={this.state.baseAmount}
          newBase={this.handleChangeAmount}
          isFormOpen={this.state.isFormOpen}
          onToggle={this.handleFormBtnClick}
        />
        <Toggler
          isTogglerOpen={this.state.isListOpen}
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

export default App;
