import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaViber } from "react-icons/fa";
import ListGroup  from 'react-bootstrap/ListGroup';
import BrandCarusel from '../BrandCarousel/BrandCarusel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find Us On</h5>

                <ListGroup className='mt-4'>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaViber></FaViber>Viber</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarusel></BrandCarusel>
            </div>
        </div>
    );
};

export default RightSideNav;