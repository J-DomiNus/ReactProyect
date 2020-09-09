import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationsItems/Navig_Items_List';
import MenuButton from '../SideDrawer/MenuButton';

const toolbar = (props) => (
    <header className='toolbar'>
        <MenuButton displaySideDrew={props.displaySideDrew}/>
        <nav className='nav__desktop-only__wrapper'>
            <NavigationList 
                isAuthenticated = {props.isAuthenticated}/>
        </nav>
        <div className='toolbar__logo__wrapper'>
            <Logo />
        </div>
    </header>
);

export default toolbar