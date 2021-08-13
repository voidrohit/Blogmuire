import React, { useState , useEffect} from 'react';
import axios from '../../axios';

import NavBar from '../../components/NavBar/NavBar'
import MainPage from '../../components/Landing/MainPage'
import Posts from '../../components/Posts/Posts';

const Main = () => {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
        const res = await axios.get("/posts")
            setPosts(res.data);
        }
        fetchPosts();
    });
    return (
        <div>
            <div style={{'background':"#F5C9BC"}}>
                <NavBar />
                <hr />
                <MainPage />
                <hr />
            </div>
            <Posts posts={posts}/>
        </div>
    )
}

export default Main;