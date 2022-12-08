import axios from "axios";

const gameApi = axios.create({
  baseURL: "https://eager-getup-ant.cyclic.app/api/",
});

export const getReviews = () => {
  return axios
    .get("https://eager-getup-ant.cyclic.app/api/reviews")
    .then(({ data: { reviews } }) => {
      return reviews;
    });
};

export const getSingleReview = (review_id) => {
  return gameApi.get(`reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

// added a function to return comments

export const getReviewComments = (review_id) => {
  return gameApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.review;
  });
};