import React from 'react';
import NavigationItem from './Navig_Item_Builder';

const navigationItemsList = () => (
    <ul className='navigationList'>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/checkout'>Checkout</NavigationItem>
    </ul>
)

export default navigationItemsList;