import { useState } from "react";
import { postComment } from "../api.js";

const AddComment = ({ setComments, review_id }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentToPost = { username: "happyamy2016", body: newComment };
    postComment(review_id, commentToPost)
      .then((response) => {
        const newComment = response.data.comment;
        setComments((currComments) => {
          const newComments = [...currComments];
          newComments.push(newComment);
          return newComments;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
     <div className="add-comment">
      <form className="add-commment" onSubmit={handleSubmit}>
      <label htmlFor="AddComment">Add a comment</label>
        <textarea
          id="newComment"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></textarea>
      <button className="add-button">Add</button>
      </form>
    </div>
    </div>
  );
};

export default AddComment;
