import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'; 
import './App.css';

import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import signInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import {setCurrentUser} from './redux/user/user.actions';


class App extends Component {
  
  UnsubscribeFromAuth = null;

  
  componentDidMount() {
    const { setCurrentUser } =  this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }

      setCurrentUser(userAuth);
    });
  } 
  componentWillUnmount() {
    this.UnsubscribeFromAuth();
  }

  render() {
    return <div className='App'>
    
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path='/' component= {HomePage} />
        <Route exact path='/shop' component= {ShopPage} />
        <Route exact path='/sign-in' component= {signInAndSignUp} />
      </Switch>
    </BrowserRouter>
    </div>;
  }
}
const mapDispatch = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatch)(App);
