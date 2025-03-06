import React from 'react'
import './LoginSignup.css'
import btt from '../Assets/btt.jpeg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';



const LoginSignup = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
      {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      }
    )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  


  return (
    <div className='container'>
     <form ref={form} onSubmit={sendEmail} className='--form-control'> 
     <div className='header'>
     <img className='logo' src={btt} alt=''/>
     <div className='text'>Log in</div>
     <div className='underline'></div>
      </div>
      <div className='inputs'>
      <span className='username' >Email or Username</span>
      <div className='input'>
          <input type='email' name='user_email' />
      </div>
      <span className='password'>Password</span> 
      <div className='input'>
          <input type='password' name='user_password'/>
      </div>
      </div>
      
      <div className="submit-container">   
      <button className="submit">Sign In</button>
      </div>
      <span className="forgot-password"> Forgot log-in details?</span>
      <div className="cancel"> cancel</div>
      </form>
        
    </div>
  )
}

export default LoginSignup