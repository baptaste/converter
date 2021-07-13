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

// == Composant

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isListOpen: true,
      baseAmount: 1,
      selectedCurrency: 'Japanese Yen',
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState({
      isListOpen: !this.state.isListOpen,
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
        {this.state.isListOpen && <Currencies currencies={data} />}
        <Footer
          currency={this.state.selectedCurrency}
          value={this.makeConversion()}
        />
      </div>
    );
  }
}

// == Export
export default App;
