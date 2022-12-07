import { useState } from "react";
import { useEffect } from "react";
import { getReviews } from "../api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getReviews(review_id).then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [review_id]);

  return loading ? (
    <p>...Loading</p>
  ) : (
    <section className="contents">
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <img
                src={review.review_img_url}
                alt={review.title}
                className="review-image"
              />
              <h2>{review.title}</h2>
              <h3>{review.category}</h3>
              <Link to={`/reviews/${review.review_id}`} key={review.review_id} className="links">
                Read Review
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
