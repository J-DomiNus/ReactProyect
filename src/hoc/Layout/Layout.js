import React, { Component } from 'react'
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
