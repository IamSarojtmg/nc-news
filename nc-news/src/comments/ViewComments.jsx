import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/utils";
import styles from "./ViewComments.module.css";

export default function ViewComments() {
  const [allComments, setAllComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ article }) => {
      setAllComments(article);
    });
  }, [article_id]);
  return (
    <>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <h2>Comments</h2>
      {allComments.map((comments) => {
        return (
          <div className={styles.comments} key={comments.comment_id}>
            <p>Author: {comments.author}</p>
            <p>Comment : {comments.body}</p>
            <p>Votes: {comments.votes}</p>
          </div>
        );
      })}
    </>
  );
}
