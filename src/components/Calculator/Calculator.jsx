import React, { useState } from 'react';
import './Calculator.scss';
import Calop1 from "../../assets/calop1.svg"
import Calop2 from "../../assets/calop2.svg"
import Calop3 from "../../assets/calop3.svg"
import Calop4 from "../../assets/calop4.svg"
import Calop5 from "../../assets/calop5.svg"


const CarbonFootprintCalculator = () => {
    const [activeOption, setActiveOption] = useState('car');
    const [homeInputs, setHomeInputs] = useState({ electricity: 0, naturalGas: 0, biomass: 0, coal: 0, heatingOil: 0, lpg: 0 });
    const [transportInputs, setTransportInputs] = useState({ bus: 0, taxi: 0, tram: 0, localTrain: 0, longDistanceTrain: 0 });
    const [carInputs, setCarInputs] = useState({ carType: 'small', fuelType: 'petrol', mileage: 0 });
    const [motorbikeInputs, setMotorbikeInputs] = useState({ bikeType: 'small', fuelType: 'petrol', mileage: 0 });
    const [flightDistance, setFlightDistance] = useState(0);
    const [result, setResult] = useState({ totalFootprint: 0, averageCost: 0 });

    const calculateCarbonFootprint = () => {
        let totalFootprint = 0;
        const averageCostPerKg = 12.27;

        totalFootprint += homeInputs.electricity * 0.5;
        totalFootprint += homeInputs.naturalGas * 2.5;
        totalFootprint += homeInputs.biomass * 1.5;
        totalFootprint += homeInputs.coal * 3.5;
        totalFootprint += homeInputs.heatingOil * 2.8;
        totalFootprint += homeInputs.lpg * 1.5;

        totalFootprint += transportInputs.bus * 0.1;
        totalFootprint += transportInputs.taxi * 0.2;
        totalFootprint += transportInputs.tram * 0.05;
        totalFootprint += transportInputs.localTrain * 0.1;
        totalFootprint += transportInputs.longDistanceTrain * 0.15;

        const carFootprint = carInputs.fuelType === 'petrol' ? carInputs.mileage * 2 : carInputs.mileage * 3;
        totalFootprint += carFootprint;

        const bikeFootprint = motorbikeInputs.fuelType === 'petrol' ? motorbikeInputs.mileage * 1.5 : motorbikeInputs.mileage * 2.5;
        totalFootprint += bikeFootprint;

        totalFootprint += flightDistance * 0.2;

        const averageCost = totalFootprint * averageCostPerKg;

        setResult({ totalFootprint, averageCost });
    };

    const resetInputs = () => {
        setHomeInputs({ electricity: 0, naturalGas: 0, biomass: 0, coal: 0, heatingOil: 0, lpg: 0 });
        setTransportInputs({ bus: 0, taxi: 0, tram: 0, localTrain: 0, longDistanceTrain: 0 });
        setCarInputs({ carType: 'small', fuelType: 'petrol', mileage: 0 });
        setMotorbikeInputs({ bikeType: 'small', fuelType: 'petrol', mileage: 0 });
        setFlightDistance(0);
        setResult({ totalFootprint: 0, averageCost: 0 });
    };

    return (
        <div className="container">
            <div className="button-container">
                {['home', 'publicTransport', 'car', 'motorbike', 'flight'].map(option => (
                    <button
                        key={option}
                        className={activeOption === option ? 'active-button' : 'button'}
                        onClick={() => setActiveOption(option)}
                    >
                        {option === 'home' && <img src={Calop1} alt="Home" />}
                        {option === 'publicTransport' && <img src={Calop2} alt="Public Transport" />}
                        {option === 'car' && <img src={Calop3} alt="Car" />}
                        {option === 'motorbike' && <img src={Calop4} alt="Motorbike" />}
                        {option === 'flight' && <img src={Calop5} alt="Flight" />}
                        {option.charAt(0).toUpperCase() + option.slice(1).replace(/([A-Z])/g, ' $1')}
                    </button>
                ))}
            </div>

            {activeOption === 'home' && (
                <div className="inputs">
                    <h2>Home</h2>
                    <label>
                        Electricity:
                        <input type="number" value={homeInputs.electricity} onChange={(e) => setHomeInputs({ ...homeInputs, electricity: e.target.value })} />
                        kWh
                    </label>
                    <label>
                        Natural Gas:
                        <input type="number" value={homeInputs.naturalGas} onChange={(e) => setHomeInputs({ ...homeInputs, naturalGas: e.target.value })} />
                        Kg
                    </label>
                    <label>
                        Biomass:
                        <input type="number" value={homeInputs.biomass} onChange={(e) => setHomeInputs({ ...homeInputs, biomass: e.target.value })} />
                        kg
                    </label>
                    <label>
                        Coal:
                        <input type="number" value={homeInputs.coal} onChange={(e) => setHomeInputs({ ...homeInputs, coal: e.target.value })} />
                        kg
                    </label>
                    <label>
                        Heating Oil:
                        <input type="number" value={homeInputs.heatingOil} onChange={(e) => setHomeInputs({ ...homeInputs, heatingOil: e.target.value })} />
                        litres
                    </label>
                    <label>
                        LPG:
                        <input type="number" value={homeInputs.lpg} onChange={(e) => setHomeInputs({ ...homeInputs, lpg: e.target.value })} />
                        kg
                    </label>
                </div>
            )}

            {activeOption === 'publicTransport' && (
                <div className="inputs">
                    <h2>Public Transport</h2>
                    <label>
                        Bus:
                        <input type="number" value={transportInputs.bus} onChange={(e) => setTransportInputs({ ...transportInputs, bus: e.target.value })} />
                        km
                    </label>
                    <label>
                        Taxi:
                        <input type="number" value={transportInputs.taxi} onChange={(e) => setTransportInputs({ ...transportInputs, taxi: e.target.value })} />
                        km
                    </label>
                    <label>
                        Tram:
                        <input type="number" value={transportInputs.tram} onChange={(e) => setTransportInputs({ ...transportInputs, tram: e.target.value })} />
                        km
                    </label>
                    <label>
                        Local Train:
                        <input type="number" value={transportInputs.localTrain} onChange={(e) => setTransportInputs({ ...transportInputs, localTrain: e.target.value })} />
                        km
                    </label>
                    <label>
                        Long Distance Train:
                        <input type="number" value={transportInputs.longDistanceTrain} onChange={(e) => setTransportInputs({ ...transportInputs, longDistanceTrain: e.target.value })} />
                        km
                    </label>
                </div>
            )}

            {activeOption === 'car' && (
                <div className="inputs">
                    <h2>Car</h2>
                    <label>
                        Car Type:
                        <select value={carInputs.carType} onChange={(e) => setCarInputs({ ...carInputs, carType: e.target.value })}>
                            <option value="small">Small Car</option>
                            <option value="medium">Medium Car</option>
                            <option value="big">Big Car</option>
                        </select>
                    </label>
                    <label>
                        Fuel Type:
                        <select value={carInputs.fuelType} onChange={(e) => setCarInputs({ ...carInputs, fuelType: e.target.value })}>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                        </select>
                    </label>
                    <label>
                        Mileage:
                        <input type="number" value={carInputs.mileage} onChange={(e) => setCarInputs({ ...carInputs, mileage: e.target.value })} />
                        km
                    </label>
                </div>
            )}

            {activeOption === 'motorbike' && (
                <div className="inputs">
                    <h2>Motorbike</h2>
                    <label>
                        Bike Type:
                        <select value={motorbikeInputs.bikeType} onChange={(e) => setMotorbikeInputs({ ...motorbikeInputs, bikeType: e.target.value })}>
                            <option value="small">Small Bike</option>
                            <option value="medium">Medium Bike</option>
                            <option value="big">Big Bike</option>
                        </select>
                    </label>
                    <label>
                        Fuel Type:
                        <select value={motorbikeInputs.fuelType} onChange={(e) => setMotorbikeInputs({ ...motorbikeInputs, fuelType: e.target.value })}>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                        </select>
                    </label>
                    <label>
                        Mileage:
                        <input type="number" value={motorbikeInputs.mileage} onChange={(e) => setMotorbikeInputs({ ...motorbikeInputs, mileage: e.target.value })} />
                        km
                    </label>
                </div>
            )}

            {activeOption === 'flight' && (
                <div className="inputs">
                    <h2>Flight</h2>
                    <label>
                        Distance Flown:
                        <input type="number" value={flightDistance} onChange={(e) => setFlightDistance(e.target.value)} />
                        km
                    </label>
                </div>
            )}

            <div className="actions">
                <button className="calculate-button" onClick={calculateCarbonFootprint}>Calculate</button>
                <button className="reset-button" onClick={resetInputs}>Reset</button>
            </div>

            <div className="result">
                <p className='resbold'>Results:</p>
                <p>Total Carbon Footprint: {result.totalFootprint} kg</p>
                <p>Average Cost: ₹ {result.averageCost.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default CarbonFootprintCalculator;
