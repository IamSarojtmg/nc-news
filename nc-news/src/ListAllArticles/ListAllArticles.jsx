import { Link } from "react-router-dom";
import styles from './listAllArticles.module.css'

export default function ListAllArticles({ articlesResult }) {
  return (
    <>
      {articlesResult.article.map((articles) => {
        console.log(articles);
        return (
          <section className={styles.cards} key={articles.article_id}>
            <p>Author: {articles.author}</p>
            <p>Title:{articles.title}</p>
            <img src={articles.article_img_url} ></img>
            <p>Topic: {articles.topic}</p>
            <p> ❤️ {articles.votes}</p>
            <Link to={`/articles/${articles.article_id}`}>
              <button>Read article</button>
            </Link>
          </section>
        );
      })}
    </>
  );
}
