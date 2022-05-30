import React, { useState } from 'react';
import '../styles/Gallery.css';
import Carousel from 'react-bootstrap/Carousel';


const data = [
    {
        image: require('../images/download (3).jpeg'),
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: require('../images/download (1).png'),
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: require('../images/download (2).jpeg'),
        caption: "Caption",
        description: "Description Here"
    }
]


function Gallery() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='galDiv'>
            <div className='galleryDiv'>


                <div className='carouselDiv'>
                    <h1>Greater Heights, Houston Texas
                    </h1>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={2500} pause={false}  >
                        {data.map((slide, i) => {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src={slide.image}
                                        alt="one"
                                    />
                                    <Carousel.Caption>
                                        <h3>{slide.caption}</h3>
                                        <p>{slide.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel></div>


                <div className='carouselDiv'>
                    <h1>Fulshear, Texas</h1>
                    <br />
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={7000} pause={false}  >
                        {data.map((slide, i) => {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src={slide.image}
                                        alt="one"
                                    />
                                    <Carousel.Caption>
                                        <h3>{slide.caption}</h3>
                                        <p>{slide.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel></div>

            </div>

            <div className='galleryDiv'>




            </div>
        </div>
    );
}

export default Gallery;