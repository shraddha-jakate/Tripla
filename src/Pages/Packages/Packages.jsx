import React from 'react'
import "./Packages.scss"
import Pack1 from "../../assets/Pack1.svg"
import Pack2 from "../../assets/Pack2.svg"
import Pack3 from "../../assets/Pack3.svg"
import Pack4 from "../../assets/Pack4.svg"
import Pack5 from "../../assets/Pack5.svg"
import Pack6 from "../../assets/Pack6.svg"
import Carousel from '../../components/Carousel/Carousel'


const Packages = () => {
    return (
        <div className='Packages'>
            <Carousel/>
            <div className="packFlex">
                <p className='packTitle'>Curated trip packages by real travellers</p>
                <div className="curPacks">
                    <div className="curPack">
                        <div className='curImg'>
                            <img src={Pack1} alt="" />
                            <span className='curDur'>4N/5D</span>
                        </div>
                        <div className='curMar'>
                            <p className='curPlace'>Bali</p>
                            <p className='curTitle'>Bali Bliss: A Romantic Hideway</p>
                        </div>
                        <div className='curPoint'>
                            <p>1 Activity</p>
                            <p>3 Attractions</p>
                            <p>2 Hotels</p>
                        </div>
                        <hr width="100%" size="1" color="C4C4C4" className='curline' noshade></hr>
                        <p className='curPrice'>₹1,25,221<span className='curtrip'>/person</span></p>
                    </div>
                    <div className="curPack">
                        <div className='curImg'><img src={Pack2} alt="" /><span className='curDur'>4N/5D</span></div>
                        <div className='curMar'>
                            <p className='curPlace'>Bali</p>
                            <p className='curTitle'>The Island of Gods: Bali's Enchant...</p>
                        </div>
                        <div className='curPoint'>
                            <p>1 Activity</p>
                            <p>8 Attractions</p>
                            <p>2 Hotels</p>
                        </div>
                        <hr width="100%" size="1" color="C4C4C4" className='curline' noshade></hr>
                        <p className='curPrice'>₹1,60,867<span className='curtrip'>/person</span></p>
                    </div>
                    <div className="curPack">
                        <div className='curImg'><img src={Pack3} alt="" /><span className='curDur'>4N/5D</span></div>
                        <div className='curMar'>
                            <p className='curPlace'>Dubai</p>
                            <p className='curTitle'>Ultimate Dubai Sparkle Itinerary...</p>
                        </div>
                        <div className='curPoint'>
                            <p>1 Activity</p>
                            <p>4 Attractions</p>
                            <p>1 SIM</p>
                        </div>
                        <hr width="100%" size="1" color="C4C4C4" className='curline' noshade></hr>
                        <p className='curPrice'>₹29,552<span className='curtrip'>/person</span></p>
                    </div>
                    <div className="curPack">
                        <div className='curImg'><img src={Pack4} alt="" /><span className='curDur'>4N/5D</span></div>
                        <div className='curMar'>
                            <p className='curPlace'>London</p>
                            <p className='curTitle'>10-Hour Layover in London</p>
                        </div>
                        <div className='curPoint'>
                            <p>1 Activity</p>
                            <p>3 Attractions</p>
                            <p>4 Hotels</p>
                        </div>
                        <hr width="100%" size="1" color="C4C4C4" className='curline' noshade></hr>
                        <p className='curPrice'>₹12,225<span className='curtrip'>/person</span></p>
                    </div>
                    <div className="curPack">
                        <div className='curImg'><img src={Pack5} alt="" /><span className='curDur'>4N/5D</span></div>
                        <div className='curMar'>
                            <p className='curPlace'>Singapore</p>
                            <p className='curTitle'>Travelling with my Toddler to Sing...</p>
                        </div>
                        <div className='curPoint'>
                            <p>1 Activity</p>
                            <p>2 Attractions</p>
                            <p>3 Hotels</p>
                        </div>
                        <hr width="100%" size="1" color="C4C4C4" className='curline' noshade></hr>
                        <p className='curPrice'>₹36,428<span className='curtrip'>/person</span></p>
                    </div>
                    <div className="curPack">
                        <div className='curImg'><img src={Pack6} alt="" /><span className='curDur'>4N/5D</span></div>
                        <div className='curMar'>
                            <p className='curPlace'>Dubai, Abu Dhabi</p>
                            <p className='curTitle'>A Memorable Family Adventure...</p>
                        </div>
                        <div className='curPoint'>
                            <p>2 Activities</p>
                            <p>8 Attractions</p>
                            <p>2 Hotels</p>
                        </div>
                        <hr width="100%" size="1" color="C4C4C4" className='curline' noshade></hr>
                        <p className='curPrice'>₹86,428<span className='curtrip'>/person</span></p>
                    </div>
                </div>
                <div className='whyTripla'>
                    <p className='whyTriTitle'>Why Trip Booking with Tripla?</p>
                    <div className="whyFlex">
                        <div className='whyDiv'>
                            <p className='whyTitle'>Lowest Prices Guaranteed</p>
                            <p>At Tripla, we keep our advertising costs low, allowing
                                us to offer competitive prices on trip bookings.
                                If you find a better deal elsewhere, let us know, and
                                we’ll match it for you!</p>
                        </div>
                        <div className='whyDiv'>
                            <p className='whyTitle'>Seamless Trip Planning</p>
                            <p>Avoid the stress of managing multiple booking sites or
                                missing great deals. We offer diverse trip packages to
                                suit various interests and budgets. If you can’t find
                                the right option, reach out, and we’ll help plan your
                                getaway!</p>
                        </div>
                        <div className='whyDiv'>
                            <p className='whyTitle'>Trusted by Travelers Worldwide</p>
                            <p>With high ratings on platforms like Google and Facebook,
                                our customers trust us for their travel needs. We take
                                pride in providing exceptional service, ensuring a
                                memorable experience every time you book with us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages