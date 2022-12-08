import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getSingleReview } from '../api.js'
import Comments from './Comments'

const SingleReview = () => {
    const [review, setReview] = useState({})
    const  { review_id }  = useParams();

    useEffect(() => {
        getSingleReview(review_id).then((reviewData) => {
            setReview(reviewData);
        });
    }, [review_id]);

    return (
      <div className="review-container">
         <img
                src={review.review_img_url}
                alt={review.title}
                className="single-review-image"
              />
        <h2 className="review-header"> {review.title} </h2>
        <h3 className="review-category"> {review.category}</h3>
        <p className="review-body"> {review.review_body} </p>
        <section className="review-info">
        <p className="review-votes"> Votes: {review.votes} </p>
        <p className="review-owner"> Author: {review.owner} </p>
        <p className="review-date"> Created On: {Date(review.created_at).substring(0,15)} </p>
        </section>
        <Comments />
      </div>
    );
  };

export default SingleReview;