import { useState } from "react";
import { postComment } from "../src/utils/utils";
import styles from "../post-comments/postComments.module.css";

export default function PostComment({ article_id }) {
  const [commentPosted, setCommentPosted] = useState("");
  const [errHandle, setErrhandle] = useState();
  const [storeComment, setStoreComment] = useState({
    username: "",
    body: "",
  });

  function handleClickBody(event) {
    setStoreComment((previousState) => {
      return { ...previousState, body: event.target.value };
    });
  }

  return (
    <>
      <section className={styles.postComment}>
        <h2>Post comment</h2>
        {errHandle ? (
          <div>{commentPosted}</div>
        ) : (
          <div className={styles.error}>{commentPosted}</div>
        )}
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            postComment(article_id, storeComment)
              .then(() => {
                setCommentPosted(
                  "You comment has been posted, Please check view comment to see it."
                );
                setErrhandle(true);
              })
              .catch((err) => {
                setCommentPosted("Please enter the correct details");
                setErrhandle(false);
              });
            setStoreComment({
              username: "",
              body: "",
            });
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            className={styles.inputName}
            type="text"
            id="name"
            onChange={(event) => {
              setStoreComment((previousState) => {
                return { ...previousState, username: event.target.value };
              });
            }}
            value={storeComment.username}
            required
          ></input>

          <label htmlFor="body">Comment</label>
          <textarea
            className={styles.inputName}
            type="text"
            id="body"
            onChange={handleClickBody}
            value={storeComment.body}
            required
          ></textarea>
          <button className={styles.postBtn}>Post</button>
        </form>
      </section>
    </>
  );
}
