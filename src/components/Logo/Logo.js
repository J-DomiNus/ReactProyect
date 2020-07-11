import React from 'react';
import Logo from '../../assets/img/burger-logo.png';

const logo = (props) => (
    <div className='logo'>
        <img src={Logo} alt='MyBurger' className='logo-img' />
    </div>
);

export default logo;