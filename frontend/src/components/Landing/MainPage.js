import React from 'react';
import { NavLink } from "react-router-dom";

import './MainPage.css';
import Aux from '../../hoc/Aux/Aux'
import support from '../../assets/images/presentation.png'

const MainPage = () => {
    return (
        <Aux >
            <div className='mainPage'>
                <div className='main'>
                    <h2>Blogmiure is a place to share experience</h2>
                    <span>It's easy and free to share your experience with others.</span>
                    <NavLink to="/sign" style={{display: "table", color: "black", marginTop:"30px", textDecoration: 'none', border: '1px solid black', borderRadius: '20px', padding: '10px', fontSize: 'large', backgroundColor: "white"}} >Start Writing</NavLink>
                </div>
                <div className='image'>
                    <img src={support} alt="images"/>
                </div>
            </div>
        </Aux>
    )
}

export default MainPage;