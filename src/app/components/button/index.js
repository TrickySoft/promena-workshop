import React from 'react';
import './index.scss';
import Loader from '../loader/index';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, className, buttonClick, isBtnLoading, isBtnDisabled } = props;

  const handleButtonClick = () => {
    setTimeout(() => {
      buttonClick();
    }, 1000);
  }
  return (
    <button
      disabled={isBtnDisabled}
      onClick={() => { handleButtonClick() }}
      className={`button ${isBtnDisabled && 'button__disabled'} ${className}`}
    >
      {isBtnLoading ? <Loader isSmallLoader={true} /> : children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  buttonClick: PropTypes.func,
  isBtnLoading: PropTypes.bool,
  isBtnDisabled: PropTypes.bool
};

Button.defaultProps = {
  className: '',
  children: '',
  buttonClick: () => null
};

export default React.memo(Button);
