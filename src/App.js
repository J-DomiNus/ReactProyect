import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import OrdersList from './containers/OrdersList/OrdersList';
import { Route, Switch, withRouter } from 'react-router-dom';
import Authentication from './containers/Authentication/Authentication';
import Logout from './containers/Authentication/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/IndexActions';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render () {
    return (
        <div>
          <Layout>
            <Switch>
              <Route path='/checkout' component={Checkout} />
              <Route path='/orderslist' component={OrdersList} />
              <Route path='/authentication' component={Authentication} />
              <Route path='/logout' component={Logout} />
              <Route path='/' component={BurgerBuilder} />
            </Switch>
          </Layout>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(App);
