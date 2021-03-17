import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'; 
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import signInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
   


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  UnsubscribeFromAuth = null;

  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }

      this.setState({ currentUser: userAuth });
    });
  } 
  componentWillUnmount() {
    this.UnsubscribeFromAuth();
  }

  render() {
    return <div className='App'>
    
    <BrowserRouter>
    <Header currentUser= {this.state.currentUser} />
      <Switch>
        <Route exact path='/' component= {HomePage} />
        <Route exact path='/shop' component= {ShopPage} />
        <Route exact path='/sign-in' component= {signInAndSignUp} />
      </Switch>
    </BrowserRouter>
    </div>;
  }
}

export default App;
