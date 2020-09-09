import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import OrdersList from './containers/OrdersList/OrdersList';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Authentication from './containers/Authentication/Authentication';
import Logout from './containers/Authentication/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/IndexActions';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render () {

    let routes = (
      <Switch>
        <Route path="/authentication" component={Authentication} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/authentication" component={Authentication} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={OrdersList} />
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

