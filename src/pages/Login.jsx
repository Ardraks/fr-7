import {  useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import baseurl from "../Api";





const Login = () => {

  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error, setError] = useState('');
 


  const navigate=useNavigate()

  
  const savedata = ()=>{
    console.log("clicked")
     navigate('/register')
  }

     const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
       

      const response = await axios.post(baseurl+'/login/loginview', {
        email: email,
        password: password,
      });
        

        if (response.data.success) {
          alert('Login successful');
          // console.log(response.data);
          localStorage.setItem("user",response.data.username)
          navigate(`/homepage`);
        } 
        else {
          setError('Invalid email and Password. Please try again.');
          console.log(response.data);

        }
      } catch (err) {
        setError('Error occurred during login. Please try again.');
      }
    };
      




  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm" onSubmit={handleSubmit}>
      <label>Email</label>
      <input className="loginInput" type="text"  name="email"  placeholder="Enter your email..."
      value={email}
      onChange={(e) => setEmail(e.target.value)} />

       

      <label>Password</label>
      <input className="loginInput" type="password" name="password" placeholder="Enter your password..." 
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>



      <button className="loginButton" >Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
      <button className="loginRegisterButton" onClick={savedata}>Register</button>
      </div>
        
  )
  
}

export default Login

