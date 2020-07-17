import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // console.log('burger')
    // console.log(props)
    // Burger is not routed directly, so it doesn't recive the props location, history, match...
    let ingredientsArray = Object.keys(props.ingredients)
        .map( igKey => {
            //console.log(igKey);
            return [...Array ( props.ingredients[igKey])].map((_, index)=> {
                return <BurgerIngredient key={igKey + index} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        //console.log(ingredientsArray);
        if(ingredientsArray.length === 0 ) {
            ingredientsArray = <p className='burger__text'>Add your ingredients!</p>
        }

    return (
        <div className='burger'>
            <BurgerIngredient type='bread-top'/>
            {ingredientsArray}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;
