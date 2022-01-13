import './style.scss';
import PropTypes from 'prop-types';

const Currencies = ({
  list, selectCurrency, actualCurrency, research, filterInput,
}) => (
  <div className="currencies">
    <div className="currencies-title"><input
      type="text"
      placeholder="Find Your Currency"
      value={filterInput}
      onChange={(evt) => {
        const searchInputValue = evt.target.value;
        research(searchInputValue);
      }}
    />
    </div>
    <ul className="currencies-list">
      {
    list.map((currencyObj) => (
      <li
        key={currencyObj.name}
        onClick={() => {
          selectCurrency(currencyObj.name);
        }}
        className={currencyObj.name === actualCurrency ? 'currency currency-selected' : 'currency'}
      >{currencyObj.name}
      </li>
    ))
    }

    </ul>
  </div>
);

Currencies.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectCurrency: PropTypes.func.isRequired,
  filterInput: PropTypes.string.isRequired,
  actualCurrency: PropTypes.string.isRequired,
  research: PropTypes.func.isRequired,
};

export default Currencies;
