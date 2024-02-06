import { Link } from "react-router-dom";
import styles from './listAllArticles.module.css'

export default function ListAllArticles({ articlesResult }) {
  return (
    <>
      {articlesResult.article.map((articles) => {
        return (
          <div className={styles.cards} key={articles.article_id}>
            <p>Author: {articles.author}</p>
            <p>Title:{articles.title}</p>
            <p>Topic: {articles.topic}</p>
            <Link to={`/articles/${articles.article_id}`}>
              <button>Read article</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
