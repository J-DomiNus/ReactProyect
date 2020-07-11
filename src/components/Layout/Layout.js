import React, { Component } from 'react'
import Auxiliar from '../../hoc/Auxiliar';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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
                <SideDrawer display={this.state.displaySideDrew}
                                    closeSideDrew={this.closeSideDrewHandler} />
                <Toolbar displaySideDrew={this.displaySideDrewHandler}/>
                <SideDrawer />
                <main className='content'>
                    {this.props.children}
                </main>
            </Auxiliar>
            
        ); 
    }
} 

export default Layout;
