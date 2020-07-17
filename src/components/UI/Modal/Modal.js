import React, {Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

const styles = ['modal','hide-translateY'];

class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
            return nextProps.display !== this.props.display || nextProps.children !== this.props.children;
    }

    componentDidUpdate () {
        console.log('[Modal] componentDidUpdate');
    }
    
        render ( ) {
            if (this.props.display) {
                styles.pop();
                styles.push('show-translateY');
            }
            if(!this.props.display) {
                styles.pop();
                styles.push('hide-translateY');
            }
            
        return (
            <Auxiliar>
                <div className={styles.join(' ')}>
                    {this.props.children}
                </div>
                <Backdrop show={this.props.display} clicked={this.props.closeModal}/>
            </Auxiliar>
                    
        );
    }
}
export default Modal;
