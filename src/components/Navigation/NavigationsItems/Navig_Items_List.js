import React from 'react';
import NavigationItem from './Navig_Item_Builder';

const navigationItemsList = () => (
    <ul className='navigationList'>
        <NavigationItem link='/' exact >Burger Builder</NavigationItem>
        <NavigationItem link='/orderslist'>Orders</NavigationItem>
    </ul>
)

export default navigationItemsList;