import React from 'react';

import './MainPage.css';
import Aux from '../../hoc/Aux/Aux'
import support from '../../assets/images/presentation.png'

const mainPage = () => {
    return (
        <Aux >
            <div className='mainPage'>
                <div className='main'>
                    <h2>Blogmiure is a place to share experience</h2>
                    <span>It's easy and free to share your experience with others.</span>
                    <h3><button>Start Writing</button></h3>
                </div>
                <div className='image'>
                    <img src={support} alt="images"/>
                </div>
            </div>
        </Aux>
    )
}

export default mainPage;