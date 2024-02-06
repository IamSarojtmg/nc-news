import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleByID } from "../utils/utils";

export default function ViewIndividualArticle() {
  const [viewSingleArticle, setViewSingleArticle] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleByID(article_id).then(({ article }) => {
      setViewSingleArticle(article);
    });
  }, [article_id]);

  return (
    <>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <h2>{viewSingleArticle.title}</h2>
      <p>Author: {viewSingleArticle.author}</p>
      <p>Article ID: {viewSingleArticle.article_id}</p>
      <p>Description: {viewSingleArticle.body}</p>
      <p>Topic: {viewSingleArticle.topic}</p>
      <p>
        Created At: {new Date(viewSingleArticle.created_at).toLocaleString()}
      </p>
      <p>Votes: {viewSingleArticle.votes}</p>
      <img src={viewSingleArticle.article_img_url} alt="" />
    </>
  );
}
