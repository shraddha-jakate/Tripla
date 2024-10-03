import React from 'react'
import "./CarbonCal.scss"
import Cal1 from "../../assets/cal1.svg"
import Cal2 from "../../assets/cal2.svg"
import Cal3 from "../../assets/cal3.svg"
import Carbon from '../../components/Calculator/Calculator'

const CarbonCal = () => {
    return (
        <div className="calpool">
            <div className='calpoolDiv'>
                <div className="calone">
                    <div className="calleft">
                        <p className='calpgreen'>Eco-Friendly</p>
                        <p className='calTitle'>Track Your Travel Impact: Carbon Footprint Calculator</p>
                        <p><span className='calbold'>What is <span className='calgreen'>Carbon Footprint Tracking</span>?</span><br />
                            The Carbon Footprint Calculator is a tool that helps you measure the environmental impact of your travels by calculating
                            the amount of carbon dioxide (CO2) your trip produces. With this information, you can make informed decisions to adopt
                            more sustainable travel habits, contributing to a greener planet. It’s especially useful for those who want to
                            understand how their individual travel choices affect the environment.</p>
                    </div>
                    <div className="calright">
                        <img src={Cal1} alt="cal" />
                    </div>
                </div>
                <div className="calone">
                    <div className="calright">
                        <img src={Cal2} alt="cal" />
                    </div>
                    <div className="calleft">
                        <span className='calbold'><span className='calgreen'>How It Works:</span></span>
                        <p>
                            <span className='calbold'>Enter Trip Details: </span>Start by entering your trip’s starting point, destination, and method of travel, whether it's a car, plane, bus, or other transport types. You can also input additional details like distance or fuel type for more accuracy.
                        </p>
                        <p>
                            <span className='calbold'>Get Your Carbon Footprint: </span>The calculator estimates your trip’s carbon footprint by analyzing the CO2 emissions generated based on the travel method and distance covered. This helps you understand the environmental impact of your journey.
                        </p>
                        <p>
                            <span className='calbold'>Make Eco-Friendly Choices:</span> With the results in hand, you can make more sustainable travel choices. Opt for greener transportation methods or learn about carbon offset programs that support environmental efforts to reduce your carbon footprint.
                        </p>
                    </div>
                </div>
                <div className="calone">
                    <div className="calleft">
                        <span className='calbold'><span className='calgreen'>Benefits:</span></span>
                        <p>
                            <span className='calbold'>Raise Awareness:</span> By using the Carbon Footprint Calculator, you’ll gain a better understanding of how your travel decisions impact the environment, helping you become a more responsible traveler.
                        </p>
                        <p>
                            <span className='calbold'>Make Informed Choices:</span>The data you get from the tool can guide you toward making more sustainable travel choices, such as carpooling, using public transport, or selecting energy-efficient vehicles.

                        </p>
                        <p>
                            <span className='calbold'>Offset Your Carbon:</span>The tool can also educate you on ways to offset your carbon footprint by supporting environmental projects, like reforestation or renewable energy initiatives, which help reduce the overall carbon load on the planet.
                        </p>
                        <p>
                            <span className='calbold'>Who Can Use It?</span><br />
                            This tool is ideal for anyone looking to reduce their environmental impact while traveling. Whether you're a commuter, frequent flyer, or sustainability advocate, the Carbon Footprint Calculator helps you make eco-conscious travel choices.
                        </p>
                    </div>
                    <div className="calright">
                        <img src={Cal3} alt="cal" />
                    </div>
                </div>
            </div>
            <p className='calText'>Try Carbon Footprint Calculator now</p>
            <div className="calculator">
                <Carbon/>
            </div>
            <div className='whyTripla'>
                <p className='whyTriTitle'>Why Carbon Footprint Calculator?</p>
                <div className="whyFlex">
                    <div className='whyDiv'>
                        <p className='whyTitle'>
                            Understand Environmental Impact</p>
                        <p>Using a carbon footprint calculator helps you gauge how your travel choices contribute to CO2 emissions. It provides insight into the environmental consequences of different modes of transportation, encouraging you to make more responsible and sustainable decisions.</p>
                    </div>
                    <div className='whyDiv'>
                        <p className='whyTitle'>Make Informed Travel Choices</p>
                        <p>The calculator allows you to compare the carbon output of various travel methods, enabling you to select greener options. By choosing eco-friendly alternatives, like carpooling or public transport, you can significantly reduce your carbon footprint.</p>
                    </div>
                    <div className='whyDiv'>
                        <p className='whyTitle'>Support Sustainability Efforts</p>
                        <p>Beyond awareness, the calculator helps you take action by offering suggestions for carbon offsets. You can support projects that combat climate change, like reforestation or clean energy initiatives, helping to balance out your environmental impact.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarbonCal