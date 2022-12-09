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

export const getReviewComments = (review_id) => {
  return gameApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.review;
  });
};

export const upVoteReview = (review_id) => {
  return gameApi.patch(`reviews/${review_id}`, {inc_votes: 1})
  .then((res) => {
    return res.data.votes
  })
};

export const downVoteReview = (review_id) => {
  return gameApi.patch(`reviews/${review_id}`, {inc_votes: -1})
  .then((res) => {
    return res
  })
};