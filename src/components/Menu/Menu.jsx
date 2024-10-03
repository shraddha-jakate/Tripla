import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./menu.scss"
import Mul from "../../assets/Multiply.svg"

const Menu = ({setMenuOpen}) => {

    const menuSet = () => {
        setMenuOpen(false);
    };

    const navigate = useNavigate();
    
    const goToSignIn = () => {
        setMenuOpen(false);
        navigate('/SignIn');
    };

    const goToSignUp = () => {
        setMenuOpen(false);
        navigate('/SignUp');
    };


    return (
        <div className='menu'>
            <div className='top'>
                <img src={Mul} alt="mul" className='mul' onClick={menuSet}/>
            </div>
            <div className='bottom'>
                <button className='signIn' onClick={goToSignIn}>Sign In</button>
                <button className='signUp' onClick={goToSignUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default Menu