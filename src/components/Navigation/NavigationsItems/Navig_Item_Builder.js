import React from 'react';
import { NavLink } from 'react-router-dom';

const style = ['navigation-item__a']

const navigationItem = (props) => {
    const active = []
    props.active ? active.push('active') : active.push('')
    
    return (
    <li className='navigation-item'>
        <NavLink to={props.link} 
            className={[style, active].join(' ')}>
            {props.children}
        </NavLink>
    </li>
)
}
export default navigationItem