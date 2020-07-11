import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationList from '../../Navigation/NavigationsItems/Navig_Items_List';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

const styles = ['side-drawer','hide-translateX'];

const sideDrawer = (props) => {
    if (props.display) {
        styles.pop();
        styles.push('show-translateX');
    }
    if(!props.display) {
        styles.pop();
        styles.push('hide-translateX');
    }
    return (
        <Auxiliar>
            <Backdrop show={props.display} clicked={props.closeSideDrew}/>
            <div className={styles.join(' ')}>
                <div className='side-drawer__logo__wrapper'>
                    <Logo />
                </div>
                <nav>
                    <NavigationList />
                </nav>
            </div>
        </Auxiliar>
        
    );
}

export default sideDrawer;