import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';
import Button from '../../UI/Button/Button';

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
                <h3 className='heading-secondary'>Your order</h3>
                <p className='u-center-align'>A delicious burger with the following ingredients</p>
                <ul className='ul-ingredients'>
                    {ingredientsArray}
                </ul>
                <p className='price'>Price ${props.totalPrice.toFixed(2)}</p>
                <p className='u-center-align'><strong>Continue to Checkout?</strong></p>
                <div className='order-summary-wrapper'>
                <Button btnType='light'
                        clicked={props.orderCanceled}>No</Button>
                <Button btnType='dark'
                        clicked={props.continueOrder}>Yes</Button>
                </div>
            </Auxiliar>
        )   
}

export default orderSummary;