import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auxiliar from '../Auxiliar/Auxiliar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        displaySideDrew: false
    }

    displaySideDrewHandler = () => {
        this.setState({displaySideDrew: true});
    }

    closeSideDrewHandler = () => {
        this.setState({displaySideDrew: false});
    }

    render () {
        return(
            <Auxiliar>
                <SideDrawer 
                    isAuthenticated = {this.props.isAuthenticated}
                    display={this.state.displaySideDrew}
                    closeSideDrew={this.closeSideDrewHandler} />
                <Toolbar 
                    isAuthenticated = {this.props.isAuthenticated}
                    displaySideDrew={this.displaySideDrewHandler}/>
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
