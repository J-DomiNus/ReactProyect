import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import BurgerBuilderReducer from './store/reducers/BurgerBuilderReducer'
import OrderReducer from './store/reducers/OrderReducer';
import AuthReducer from './store/reducers/AuthReducer';

import './assets/css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilder: BurgerBuilderReducer,
  order: OrderReducer,
  auth: AuthReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// thunk allows asynchronous
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
