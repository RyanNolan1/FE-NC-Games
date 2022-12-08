import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { getReviewComments } from '../api.js'


const Comments = () => {
    const [comments, setComments] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const ref = useRef(null);

    const handleClick = event => {
        setIsShown(current => !current);
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

    const  { review_id }  = useParams();

    useEffect(() => {
        getReviewComments(review_id).then((commentsFromAPI) => {
          setComments(commentsFromAPI);
        });
      }, [review_id]);
      
      return (
        <div class="comments-container">
        <div className="view-comments" onClick={handleClick}>View Comments</div>
        {isShown && (
          <ul className="comments-list">
            {comments.map((comment) => {
                return (
                    <li>"{comment.body}"</li>
                    )
                })}
                <div className="bottom-of-comments" ref={ref}>.</div>
                </ul>
        )}
          </div>
      )}

          
export default Comments;