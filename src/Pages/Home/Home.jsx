import React from 'react'
import "./Home.scss"
import { useNavigate } from 'react-router-dom';
import HomeImg1 from "../../assets/home1.svg"
import HomeImg2 from "../../assets/home2.svg"
import Offer1 from "../../assets/offer1.svg"
import Offer2 from "../../assets/offer2.svg"
import RightArrow from "../../assets/rightArrow.svg"
import Holi1 from "../../assets/holiday1.svg"
import Holi2 from "../../assets/holiday2.svg"
import Holi3 from "../../assets/holiday3.svg"
import Tripla from "../../assets/tripla.svg"
import CarPoolSer from "../../assets/carpoolSer.svg"
import BikeSer from "../../assets/BikeSer.svg"
import CarbonSer from "../../assets/carbonSer.svg"
import Explore from "../../assets/explore.svg"

const Home = () => {
  const navigate = useNavigate();

  const goToPackagesPage = () => {
    navigate('/Packages');
  };

  const goToCarpoolPage = () => {
    navigate('/Carpooling');
  };

  const goToBikeSharePage = () => {
    navigate('/Bike-Sharing');
  };

  const goToCarbonPage = () => {
    navigate('/Carbon-Footprint-Calculator');
  };

  
  return (
    <div className='home' >
      <div className="images">
        <img src={HomeImg1} alt="Img" className='homeImg1' />
        <img src={HomeImg2} alt="Img" className='homeImg2' />
        <div className="text">
          <p>Travellers</p>
          <p>Creators</p>
        </div>
      </div>
      <div className='offers' id='offers'>
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
      <div className='holidayPackages' id='trip'>
        <p className='holText'>Curated holiday packages</p>
        <div className='holidays'>
          <div className="holiday">
            <div className="holImg">
              <img src={Holi1} alt="" />
              <span className='holDur'>2N/1D</span>
            </div>
            <div className="holMar">
              <p className='holPlace'>Abu Dhabi</p>
              <p className='holTitle'>Heritage to Luxury : Uncover the epic</p>
            </div>
            <div className='holPoint'>
              <p>3 Attractions</p>
            </div>
            <hr width="100%" size="1" color="C4C4C4" className='holline' noshade></hr>
            <p className='holPrice'>₹6,000<span className='holtrip'>/trip</span></p>
          </div>
          <div className="holiday">
            <div className="holImg">
              <img src={Holi2} alt="" />
              <span className='holDur'>1N/1D</span>
            </div>
            <div className="holMar">
              <p className='holPlace'>Paro Takshang</p>
              <p className='holTitle'>Heritage to Luxury : Uncover the epic</p>
            </div>
            <div className='holPoint'>
              <p>3 Attractions</p>
              <p>1 Activity</p>
            </div>
            <hr width="100%" size="1" color="C4C4C4" className='holline' noshade></hr>
            <p className='holPrice'>₹5,555<span className='holtrip'>/trip</span></p>
          </div>
          <div className="holiday">
            <div className="holImg">
              <img src={Holi3} alt="" />
              <span className='holDur'>1N/1D</span>
            </div>
            <div className="holMar">
              <p className='holPlace'>Ladakh</p>
              <p className='holTitle'>Heritage to Luxury : Uncover the epic</p>
            </div>
            <div className='holPoint'>
              <p>3 Attractions</p>
            </div>
            <hr width="100%" size="1" color="C4C4C4" className='holline' noshade></hr>
            <p className='holPrice'>₹6,428<span className='holtrip'>/trip</span></p>
          </div>
        </div>
        <button className='holBtn' onClick={goToPackagesPage}>Explore All Packages <img src={RightArrow} alt="img" /></button>
      </div>
      <div className='services' id='services'>
        <div className="service">
          <div className="serLeft">
            <p className='serGreen'>Eco-Friendly</p>
            <p className='serTitle'>Effortless Car Pooling: Travel Together, Save Money, and Reduce Emissions</p>
            <p>Our carpooling feature connects you with travelers heading in the same direction,
              making your journey more affordable and environmentally friendly. By sharing rides,
              you can split the costs and reduce your carbon footprint, all while enjoying the
              company of new people. Whether it's for a daily commute or a longer trip,
              carpooling helps reduce traffic and emissions, making travel more efficient and
              sustainable.</p>
            <button className='serBtn' onClick={goToCarpoolPage}>Learn More <img src={RightArrow} alt="img" /></button>
          </div>
          <div className="serRight">
            <img src={CarPoolSer} alt="" />
          </div>
        </div>
        <div className="service">
          <div className="serLeft">
            <p className='serGreen'>Eco-Friendly</p>
            <p className='serTitle'>Explore Our Convenient Bike Sharing Feature</p>
            <p>Experience the freedom of cycling with our bike sharing service.
              Easily access bikes throughout the city to explore at your own pace.</p>
            <div className="serBotm">
              <div>
                <p className='serBtmTitle'>Ride Smart</p>
                <p>Join a community that values sustainable
                  travel and reduces carbon footprints.</p>
              </div>
              <div>
                <p className='serBtmTitle'>Easy Access</p>
                <p>Find nearby bikes and start your
                  adventure in just a few taps.</p>
              </div>
            </div>
            <button className='serBtn' onClick={goToBikeSharePage}>Learn More <img src={RightArrow} alt="img" /></button>
          </div>
          <div className="serRight">
            <img src={BikeSer} alt="" />
          </div>
        </div>
        <div className="service">
          <div className="serLeft">
            <p className='serGreen'>Eco-Friendly</p>
            <p className='serTitle'>Track Your Travel Impact with Ease</p>
            <p>Our carbon footprints calculator empowers you to understand
              the environmental impact of your travels. By simply entering
              your trip details, you can see how your choices affect the
              planet and make informed decisions for a greener journey.</p>
            <button className='serBtn' onClick={goToCarbonPage}>Learn More <img src={RightArrow} alt="img" /></button>
          </div>
          <div className="serRight">
            <img src={CarbonSer} alt="" />
          </div>
        </div>
      </div>
      <div className='tripla'>
        <img src={Tripla} alt="tripla" className='triplaImg' />
      </div>
      <div className="explore" id='explore'>
        <p className='expTag'>Explore</p>
        <p className='expLine'>Plan your perfect trip with Tripla</p>
        <p className='expMat'>Tripla simplifies travel planning by offering a comprehensive
          suite of features. From carpooling to bike sharing,
          we ensure your journey is both enjoyable and eco-friendly.
        </p>
        <div className="expCards">
          <div className="expCard">
            <img src={Explore} alt="" />
            <p className='expCardTitle'>Effortless Travel Planning at Your Fingertips with Tripla</p>
            <p className='expCardLine'>Our intuitive interface makes organizing your trips a breeze.</p>
          </div>
          <div className="expCard">
            <img src={Explore} alt="" />
            <p className='expCardTitle'>Reduce Your Carbon Footprint While Traveling</p>
            <p className='expCardLine'>Calculate your carbon emissions and choose greener options.</p>
          </div>
          <div className="expCard">
            <img src={Explore} alt="" />
            <p className='expCardTitle'>Diverse Travel Packages for Every Adventurer</p>
            <p className='expCardLine'>Discover tailored travel packages that suit your needs.</p>
          </div>
        </div>
      </div>
      <div className="start">
        <p className='strTitle'>Start Your Adventure Today</p>
        <p className='strLine'>Join Tripla now and explore personalized travel plans tailored just for you</p>
      </div>
    </div>
  )
}

export default Home