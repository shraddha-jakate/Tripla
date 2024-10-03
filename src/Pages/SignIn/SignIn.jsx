import React from 'react'
import "./SignIn.scss"
import Couple from "../../assets/couple.svg"

const SignIn = () => {
  return (
    <div className='signIn'>
        <div className='left'>
            <img src={Couple} alt="couple" />
        </div>
        <div className='right'>
            <div className="one">
                <p className='title'>Sign In</p>
                <p>Email</p>
                <input placeholder='Enter your email'/>
                <p>Password</p>
                <input placeholder='Enter your password'/>
            </div>
            <div className='two'>
                <p>Forgot Password?</p>
            </div>
            <div className="three">
                <button>Sign In</button>
                <div className="thbottom">
                    <p>Don't have an account?</p>
                    <p className='thbold'>Create one</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn