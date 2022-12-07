import axios from "axios";

const gameApi = axios.create({
  baseURL: 'https://eager-getup-ant.cyclic.app/api/'
})


export const getReviews = () => {
  return axios
    .get("https://eager-getup-ant.cyclic.app/api/reviews")
    .then(({ data: { reviews } }) => {
      return reviews;
    });
};

export const getSingleReview = ( review_id ) => {
  return gameApi.get(`reviews/${review_id}`).then((res) => {
      console.log(res.data)
      return res.data.review
    })
  }