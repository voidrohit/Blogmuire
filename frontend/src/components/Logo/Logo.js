import React from 'react';

import eesaLogo from "../../assets/images/Logo.png";
import './Logo.css'

const logo = () => (
    <div className='Logo'>
        <img src={eesaLogo} alt="eesaLogo" />
    </div>
)

export default logo;