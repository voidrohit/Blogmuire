import { NavLink } from "react-router-dom";
import './posts.css'

export default function Posts({ posts }) {

  const textStyle ={
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "90%",
    fontSize: "20px",
    padding: "none",
  }
  
  return (
    <div className="posts">
      {posts.map((p) => (
        <NavLink to={'/'+p._id} style={{textDecoration: 'none', border: "0.01px solid grey", borderRadius: "9px" ,color: "black", textAlign: 'center',fontSize: "25px", width: "80%",overflow: "hidden", display: "inline-block"}}>
          <h3 style={{padding: "none", margin: "none"}}>{p.title}</h3>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", }}>
          <span style={textStyle} dangerouslySetInnerHTML={{__html: p.text }}></span>
          <span style={{lineHeight: "2"}}>...</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
