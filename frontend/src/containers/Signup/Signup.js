import React, {useState, useContext, useRef} from 'react';
import axios from '../../axios';
import { useAlert } from 'react-alert'
import { Context } from "../../context/Context";

import'./Signup.css'


const Signup = () => {
    const alert = useAlert()
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    let [clss, setClss] = useState("container");
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)

    const swapRight = (i) => {
        setClss("container right-panel-active")
    }

    const swapLeft = (j) => {
        setClss("container")
    }

    const handleSubmit = async (e)=>{
        // console.log(e);
        e.preventDefault();
        setError(false)
        try{
            await alert.show("Check your mail and verify your account.")
          const res =  await axios.post("/auth/register",{
            name,
            email,
            password
          })
          res.data && window.location.replace("/sign")
        }catch (err){
            await alert.show("Something went wrong")
          setError(true);
        }
   
      }

      const handleLoginSubmit = async (e) => {
          
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            
          const res = await axios.post("/auth/login", {
            name: userRef.current.value,
            password: passwordRef.current.value,
          });
          
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          
        } catch (err) {
            
          dispatch({ type: "LOGIN_FAILURE" });
        }
        
      };
        return (
        <div className="body">
            <div className={clss} id="container">
                <div className="form-container sign-up-container">
                    <form className="forms" onSubmit = {handleSubmit}>
                        <h1 className="h1s">Create Account</h1>
                        <input className="inputs" type="text" placeholder="Name" 
                            onChange = {e=>setName(e.target.value)} required />
                        <input className="inputs" type="email" placeholder="Email" 
                            onChange = {e=>setEmail(e.target.value)} required />
                        <input className="inputs" type="password" placeholder="Password"
                            onChange = {e=>setPassword(e.target.value)} required />
                        <button className="buttons">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className="forms" onSubmit={handleLoginSubmit}>
                        <h1 className="h1s">Sign in</h1>
                        <input className="inputs" type="email" placeholder="Email"
                            ref={userRef} required/>
                        <input className="inputs" type="password" placeholder="Password"
                            ref={passwordRef} required/>
                        <button className="buttons" type="submit" disabled={isFetching}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="h1s">Welcome Back!</h1>
                            <p className="ps">To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={swapLeft}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="h1s">Hello, Friend!</h1>
                            <p className="ps">Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={swapRight}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            
    )
}

export default Signup;