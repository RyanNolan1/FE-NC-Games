import { useState } from "react";
import { useEffect } from "react";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      console.log(reviews);
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>...Loading</p>
  ) : (
    <section className="contents">
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.review_id}>
            <img src={review.review_img_url} alt={review.title} className="review-image"/>
            <h2>{review.title}</h2>
            <h3>{review.category}</h3>
          </li>
        );
      })}
    </ul>
    </section>
  );
};

export default Reviews;
