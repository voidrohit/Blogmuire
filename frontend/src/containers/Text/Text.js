import React from 'react';

import AuthPost from './AuthPost';
import NotAuthPost from './notAuthPost';


const Text = () => {

    let Text;
    if(JSON.parse(localStorage.getItem('user')).name !== null) {
        Text = <AuthPost />
    } else {
        Text = <NotAuthPost />
    }

    return (
        {Text}
    )
}

export default Text;
