import React from 'react'
import Bike1 from "../../assets/bike1.svg"
import Bike2 from "../../assets/bike2.svg"
import Bike3 from "../../assets/bike3.svg"
import Driver from "../../assets/driver.svg"
import "./Bike.scss"

const Bike = () => {
    return (
        <div className="bikepool">
            <div className='bikepoolDiv'>
                <div className="bikeone">
                    <div className="bikeleft">
                        <p className='bikepgreen'>Eco-Friendly</p>
                        <p className='bikeTitle'>Bike Sharing: Explore the City with Ease</p>
                        <p><span className='bikebold'>What is <span className='bikegreen'>Bike Sharing</span>?</span><br />
                        Bike sharing is a sustainable and convenient transportation solution that allows 
                        individuals to rent bicycles for short trips throughout the city. With a network 
                        of bikes readily available, users can easily pick up a bike at one location and 
                        drop it off at another, eliminating the need for bike ownership while promoting 
                        eco-friendly travel. This system is ideal for those looking to navigate urban 
                        areas efficiently, whether for commuting, sightseeing, or simply enjoying a 
                        leisurely ride.</p>
                    </div>
                    <div className="bikeright">
                        <img src={Bike1} alt="bike" />
                    </div>
                </div>
                <div className="bikeone">
                    <div className="bikeright">
                        <img src={Bike2} alt="bike" />
                    </div>
                    <div className="bikeleft">
                        <span className='bikebold'><span className='bikegreen'>How It Works:</span></span>
                        <p>
                            <span className='bikebold'>Find a Bike :</span> Use our user-friendly app to
                             locate the nearest available bike. The app provides real-time information 
                             on bike availability, ensuring you can easily find a ride when you need it.
                        </p>
                        <p>
                            <span className='bikebold'>Unlock and Ride: </span>After selecting a bike, 
                            simply pay through the app to unlock it instantly. The process is quick 
                            and secure, allowing you to get on the road without any hassle.
                        </p>
                        <p>
                            <span className='bikebold'>Explore:</span> Once you’re on the bike, 
                            you can ride at your own pace, exploring the city’s hidden gems and 
                            popular attractions. When you’re done, return the bike to any 
                            designated station within the network, making it easy to complete 
                            your journey.
                        </p>
                    </div>
                </div>
                <div className="bikeone">
                    <div className="bikeleft">
                        <span className='bikebold'><span className='bikegreen'>Benefits:</span></span>
                        <p>
                            <span className='bikebold'>Cost-Effective:</span> Renting a bike is often 
                            more affordable than traditional forms of transportation, such as taxis 
                            or ride-sharing services. Users can enjoy low rental rates and save money 
                            on transportation costs.
                        </p>
                        <p>
                            <span className='bikebold'>Eco-Friendly:</span>By opting for bike sharing, 
                            you contribute to reducing carbon emissions and traffic congestion. 
                            Fewer cars on the road mean a cleaner environment, promoting 
                            sustainability and healthier urban spaces.
                        </p>
                        <p>
                            <span className='bikebold'>Convenient:</span> There's no need to invest 
                            in a bike or worry about maintenance and storage. With bike sharing, 
                            you can rent a bike whenever you need it, making it an ideal option 
                            for spontaneous outings or planned trips.
                        </p>
                        <p>
                            <span className='bikebold'>Who Can Use It?</span><br />
                            Bike sharing is perfect for a diverse range of users, 
                            including: Tourists, City Residents, Students
                        </p>
                    </div>
                    <div className="bikeright">
                        <img src={Bike3} alt="bike" />
                    </div>
                </div>
            </div>
            <p className='bikeText'>Curated Bike Sharing by Real Travelers</p>
            <div className='bikebikeds'>
                <div className="bikebiked">
                    <div className="biketop">
                        <div className="bikedleft">
                            <p className='place'>Marine Drive to Juhu Beach</p>
                            <p className='seat'>2 Available</p>
                        </div>
                        <div className="bikedright">
                            <span>30 mins</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='bikeline' noshade></hr>
                    <div className="bikedown">
                        <div><p className='bikePrice'>₹180<span className='biketrip'>/person</span></p></div>
                        <div className='bikeDri'>
                            <img src={Driver} alt="driver" />
                            <p>Shraddha</p>
                        </div>
                    </div>
                </div>
                <div className="bikebiked">
                    <div className="biketop">
                        <div className="bikedleft">
                            <p className='place'>Colaba to Bandra Fort</p>
                            <p className='seat'>1 Available</p>
                        </div>
                        <div className="bikedright">
                            <span>1 hr</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='bikeline' noshade></hr>
                    <div className="bikedown">
                        <div><p className='bikePrice'>₹800<span className='biketrip'>/person</span></p></div>
                        <div className='bikeDri'>
                            <img src={Driver} alt="driver" />
                            <p>Sophia</p>
                        </div>
                    </div>
                </div>
                <div className="bikebiked">
                    <div className="biketop">
                        <div className="bikedleft">
                            <p className='place'>Red Fort to Humayun's Tomb</p>
                            <p className='seat'>2 Available</p>
                        </div>
                        <div className="bikedright">
                            <span>25 mins</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='bikeline' noshade></hr>
                    <div className="bikedown">
                        <div><p className='bikePrice'>₹90<span className='biketrip'>/person</span></p></div>
                        <div className='bikeDri'>
                            <img src={Driver} alt="driver" />
                            <p>Amelia</p>
                        </div>
                    </div>
                </div>
                <div className="bikebiked">
                    <div className="biketop">
                        <div className="bikedleft">
                            <p className='place'>Elephanta Caves to Colaba</p>
                            <p className='seat'>2 Available</p>
                        </div>
                        <div className="bikedright">
                            <span>30 mins</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='bikeline' noshade></hr>
                    <div className="bikedown">
                        <div><p className='bikePrice'>₹120<span className='biketrip'>/person</span></p></div>
                        <div className='bikeDri'>
                            <img src={Driver} alt="driver" />
                            <p>Puneeth</p>
                        </div>
                    </div>
                </div>
                <div className="bikebiked">
                    <div className="biketop">
                        <div className="bikedleft">
                            <p className='place'>T Nagar to Mahabalipuram</p>
                            <p className='seat'>2 Available</p>
                        </div>
                        <div className="bikedright">
                            <span>3 hrs</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='bikeline' noshade></hr>
                    <div className="bikedown">
                        <div><p className='bikePrice'>₹400<span className='biketrip'>/person</span></p></div>
                        <div className='bikeDri'>
                            <img src={Driver} alt="driver" />
                            <p>Elijah</p>
                        </div>
                    </div>
                </div>
                <div className="bikebiked">
                    <div className="biketop">
                        <div className="bikedleft">
                            <p className='place'>CST to Hanging Gardens</p>
                            <p className='seat'>3 Available</p>
                        </div>
                        <div className="bikedright">
                            <span>30 mins</span>
                        </div>
                    </div>
                    <hr width="100%" size="1" color="C4C4C4" className='bikeline' noshade></hr>
                    <div className="bikedown">
                        <div><p className='bikePrice'>₹100<span className='biketrip'>/person</span></p></div>
                        <div className='bikeDri'>
                            <img src={Driver} alt="driver" />
                            <p>Mason</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whyTripla'>
                <p className='whyTriTitle'>Why bikepool with Tripla?</p>
                <div className="whyFlex">
                    <div className='whyDiv'>
                        <p className='whyTitle'>Affordable Rates, Always</p>
                        <p>At Tripla Bike Share, we keep our operating costs low, 
                            allowing us to offer competitive prices on bike rentals. 
                            If you find a better rate elsewhere, let us know, and 
                            we’ll match it for you!</p>
                    </div>
                    <div className='whyDiv'>
                        <p className='whyTitle'>Complete Peace of Mind</p>
                        <p>Skip the hassle of comparing rental platforms or 
                            worrying about deals. We offer flexible 
                            bike-sharing plans for all budgets. Can’t find the 
                            right option? Contact us, and we'll help you out!</p>
                    </div>
                    <div className='whyDiv'>
                        <p className='whyTitle'>Trusted by Travelers</p>
                        <p>With consistently high ratings on review platforms 
                            like Google, our riders trust us for their biking needs.
                             We take pride in delivering exceptional service and 
                             ensuring you have a smooth experience everytime you 
                             ride with us.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bike