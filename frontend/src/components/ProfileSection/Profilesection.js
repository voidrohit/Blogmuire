import React, { useState , useEffect} from 'react'
import axios from '../../axios'

import './ProfileSection.css'
import Posts from '../Posts/Posts'

const Profile = () => {
    const [posts,setPosts] = useState([]);

    let name = null;
    try {
        name = JSON.parse(localStorage.getItem('user')).name;
    }
    catch{
    }

    useEffect(()=>{
        const fetchPosts = async ()=>{
        const res = await axios.get("/posts/name/"+ name)
            setPosts(res.data);
        }
        fetchPosts();
    });
    
    return (
        <div className='profile'>
            <img style={{borderRadius: "50%"}} src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" alt='person'/>
            <h2>{name}</h2>
            <Posts posts = {posts}/>
        </div>
    )
}

export default Profile