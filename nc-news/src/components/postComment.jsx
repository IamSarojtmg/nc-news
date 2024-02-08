import { useState } from "react";
import { postComment } from "../utils/utils";

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
      <h2>Post comment</h2>
      <form
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

        <label htmlFor="body">Body</label>
        <input
          type="text"
          id="body"
          onChange={handleClickBody}
          value={storeComment.body}
          required
        ></input>
        <button>Post</button>
      </form>
      {errHandle ? <div>{commentPosted}</div> : <div>{commentPosted}</div>}
    </>
  );
}
