import React, { useState } from 'react';
import './Carousel.scss';
import carousel1 from '../../assets/carousel1.svg';
import carousel2 from '../../assets/carousel2.svg';
import carousel3 from '../../assets/carousel3.svg';
import LArrow from "../../assets/lArr.svg";
import RArrow from "../../assets/rArr.svg";


const Carousel = () => {
    const images = [
        {
            src: carousel1,
            title: 'Unique Experiences, Lifelong Memories',
            line: 'Enjoy the best of Phuket Attractions'
        },
        {
            src: carousel2,
            title: 'Adventures Await',
            line: 'Explore the hidden gems of Bali.'
        },
        {
            src: carousel3,
            title: 'Relax & Recharge',
            line: 'Unwind at the most serene beaches.'
        }
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    return (
        <div className="carousel-container">
            <div className="slider">
                {images.map((image, index) => (
                    <div className={`slide ${index === current ? 'active' : ''}`} key={index}>
                        {index === current && (
                            <>
                                <img src={image.src} alt="carousel" className="carousel-image" />
                                <div className="carousel-info">
                                    <h2>{image.title}</h2>
                                    <p>{image.line}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
                <div onClick={prevSlide} className="control-prev-btn">
                    <img src={LArrow} alt="" />
                </div>
                <div onClick={nextSlide} className="control-next-btn">
                    <img src={RArrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
