import React from 'react';

const style = ['navigation-item__a']

const navigationItem = (props) => {
    const active = []
    props.active ? active.push('active') : active.push('')
    
    return (
    <li className='navigation-item'>
        <a href={props.link} 
            className={[style, active].join(' ')}>
            {props.children}
        </a>
    </li>
)
}
export default navigationItem