import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/Brands/img1.jpg';
import img2 from '../../../assets/Brands/img2.jpg';

const BrandCarusel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                
            </Carousel>



        </div>
    );
};

export default BrandCarusel;