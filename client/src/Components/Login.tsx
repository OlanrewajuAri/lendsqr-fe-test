import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.scss"
import Logo from "../Images/LendSQRLogo.svg"
import LoginImage from "../Images/LendSQRLoginImage.svg"

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    localStorage.setItem('email', email);
    localStorage.setItem('password', pass);

    navigate('/users');
  };
  useEffect(() => {

  }, [navigate]);

 
  return (
    <div>
      
      <div className="login-container">
        <div className="login-images">
        <img src={Logo} alt="LendSQL"/>
          <img src={LoginImage} alt="LendSQL" />
        </div>

        <div className="auth-form-container">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
          <form className="login-form" onSubmit={handleSubmit}>

            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" className='input-form' />

            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" className='input-form' />
            
            <h6 className='Login-Password'>Forgot PASSWORD?</h6>

            <button type="submit" className='button-form'>Log In</button>
          </form>

        </div>


      </div>
    </div>
  );
}

export default Login
