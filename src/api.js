import axios from "axios";

export const getReviews = () => {
  return axios
    .get("https://eager-getup-ant.cyclic.app/api/reviews")
    .then(({ data: { reviews } }) => {
      return reviews;
    });
};
