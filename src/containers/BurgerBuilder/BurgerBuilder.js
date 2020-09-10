import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Burger from '../../components/Burger/Burger';
import ControlsList from '../../components/Burger/Controls/ControlsList';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import LoadingSpinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/withErrorHandler/ErrorHandler';
import axios from '../../axios-orders';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/IndexActions';


class BurgerBuilder extends Component {
    state = {
        displayOrderBox: false,
    }

    componentDidMount () {
        this.props.onInitStateFromServer();
    }

    enableOrderButtonHandler (updatedIngredients) {
        const totalIngredients = Object.keys(updatedIngredients)
            .map(key => {
                return updatedIngredients[key]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            return totalIngredients > 0; // returns true or false
    }

    displayOrderBoxHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({displayOrderBox: true});
        } 
        else {
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/authentication')
        }
        
    }

    closeOrderBoxHandler = () => {
        this.setState({displayOrderBox: false});
    }

    orderContinuedHandler = () => {
        this.props.onOrderPosted()
        this.props.history.push('/checkout')
    }

    render () {
        const disableButtonInfo = {
            ...this.props.localIngredients
        };
        for (let key in disableButtonInfo) {
            disableButtonInfo[key] = disableButtonInfo[key] <=0;
        }
        //salad: true, meat: false...

        let BurgerAndControlsList = this.props.error ? 
                <p>Failed to connect to server</p> 
                : <LoadingSpinner />
                
        let orderSummary = null;
        
        if (this.props.localIngredients) {
            BurgerAndControlsList = (
                <Auxiliar>
                    <Burger 
                    ingredients={this.props.localIngredients}/>
                    <ControlsList 
                        isAuthenticated={this.props.isAuthenticated}
                        ingredientAdded={this.props.onAddIngredient}
                        ingredientRemoved={this.props.onRemoveIngredient}
                        disableButton={disableButtonInfo}
                        price={this.props.localTotalPrice}   
                        enableOrderButton={this.enableOrderButtonHandler(this.props.localIngredients)}
                        displayOrderBox={this.displayOrderBoxHandler}/>
                </Auxiliar>
            )
            orderSummary = <OrderSummary 
                ingredientsObject={this.props.localIngredients}
                orderCanceled={this.closeOrderBoxHandler}
                continueOrder={this.orderContinuedHandler}
                totalPrice={this.props.localTotalPrice}/>
        }

        return (
            <Auxiliar>
                <Modal display={this.state.displayOrderBox} closeModal={this.closeOrderBoxHandler}>
                    {orderSummary}
                </Modal>
                {BurgerAndControlsList}
            </Auxiliar>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        localIngredients: state.burgerBuilder.ingredients,
        localTotalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingName) => dispatch(actions.addIngredient(ingName)),
        onRemoveIngredient: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitStateFromServer: () => dispatch(actions.initStateFromServer()),
        onOrderPosted: () => dispatch(actions.orderInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axios));