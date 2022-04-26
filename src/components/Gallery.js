import React, {useState} from 'react';
import '../styles/Gallery.css';
import Carousel from 'react-bootstrap/Carousel';


const data = [
    {
        image: require('../images/download.jpeg'),
        caption:"Caption",
        description:"Description Here"
    },
    {
        image: require('../images/download (1).jpeg'),
        caption:"Caption",
        description:"Description Here"
    },
    {
        image: require('../images/download (2).jpeg'),
        caption:"Caption",
        description:"Description Here"
    }
]


function Gallery() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='carouselDiv'>
        <Carousel activeIndex={index} onSelect={handleSelect}interval={2000} pause={false}  >
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

    );
}

export default Gallery;