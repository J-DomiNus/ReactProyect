import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
        { label: 'Salad', type: 'salad'},
        { label: 'Bacon', type: 'bacon'},
        { label: 'Cheese', type: 'cheese'},
        { label: 'Meat', type: 'meat'},
];
const controlsList = (props) => (
        <div className='controls-list'>
                <p className='heading-tertiary'>Current Price ${props.price.toFixed(2)}</p>
                {controls.map(ctrl => (
                        <BuildControl
                                key={ctrl.label} 
                                label={ctrl.label}
                                added={() => props.ingredientAdded(ctrl.type)} 
                                removed={() => props.ingredientRemoved(ctrl.type)}
                                disableButton={props.disableButton[ctrl.type]}/>
                ))}
                <button className='order-button'
                        onClick={props.displayOrderBox}
                        disabled={!props.enableOrderButton}>Order now</button>
        </div>
)

export default controlsList;
