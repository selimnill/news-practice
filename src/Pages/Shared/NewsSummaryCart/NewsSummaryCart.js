import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShare, FaStar } from "react-icons/fa";

const NewsSummaryCart = ({ news }) => {
    const { title, _id, author, details,rating, image_url, total_view } = news;
    console.log(news);
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex jus'>
                    <img className='rounded xl' src={author?.img}  style={{ height: ' 60px' }} alt="" />
                    <div className='mx-4'>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div className='mx-2'>
                    <FaRegBookmark className='me-3'></FaRegBookmark>
                    <FaShare></FaShare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top' src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>


                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCart;