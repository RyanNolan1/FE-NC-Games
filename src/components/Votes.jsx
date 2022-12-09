import { useState } from "react";
import { upVoteReview, downVoteReview  } from "../api.js";
import { useParams } from "react-router-dom";

const Votes = ({ reviewVotes }) => {
  const [voteCount, setVoteCount] = useState(0);
  const { review_id } = useParams();

  const upVote = () => {
    setVoteCount((currCount) => currCount + 1);
    upVoteReview(review_id);
  };

  const downVote = () => {
    setVoteCount((currCount) => currCount - 1);
    downVoteReview(review_id);
  };

  return <div className ="votes">
    <button onClick={upVote} className="upvote">upvote ⬆</button>
    <button onClick={downVote} className="downvote">downvote ⬇</button>
  <p>{reviewVotes + voteCount}</p>
  </div>
};

export default Votes;
