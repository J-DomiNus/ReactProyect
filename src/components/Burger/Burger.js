import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className='burger'>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='bacon'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;