import React from 'react';
import NavigationItem from './Navig_Item_Builder';

const navigationItemsList = (props) => (
    <ul className='navigationList'>
        <NavigationItem link='/' exact >Burger Builder</NavigationItem>
        { props.isAuthenticated ? <NavigationItem link='/orders'>Orders</NavigationItem> : null }
        { !props.isAuthenticated
            ? <NavigationItem link='/authentication'>Authenticate</NavigationItem>
            : <NavigationItem link='/logout'>Logout</NavigationItem>}
    </ul>
)

export default navigationItemsList;
