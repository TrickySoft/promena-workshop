import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Menu = (props) => {
const {onCancel} = props;
    const handleClick = e => {
        if (e?.target.id === 'menu') {
            onCancel();
        }
        return;
      }

    return (
        <div className='context-menu' id='menu' onClick={handleClick} >
            <div className='context-menu__item'>View User</div>
            <div className='context-menu__divider'></div>
            <div className='context-menu__item'>Edit User</div>
            <div className='context-menu__divider'></div>
            <div className='context-menu__item'>Block User</div>
            <div className='context-menu__arrow-left'></div>
        </div>
    )
}

Menu.propTypes = {
    onCancel:PropTypes.func
    };
    
    Menu.defaultProps = {
    onCancel: () => {}
    };

export default Menu
