import './style.scss';
import PropTypes from 'prop-types';

const Header = ({ baseAmount, onInputChange }) => (
  <div className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">
      <input
        type="number"
        className="header-input"
        value={baseAmount}
        min="0"
        onChange={(evt) => {
          const number = parseFloat(evt.target.value, 10);
          onInputChange(number);
        }}
      />
      euro
    </p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Header;
