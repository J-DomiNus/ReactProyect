import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auxiliar from '../Auxiliar/Auxiliar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        displaySideDraw: false
    }

    displaySideDrawHandler = () => {
        this.setState({displaySideDraw: true});
    }

    closeSideDrawHandler = () => {
        this.setState({displaySideDraw: false});
    }

    render () {
        return(
            <Auxiliar>
                <SideDrawer 
                    isAuthenticated = {this.props.isAuthenticated}
                    display={this.state.displaySideDraw}
                    closeSideDraw={this.closeSideDrawHandler} />
                <Toolbar 
                    isAuthenticated = {this.props.isAuthenticated}
                    displaySideDraw={this.displaySideDrawHandler}/>
                <SideDrawer />
                <main className='content'>
                    {this.props.children}
                </main>
            </Auxiliar>
            
        ); 
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);
