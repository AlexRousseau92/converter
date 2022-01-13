import './style.scss';
import PropTypes from 'prop-types';

const Toggler = ({ opened, toggle }) => {
  const cssClassNames = opened ? 'toggler toggler--open' : 'toggler';
  return (
    <button className={cssClassNames} type="button" onClick={toggle}>
      =
    </button>
  );
};

Toggler.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggler;
