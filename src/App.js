import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import { BrowserRouter, Switch, Route} from 'react-router-dom';    


class App extends Component {
  render() {
    return <div className='App'>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component= {HomePage} />
        <Route exact path='/shop' component= {ShopPage} />
      </Switch>
    </BrowserRouter>
    </div>;
  }
}

export default App;
