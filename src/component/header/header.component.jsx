import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

import {  ReactComponent as Logo } from '../../assets/icon.svg';
import './header.style.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
             <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            
            {
                currentUser ?
                <div className='option' to='/sign-out' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to= '/sign-in'>
                    LOG IN
                </Link>
            }
        </div>
    </div>
);

export default Header;