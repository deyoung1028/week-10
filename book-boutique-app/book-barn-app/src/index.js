import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import AddBookPage from './pages/AddBookPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/add-book' component = {AddBookPage}/>
          

        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
