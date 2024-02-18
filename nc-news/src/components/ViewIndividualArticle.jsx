import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleByID } from "../utils/utils";
import ArticleCard from "./ArticleCards";

export default function ViewIndividualArticle() {
  const [viewSingleArticle, setViewSingleArticle] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setIsloading(true);
    getArticleByID(article_id).then(({ article }) => {
      setViewSingleArticle(article);
      setIsloading(false);
    });
  }, [article_id]);

  return (
    <>
      {/* {isLoading ? <div>...Loading</div> : null} */}
      <ArticleCard
        article_id={article_id}
        viewSingleArticle={viewSingleArticle}
        isLoading={isLoading}
      />
    </>
  );
}
