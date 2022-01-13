import './style.scss';
import PropTypes from 'prop-types';

const Amount = ({currency, value}) => (
  <div className="amount">
    <p className="amount-value">{value}</p>
    <p className="amount-currency">{currency}</p>
  </div>
);

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Amount;
