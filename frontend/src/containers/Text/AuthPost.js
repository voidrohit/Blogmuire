import React,{ useState , useEffect}from 'react';
import axios from '../../axios';

import NotAuthPost from './notAuthPost';
import NavBar from '../../components/NavBar/NavBar';
import Aux from '../../hoc/Aux/Aux';
import LimitedPost from '../../components/LimitedPost/LimitedPost';

const AuthPost = () => {

    const [post,setPost] = useState([]);
    let id = window.location.pathname

    const styles={
        display: "flex",
        flexDirection: "row",
        width: "13em",
        margin: "auto",
        padding: "20px",
    }

    useEffect(()=>{
        const fetchPost = async ()=>{
        const res = await axios.get("/posts"+id)
        setPost(res.data);
        }
        fetchPost();
    });

    const handleUpdate = async () => {
        let content = document.getElementById("text").innerHTML
        console.log(id, content)
        try {
          await axios.put("/posts/update" + id, {
              text: content
          });
          window.location.replace("/sign");
        } catch (err) {}
      };

    const handleDelete = async () => {
        try {
          await axios.delete("/posts/delete"+id);
          window.location.replace("/sign");
        } catch (err) {

        }
      };

      let Text = (post.name === JSON.parse(localStorage.getItem('user')).name)

      const buttonStyle={
        flexDirection: "row",
        width: "80%",
        borderRadius: "20px",
        border: "1px solid black",
        backgroundColor: "black",
        color: "#FFFFFF",
        fontWeight: "bold",
        padding: "6px",
        margin: "5px",
        textTransform: "uppercase",
      }

      const postText ={
        display: "block",
        margin: "auto",
        cursor: "pointer",
        width: "60%",
      }


    return (
      <Aux>
        {(Text) ? 
        <>
          <NavBar />
          <hr />
          <div style={{ display: "flex", flexDirection: "column", textAlign: "center"}} >
            <h1>{post.title}</h1>
                <div contenteditable="true" id="text" className="text" style={postText} dangerouslySetInnerHTML={{__html: post.text}} ></div>
                <div style={styles}>
                    <button style={buttonStyle} onClick={handleUpdate}>Save Edit</button>
                    <button style={buttonStyle} onClick={handleDelete}>Delete</button>
                </div> 
          </div>
        <h2 style={{textAlign: "center"}}>Recent Posts</h2>
        <LimitedPost />
        </> : <NotAuthPost />}
      </Aux>
    )
}

export default AuthPost;
