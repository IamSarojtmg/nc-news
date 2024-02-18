import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { voteArticle } from "../utils/utils";
import PostComment from "./postComment";

export default function ArticleCard({ article_id, viewSingleArticle,isLoading }) {
  const [votesCount, setVotesCount] = useState(0);
  const [error, setError] = useState("");

  if (isLoading) {
    return <div>...loading</div>
  }
  
  return (
    <>
      {/* <div>
        {isLoading?<p>...Loading</p>:null}
      </div> */}
      <header className="cont">
        <Link to={"/"}>
          <button className="nav">Home</button>
        </Link>
        <Link to={"/articles"}>
          <button className="nav">View All</button>
        </Link>
        <Link to={"/topics"}><button className="nav">Categories</button></Link>
</header>
      <h2>{viewSingleArticle.title}</h2>
      <section>
        <p>Author: {viewSingleArticle.author}</p>
        <p>Description: {viewSingleArticle.body}</p>
        <p>Topic: {viewSingleArticle.topic}</p>
        <p>
          Created At: {new Date(viewSingleArticle.created_at).toLocaleString()}
        </p>
        <div>
          <p>Votes: {viewSingleArticle.votes + votesCount}</p>
          <button
            onClick={() => {
              setVotesCount((currentVoteCount) => {
                return currentVoteCount + 1;
              });
              voteArticle(article_id, {
                inc_votes: 1,
              }).catch((err) => {
                setError(err.message);
              });
            }}
          >
            👍
          </button>
          <button
            onClick={() => {
              setVotesCount((currentVoteCount) => {
                return currentVoteCount - 1;
              });
              voteArticle(article_id, {
                inc_votes: -1,
              }).catch((err) => {
                setError(err.message);
              });
            }}
          >
            👎
          </button>
        </div>
        <div>{error}</div>
        <img src={viewSingleArticle.article_img_url} alt="" />
        <div>
          <Link to={`/articles/${viewSingleArticle.article_id}/comments`}>
            <button>View Comments</button>
          </Link>

          <PostComment article_id={article_id} />
        </div>
      </section>
    </>
  );
}
