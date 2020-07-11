import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar';

const styles = ['modal','hide-translateY'];

const modal = (props) => {
    if (props.display) {
        styles.pop();
        styles.push('show-translateY');
    }
    if(!props.display) {
        styles.pop();
        styles.push('hide-translateY');
    }
    
    return (
        <Auxiliar>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
            <Backdrop show={props.display} clicked={props.closeModal}/>
        </Auxiliar>
            
);
}
export default modal;
