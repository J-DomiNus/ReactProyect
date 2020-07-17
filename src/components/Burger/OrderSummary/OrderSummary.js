import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar';
const orderSummary = (props) => {
    const ingredientsArray = Object.keys(props.ingredientsObject)
        .map(igKey => {
            return <li key={igKey} className='li-ingredient'>
                        <span style={{textTransform: 'capitalize'}}>
                            {igKey}
                        </span>:&nbsp;
                        {props.ingredientsObject[igKey]}
                    </li>
        })
    return (
        <Auxiliar>
            <h3 className='heading-tertiary'>Your order</h3>
            <p className='u-center-align'>A delicious burger with the following ingredients</p>
            <ul className='ul-ingredients'>
                {ingredientsArray}
            </ul>
            <p className='u-center-align'><strong>Continue to Checkout?</strong></p>
        </Auxiliar>
    )
}

export default orderSummary;