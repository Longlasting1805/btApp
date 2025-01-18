import React from 'react'
import './LoginSignup.css'
import bt from '../Assets/bt.jpeg'

const LoginSignup = () => {
   

  return (
    <div className='container'>
        <div className='header'>
            <img className='logo' src={bt} alt=''/>
            <div className='text'>Log in</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
        <span className='username'>Email or Username</span>
        <div className='input'>
            <input type='email' />
        </div>
        <span className='password'>Password</span> 
        <div className='input'>
            <input type='password' />
        </div>
        </div>
        
        <div className="submit-container">   
        <div className="submit">Sign In</div>
        </div>
        <span className="forgot-password"> Forgot log-in details?</span>
        <div className="cancel"> cancel</div>
       
       
    </div>
  )
}

export default LoginSignup