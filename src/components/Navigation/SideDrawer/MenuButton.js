import React from 'react';

const menuButton = (props) => (
    <div className='navigation-item__menu' 
        onClick={props.displaySideDraw}>
        <div className='menu-icon'></div>
        <div className='menu-icon'></div>
        <div className='menu-icon'></div>
    </div>
)

export default menuButton;