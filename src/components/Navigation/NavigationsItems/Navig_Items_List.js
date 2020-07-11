import React from 'react';
import NavigationItem from './Navig_Item_Builder';

const navigationItemsList = () => (
    <ul className='navigationList'>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
)

export default navigationItemsList;