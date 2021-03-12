import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import { BrowserRouter, Switch, Route} from 'react-router-dom';    


const HatsPage = () => (
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
);
class App extends Component {
  render() {
    return <div className='App'>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component= {HomePage} />
        <Route path='/shop/hats' component= {HatsPage} />
      </Switch>
    </BrowserRouter>
    </div>;
  }
}

export default App;
