import React from 'react';

import './NavBar.css';
import Logo from '../Logo/Logo'
import Topics from './Topics'

const navBar = (props) => {
    return (
        <div className='navBar'>
            <Logo />
            <Topics />
        </div>
    )
}

export default navBar;