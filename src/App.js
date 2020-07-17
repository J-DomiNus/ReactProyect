import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import OrdersList from './containers/OrdersList/OrdersList';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orderslist' component={OrdersList} />
            <Route path='/' component={BurgerBuilder} />
          </Switch>
          
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
