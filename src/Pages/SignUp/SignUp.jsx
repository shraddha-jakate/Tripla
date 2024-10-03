import React from 'react'
import "./SignUp.scss"
import Couple from "../../assets/couple.svg"

const SignUp = () => {
  return (
    <div className='SignUp'>
        <div className='left'>
            <img src={Couple} alt="couple" />
        </div>
        <div className='right'>
            <div className="one">
                <p className='title'>Sign Up</p>
                <p>Email</p>
                <input placeholder='Enter your email'/>
                <p>Password</p>
                <input placeholder='Enter your password'/>
            </div>
            <div className="three">
                <button>Create Account</button>
                <div className="thbottom">
                    <p>Already have an account?</p>
                    <p className='thbold'>Sign In</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp