import React from "react";
import { useState } from 'react';
import { Button } from 'react-bootstrap'


const ReviewForm = (props) => {
    const [review, setReview] = useState(''); //useState = hook
    const [allReviews, setAllReviews] = useState([]) //move to movieList
    // setReview(review.filter(review => review.value !== valueToDelete))
    //function to handle event change
    const handleChange = (e) => {
        setReview(e.target.value)
    }
    const handleEvent = () => {
        // console.log('test')
        setReview([])
        setAllReviews([...allReviews, review]) //spread operator holds all reviews
    }

    function handleDelete(id) {
        const reviewCopy = [...allReviews]
        reviewCopy.splice(id, 1);
        setAllReviews(reviewCopy);
    };
    return (
        <>
            <input type="text" className="form mt-3" onChange={handleChange} value={review} ></input>
            <Button variant="btn btn-outline-success m-5" onClick={handleEvent}>Leave a Review!</Button>

            {allReviews.map((review, id) => (
                <li className="list" key={id}>
                    {review}
                    <Button variant='btn btn-outline-danger btn-sm ms-5' id={id} onClick={() => handleDelete(id)} >
                        Delete
                    </Button>
                    
                </li>
            ))}
        </>
    );
};

export default ReviewForm;