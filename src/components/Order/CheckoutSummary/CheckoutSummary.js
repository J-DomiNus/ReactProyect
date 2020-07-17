import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className='checkoutSummary'>
            <h1 className='heading-primary'>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className='order-summary-wrapper'>
                <Button btnType='light'
                        clicked>Cancel</Button>
                <Button btnType='dark'
                        clicked>Continue</Button>
            </div>
        </div>
    )
}

export default checkoutSummary;