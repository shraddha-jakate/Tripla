import React from 'react'
import "./Cart.scss"
import { useNavigate } from 'react-router-dom';
import CartImg from "../../assets/cart.svg"

const Cart = ({ setOpen }) => {

    const navigate = useNavigate();

    const goToPackagesPage = () => {
        setOpen(false);
        navigate('/Packages');
    };

    return (
        <div className='cart'>
            <img src={CartImg} alt="" />
            <p>Start adding trips, hotels, and experiences to keep your cart company. Let's get packing!</p>
            <button onClick={goToPackagesPage}>Explore Categories</button>
        </div>
    )
}

export default Cart


