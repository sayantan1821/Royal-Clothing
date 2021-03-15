import React from 'react';
import { Link } from 'react-router-dom';

import {  ReactComponent as Logo } from '../../assets/icon.svg';
import './header.style.scss';

const Header = () => (
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
            <Link className='option' to='/sign-in'>
                LOG IN
            </Link>
        </div>
    </div>
);

export default Header;