// import React from 'react';
// import { Link } from 'react-router-dom';
// import { auth } from '../../firebase/firebase.util';
// import { connect } from 'react-redux';

// import {  ReactComponent as Logo } from '../../assets/icon.svg';
// import './header.style.scss';

// const Header = ({ currentUser }) => (
//     <div className='header'>
//         <Link className='logo-container' to="/">
//              <Logo className='logo' />
//         </Link>
//         <div className='options'>
//             <Link className='option' to='/shop'>
//                 SHOP
//             </Link>
//             <Link className='option' to='/contact'>
//                 CONTACT
//             </Link>
            
//             {
//                 currentUser ?
//                 <div className='option' to='/sign-out' onClick={() => auth.signOut()}>
//                     SIGN OUT
//                 </div>
//                 :
//                 <Link className='option' to= '/sign-in'>
//                     LOG IN
//                 </Link>
//             }
//         </div>
//     </div>
// );
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// }); 
// export default connect(mapStateToProps)(Header);


import React from 'react';
import { connect } from 'react-redux';
import CartIcon  from '../cart icon/cart-icon.component';
import Cart from '../cart/cart.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { auth } from '../../firebase/firebase.util';

import {  ReactComponent as Logo } from '../../assets/icon.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.style'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <Cart />
      
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser ,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);