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
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.util';

import {  ReactComponent as Logo } from '../../assets/icon.svg';

import './header.style.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);