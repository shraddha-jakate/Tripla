import React from 'react'
import HeadLogo from "../../assets/headLogo.svg";
import HeadSearch from "../../assets/headSearch.svg";
import HeadCart from "../../assets/headCart.svg";
import HeadMenu from "../../assets/headMenu.svg";
import "./Header.scss"

const Header = () => {
    return (
        <div className='header'>
            <img src={HeadLogo} alt="Head Logo" className='headLogo' />
            <ul className='headLinks'>
                <li>Explore Cities</li>
                <li>Trip Packages</li>
                <li>Offers</li>
                <li>Services</li>
            </ul>
        <div className='headRight'>
            <div className='headSearch'>
                <input></input>
                <div className='headSearchLogo'>
                    <img src={HeadSearch} alt='Search' />
                </div>
            </div>
            <div className='headLogos'>
                <img src={HeadCart} alt="Cart" />
                <img src={HeadMenu} alt="Menu" />
            </div>
        </div>    
        </div>
    )
}

export default Header
