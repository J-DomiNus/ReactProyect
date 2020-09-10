import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Logout from './containers/Authentication/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/IndexActions';
import asyncComponent from './hoc/AsyncComponent/AsyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout')
})

const asyncAuth = asyncComponent(() => {
  return import('./containers/Authentication/Authentication')
})

const asyncOrders = asyncComponent(() => {
  return import('./containers/OrdersList/OrdersList')
})

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render () {

    let routes = (
      <Switch>
        <Route path="/authentication" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/authentication" component={asyncAuth} />
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

