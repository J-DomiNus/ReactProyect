import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar';

const styles = ['modal','hide'];

const modal = (props) => {
    if (props.display) {
        styles.pop();
        styles.push('show');
    }
    if(!props.display) {
        styles.pop();
        styles.push('hide');
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