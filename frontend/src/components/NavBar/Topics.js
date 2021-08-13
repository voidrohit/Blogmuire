import React, { useState , useEffect} from 'react';
import { NavLink } from "react-router-dom";

import './Topics.css'

const Topic = () => {

    const [storage,setStorage] = useState([false]);

    useEffect(()=>{
        const getData = async ()=>{
            if(localStorage.user === "null") {
                setStorage(false)
            } else {
                setStorage(true)
            }
        }
        getData();
    });

    let destroy = () => {
        localStorage.clear();
        window.location.replace("/")
    }
    return (
        <div className="Topics">
            <ul>
                { storage
                    ?  <li id='list'>
                            <NavLink to='' onClick={destroy} style={{ textDecoration: 'none', color: 'black' }}>LogOut</NavLink>
                        </li> : null 
                         }
                <li id='list'>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</NavLink>
                </li>
                <li id="getstart">
                    <NavLink to='/sign' style={{ textDecoration: 'none', color: 'white' }}>StartNow</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Topic;