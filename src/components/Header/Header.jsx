import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeadLogo from "../../assets/headLogo.svg";
import HeadSearch from "../../assets/headSearch.svg";
import HeadCart from "../../assets/headCart.svg";
import HeadMenu from "../../assets/headMenu.svg";
import { HashLink as SLink } from "react-router-hash-link"
import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';
import "./Header.scss"

const Header = () => {
    const [open, setOpen] = useState(null);
    const [menuOpen, setMenuOpen] = useState(null);

    const navigate = useNavigate();

    const goToPackagesPage = () => {
        navigate('/Packages');
    };

    return (
        <div className='header'>
            <img src={HeadLogo} alt="Head Logo" className='headLogo' />
            <ul className='headLinks'>
                <li><SLink smooth to="/#explore" className='slink'>Explore Cities</SLink></li>
                <li><SLink smooth to="/#trip" className='slink'>Trip Packages</SLink></li>
                <li><SLink smooth to="/#offers" className='slink'>Offers</SLink></li>
                <li><SLink smooth to="/#services" className='slink'>Services</SLink></li>
            </ul>
            <div className='headRight'>
                <div className='headSearch'>
                    <input></input>
                    <div className='headSearchLogo' onClick={goToPackagesPage} >
                        <img src={HeadSearch} alt="Search" />
                    </div>
                </div>
                <div className='headLogos'>
                    <img src={HeadCart} alt="Cart" onClick={() => setOpen(!open)} />
                    <img src={HeadMenu} alt="Menu" onClick={() => setMenuOpen(!menuOpen)}/>
                </div>
            </div>
            {open && <Cart setOpen={setOpen} />}
            {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
        </div>
    )
}

export default Header