import React from 'react'
import "./Home.scss"
import HomeImg1 from "../../assets/home1.svg"
import HomeImg2 from "../../assets/home2.svg"
import Offer1 from "../../assets/offer1.svg"
import Offer2 from "../../assets/offer2.svg"
import RightArrow from "../../assets/rightArrow.svg"
import Holi1 from "../../assets/holiday1.svg"
import Holi2 from "../../assets/holiday2.svg"
import Holi3 from "../../assets/holiday3.svg"

const Home = () => {
  return (
    <div className='home'>
      <div className="images">
        <img src={HomeImg1} alt="Img" className='homeImg1' />
        <img src={HomeImg2} alt="Img" className='homeImg2' />
        <div className="text">
          <p>Travellers</p>
          <p>Creators</p>
        </div>
      </div>
      <div className='offers'>
        <p className='offText'>Limited time offers, deals and discounts</p>
        <div className='offCards'>
          <div className="offCard">
            <img src={Offer1} alt="img" />
            <p className='offTitle'>From Yosemite to Acadia, National Park Pass</p>
            <p className='desc'>Discover California’s National Park Week, spanning Yosemite’s majestic cliffs to Acadia’s stunning...</p>
            <button className='offbtn'><img src={RightArrow} alt="img" /></button>
          </div>
          <div className="offCard2">
            <img src={Offer2} alt="img" />
            <p className='offTitle2'>The Best of Turkey in 6 different packages</p>
            <p className='desc2'>Experience Dubai’s highlights with six unique packages, featuring iconic landmarks, thrilling...</p>
            <button className='offbtn2'><img src={RightArrow} alt="img" /></button>
          </div>
        </div>
      </div>
      <div className='holidayPackages'>
        <p className='holText'>Curated holiday packages</p>
        <div className='holidays'>
          <div className="holiday">
            <img src={Holi1} alt="" />
            <span className='dur'>2N/1D</span>
            <p className='holPlace'>Abu Dhabi</p>
            <p className='holTitle'>Heritage to Luxury : Uncover the epic</p>
            <div className='holpoint'>
              <p>3 Attractions</p>
            </div>
            <hr width="100%" size="1" color="C4C4C4" noshade></hr>
            <hr width="100%" color="#C4C4C4" size="1"></hr>
          </div>
          <div className="holiday">
            <img src={Holi2} alt="" />
            <span className='dur'>1N/1D</span>
            <p className='holPlace'>Paro Takshang</p>
            <p className='holTitle'>Heritage to Luxury : Uncover the epic</p>
            <div className='holpoint'>
              <p>3 Attractions</p>
              <p>1 Activity</p>
            </div>
          </div>
          <div className="holiday">
            <img src={Holi3} alt="" />
            <span className='dur'>2N/1D</span>
            <p className='holPlace'>Abu Dhabi</p>
            <p className='holTitle'>Heritage to Luxury : Uncover the epic</p>
            <div className='holpoint'>
              <p>3 Attractions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home