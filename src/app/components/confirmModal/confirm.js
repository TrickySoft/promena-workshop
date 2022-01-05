/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types';
import './confirm.scss';
import Button from '../button';

const Confirm = ({ onCancel, onConfirm, logoutText, buttonText, className, isCancelRequired }) => {

  const handleClick = e => {
    if (e?.target.id === 'dialog-target') {
      onCancel();
    }
    return;
  }

  return (
    <div className={`confirm ${className}`} id='dialog-target' onClick={handleClick}>
      <div className='confirm__dialog'>
        <div className='confirm__dialog__center-div'>
          <div className='confirm__dialog__content'>
            <p className='confirm__dialog__description'>{logoutText}</p>
          </div>
          {
            isCancelRequired ?
              <div className='confirm__dialog__footer u_display_flex u_align_items '>
                <Button className='confirm__dialog__button confirm__dialog__button--cancel' buttonClick={onCancel}>CANCEL</Button>
                <Button className='confirm__dialog__button' buttonClick={onConfirm}>{buttonText}</Button>
              </div> :
              <div className='confirm__dialog__footer u_display_flex u_align_items '>
                <Button className='confirm__dialog__button' buttonClick={onConfirm}>{buttonText}</Button>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

Confirm.prototypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  logoutText: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  isCancelRequired: PropTypes.bool
}

Confirm.defaultProps = {
  onConfirm: () => { },
  onCancel: () => { },
  logoutText: '',
  buttonText: '',
  className: '',
  isCancelRequired: true
}

export default Confirm