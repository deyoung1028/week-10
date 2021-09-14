import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import AddBookPage from './pages/AddBookPage';
import cart from './pages/cart';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/add-book' component = {AddBookPage}/>
            <Route path = './cart' component = {cart} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
