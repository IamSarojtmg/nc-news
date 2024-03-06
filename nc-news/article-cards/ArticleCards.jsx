import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { voteArticle } from "../src/utils/utils";
import PostComment from "../post-comments/postComment";
import styles from "../article-cards/ArticleCards.module.css";

export default function ArticleCard({
  article_id,
  viewSingleArticle,
  isLoading,
}) {
  const [votesCount, setVotesCount] = useState(0);
  const [error, setError] = useState("");

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <>
      <article className={styles.mainCont}>
        <section className={styles.cont}>
          <h2 className={styles.articleHeading}>{viewSingleArticle.title}</h2>
          <hr />
  <Link to={`/articles/${viewSingleArticle.article_id}/comments`}>
    <button>View Comments</button>
  
  </Link>

          <div className={styles.artlInfo}>
            <p>{viewSingleArticle.author}</p>
            <p>{viewSingleArticle.topic}</p>
            <p>{new Date(viewSingleArticle.created_at).toLocaleString()}</p>
          </div>

          
            <img className={styles.image} src={viewSingleArticle.article_img_url} alt="" />


          <div>
            <p>{viewSingleArticle.body}</p>
            <p>❤️  {viewSingleArticle.votes + votesCount}</p>
            <div className={styles.btn}>

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
          </div>
          <div>{error}</div>

            
            <PostComment article_id={article_id} />


        </section>
      </article>
    </>
  );
}

{
  /* <div>
  {isLoading?<p>...Loading</p>:null}
</div> */
}
{
  /* <header className="cont">
  <Link to={"/"}>
    <button className="nav">Home</button>
  </Link>
  <Link to={"/articles"}>
    <button className="nav">View All</button>
  </Link>
  <Link to={"/topics"}><button className="nav">Categories</button></Link>
</header> */
}
