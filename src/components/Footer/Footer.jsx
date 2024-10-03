import React from 'react'
import "./Footer.scss"
import FootLogo from "../../assets/headLogo.svg"
import Insta from "../../assets/Insta.svg"
import Git from "../../assets/Git.svg"
import X from "../../assets/X.svg"
import Link from "../../assets/Linkedin.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <hr width="100%" size="1" color="C4C4C4" className='holline' noshade></hr>
      <div className='footFlex'>
        <img src={FootLogo} alt="Footer Logo" />
        <div className='footDiv'>
          <p className='footTitle'>Quick Links</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Help Center</p>
          <p>Travel Packages</p>
        </div>
        <div className='footDiv'>
          <p className='footTitle'>Explore</p>
          <p>Carpooling</p>
          <p>Bike Sharing</p>
          <p>Carbon Footprints</p>
          <p>Others</p>
        </div>
        <div className='footDiv'>
          <p className='footTitle'>Policies</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>© Tripla. All Rights Reserved, 2024</p>
          <div className='footIcons'>
            <img src={Insta} alt="" />
            <img src={Git} alt="" />
            <img src={X} alt="" />
            <img src={Link} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer