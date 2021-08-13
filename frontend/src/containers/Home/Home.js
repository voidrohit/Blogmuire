import React, { Component } from 'react';

import NavBar from '../../components/NavBar/NavBar'
import Profile from '../../components/ProfileSection/Profilesection'
import Editor from '../../components/Editor/Editor'

class Home extends Component {

    render () {
        return (
            <div>
                <NavBar />
                <hr />
                <Profile />
                <Editor />
            </div>
        )
    }
}

export default Home;
