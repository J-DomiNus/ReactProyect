import React from 'react';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        )
    }

    const ingredientOutput = ingredients.map(ig => {
    return <span 
            className={'typographyOrderSpan'}
            key={ig.name}>{ig.name}: [{ig.amount}]&nbsp; </span>
    })

    return (
    <div className='order'>
        <p><strong>Ingredients:</strong> {ingredientOutput}</p>
        <p><strong>Price:</strong> <strong style={{color: 'orangered'}}>USD {(props.price).toFixed(2)}</strong></p>
    </div>
);
}

export default order;