import React,{ useState , useEffect}from 'react';
import axios from '../../axios';
import NavBar from '../../components/NavBar/NavBar';
import Aux from '../../hoc/Aux/Aux';
import LimitedPost from "../../components/LimitedPost/LimitedPost"

const NotAuthPost = () => {

    const [post,setPost] = useState([]);
    let id = window.location.pathname

    useEffect(()=>{
        const fetchPost = async ()=>{
        const res = await axios.get("/posts"+id)
        setPost(res.data);
        }
        fetchPost();
    });
    return (
        <Aux>
            <NavBar />
            <hr />
            <h1 style={{textAlign: "center"}}>{post.title}</h1>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <div id="text" className="text" style={{display: "block", margin: "auto", width: "70%"}} dangerouslySetInnerHTML={{__html: post.text}} />
            </div>
            <h2 style={{textAlign: "center"}}>Recent Posts</h2>
            <LimitedPost />
        </Aux>
    )
}

export default NotAuthPost;
