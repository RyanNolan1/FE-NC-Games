import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../api.js";

const Nav = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <ul className="nav">
      {reviews.map((review) => {
       return (
        <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
        {review.title}
        </Link>
       )
      })}
    </ul>
  );
};

export default Nav;