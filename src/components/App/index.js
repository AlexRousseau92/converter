/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
// == Import
import React from 'react';

import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Toggler from '../Toggler';

import './styles.css';

import currenciesArray from '../../data/currencies';

class App extends React.Component {
  state = {
    isVisible: true,
    baseAmount: 1,
    selectedCurrency: 'United States Dollar',
    filterText: '',
  }

  toggleCurrencies = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  getOtherCurrency = (currencyObj) => {
    this.setState({
      selectedCurrency: currencyObj,

    });
  }

  getValue = () => {
    const { selectedCurrency, baseAmount } = this.state;
    const currencyObject = currenciesArray.find((currency) => currency.name === selectedCurrency);
    const result = currencyObject.rate * baseAmount;
    return Math.round(result * 100) / 100;
  }

  changeBaseValue = (number) => {
    this.setState({
      baseAmount: number,
    });
  }

  searchByName = (searchInputValue) => {
    this.setState({
      filterText: searchInputValue,
    });
  }

  getFilteredCurrencies = () => {
    const { filterText } = this.state;
    const filteredCurrencies = currenciesArray.filter((currency) => {
      const filter = filterText.toLocaleLowerCase();
      const currencyName = currency.name.toLocaleLowerCase();
      const currencyContainFilter = currencyName.includes(filter);
      return currencyContainFilter;
    });
    return filteredCurrencies;
  }

  render() {
    const {
      isVisible, baseAmount, selectedCurrency, filterText,
    } = this.state;
    return (
      <div className="app">
        <Header
          baseAmount={baseAmount}
          onInputChange={this.changeBaseValue}
        />
        <Toggler opened={isVisible} toggle={this.toggleCurrencies} />
        {
          isVisible && (
          <Currencies
            filterInput={filterText}
            list={this.getFilteredCurrencies()}
            selectCurrency={this.getOtherCurrency}
            actualCurrency={selectedCurrency}
            research={this.searchByName}
          />
          )
        }
        <Amount
          currency={selectedCurrency}
          value={this.getValue()}
        />
      </div>
    );
  }
}

export default App;
