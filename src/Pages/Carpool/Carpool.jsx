import React from 'react'
import Car1 from "../../assets/car1.svg"
import Car2 from "../../assets/car2.svg"
import Car3 from "../../assets/car3.svg"
import Driver from "../../assets/driver.svg"
import "./Carpool.scss"


const Carpool = () => {
    return (
        <div className="carpool">
            <div className='carpoolDiv'>
                <div className="carone">
                    <div className="carleft">
                        <p className='carpgreen'>Eco-Friendly</p>
                        <p className='carTitle'>Carpooling: Travel Together, Save Money, and Reduce Emissions</p>
                        <p><span className='carbold'>What is <span className='cargreen'>Carpooling</span>?</span><br />
                            Carpooling is when multiple people share a single vehicle for a trip,
                            helping to reduce travel costs, traffic congestion, and environmental
                            impact. It’s commonly used for commutes or long-distance travel,
                            allowing passengers to split expenses like fuel and tolls.
                            Carpooling also helps lower carbon emissions and promotes a more
                            sustainable way of traveling. Many modern carpooling arrangements
                            are organized via apps, making it convenient to match riders going
                            to the same destination.</p>
                    </div>
                    <div className="carright">
                        <img src={Car1} alt="Car" />
                    </div>
                </div>
                <div className="carone">
                    <div className="carright">
                        <img src={Car2} alt="Car" />
                    </div>
                    <div className="carleft">
                        <span className='carbold'><span className='cargreen'>How It Works:</span></span>
                        <p>
                            <span className='carbold'>Search for a Ride:</span> Input your destination, travel date,
                            and time on a carpool platform or app. You'll be shown available carpool options that
                            match your schedule, including details about the driver, route, and fellow passengers.
                        </p>
                        <p>
                            <span className='carbold'>Book Your Spot:</span>Once you find the right ride, reserve
                            your seat by splitting the travel costs, such as fuel or tolls. This ensures a more
                            affordable journey compared to traveling alone, with secure payment options available
                            for added convenience.
                        </p>
                        <p>
                            <span className='carbold'>Meet and Go:</span> After booking, you’ll receive meeting
                            details. On the day of travel, head to the designated pickup point, meet your
                            driver and co-passengers, and enjoy a shared, eco-friendly trip to your destination.
                        </p>
                    </div>
                </div>
                <div className="carone">
                    <div className="carleft">
                        <span className='carbold'><span className='cargreen'>Benefits:</span></span>
                        <p>
                            <span className='carbold'>Cost Savings:</span> Share expenses like fuel
                            and tolls, making travel more affordable for everyone involved.
                        </p>
                        <p>
                            <span className='carbold'>Eco-Friendly:</span>Fewer cars on the road means reduced
                            emissions and a lower environmental impact, supporting sustainability.
                        </p>
                        <p>
                            <span className='carbold'>Social:</span> Meet new people with similar travel plans,
                            engage in conversations, and make the journey more enjoyable.
                        </p>
                        <p>
                            <span className='carbold'>Who Can Use It?</span><br />
                            Anyone looking to save money and travel sustainably. Carpooling is ideal for daily
                            commuters, long-distance travellers, and those who enjoy shared travel experiences.
                        </p>
                    </div>
                    <div className="carright">
                        <img src={Car3} alt="Car" />
                    </div>
                </div>
            </div>
            <p className='carText'>Curated Carpooling by Real Travelers</p>
            <div className='carCards'>
                <div className="carCard">
                    <div className="cartop">
                        <div className="cardleft">
                            <p className='place'>Mumbai to Goa</p>
                            <p className='seat'>2 Available</p>
                        </div>
                        <div className="cardright">
                            <span>12 hrs</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='carline' noshade></hr>
                    <div className="cardown">
                        <div><p className='carPrice'>₹1,270<span className='cartrip'>/person</span></p></div>
                        <div className='carDri'>
                            <img src={Driver} alt="driver" />
                            <p>Mason</p>
                        </div>
                    </div>
                </div>
                <div className="carCard">
                    <div className="cartop">
                        <div className="cardleft">
                            <p className='place'>Bengaluru to Chennai</p>
                            <p className='seat'>1 Available</p>
                        </div>
                        <div className="cardright">
                            <span>5 hrs</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='carline' noshade></hr>
                    <div className="cardown">
                        <div><p className='carPrice'>₹800<span className='cartrip'>/person</span></p></div>
                        <div className='carDri'>
                            <img src={Driver} alt="driver" />
                            <p>Sophia</p>
                        </div>
                    </div>
                </div>
                <div className="carCard">
                    <div className="cartop">
                        <div className="cardleft">
                            <p className='place'>Delhi to Jaipur</p>
                            <p className='seat'>2 Available</p>
                        </div>
                        <div className="cardright">
                            <span>5 hrs</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='carline' noshade></hr>
                    <div className="cardown">
                        <div><p className='carPrice'>₹1,100<span className='cartrip'>/person</span></p></div>
                        <div className='carDri'>
                            <img src={Driver} alt="driver" />
                            <p>Amelia</p>
                        </div>
                    </div>
                </div>
                <div className="carCard">
                    <div className="cartop">
                        <div className="cardleft">
                            <p className='place'>Hyderabad to Pune</p>
                            <p className='seat'>2 Available</p>
                        </div>
                        <div className="cardright">
                            <span>10 hrs</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='carline' noshade></hr>
                    <div className="cardown">
                        <div><p className='carPrice'>₹1,000<span className='cartrip'>/person</span></p></div>
                        <div className='carDri'>
                            <img src={Driver} alt="driver" />
                            <p>Puneeth</p>
                        </div>
                    </div>
                </div>
                <div className="carCard">
                    <div className="cartop">
                        <div className="cardleft">
                            <p className='place'>Mumbai to Nashi</p>
                            <p className='seat'>3 Available</p>
                        </div>
                        <div className="cardright">
                            <span>3 hrs</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='carline' noshade></hr>
                    <div className="cardown">
                        <div><p className='carPrice'>₹600<span className='cartrip'>/person</span></p></div>
                        <div className='carDri'>
                            <img src={Driver} alt="driver" />
                            <p>Shraddha</p>
                        </div>
                    </div>
                </div>
                <div className="carCard">
                    <div className="cartop">
                        <div className="cardleft">
                            <p className='place'>Jaipur to Udaipur</p>
                            <p className='seat'>2 Available</p>
                        </div>
                        <div className="cardright">
                            <span>10 hrs</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='carline' noshade></hr>
                    <div className="cardown">
                        <div><p className='carPrice'>₹1,200<span className='cartrip'>/person</span></p></div>
                        <div className='carDri'>
                            <img src={Driver} alt="driver" />
                            <p>Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whyTripla'>
                <p className='whyTriTitle'>Why Carpool with Tripla?</p>
                <div className="whyFlex">
                    <div className='whyDiv'>
                        <p className='whyTitle'>Affordable Rates, Always</p>
                        <p>We keep our advertising costs low, enabling us to 
                            offer competitive prices for all carpooling options. 
                            If you discover a better rate elsewhere, let us know, 
                            and we’ll gladly match it for you!</p>
                    </div>
                    <div className='whyDiv'>
                        <p className='whyTitle'>Complete Peace of Mind</p>
                        <p>Forget the hassle of searching multiple platforms 
                            or worrying about missing the best ride. We connect 
                            you with carpooling options across many routes. 
                            If you can’t find a suitable ride, reach out, and 
                            we’ll assist you!</p>
                    </div>
                    <div className='whyDiv'>
                        <p className='whyTitle'>Trusted by Travelers</p>
                        <p>We consistently receive ratings of 4.5+ on various
                             independent review platforms like Google and 
                             Facebook. Our users trust us, and we strive to 
                             provide an excellent experience every time you 
                             travel with us.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carpool