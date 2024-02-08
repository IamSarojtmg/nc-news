import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleByID } from "../utils/utils";
import ArticleCard from "./ArticleCards";

export default function ViewIndividualArticle() {
  const [viewSingleArticle, setViewSingleArticle] = useState({});

  const { article_id } = useParams();

  useEffect(() => {
    getArticleByID(article_id).then(({ article }) => {
      setViewSingleArticle(article);
    });
  }, [article_id]);

  return (
    <>
      <ArticleCard
        article_id={article_id}
        viewSingleArticle={viewSingleArticle}
      />
    </>
  );
}
