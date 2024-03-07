import { Link } from "react-router-dom";
import styles from "./listAllArticles.module.css";

export default function ListAllArticles({ articlesResult }) {
  return (
    <main className={styles.mainCont}>
      <section className={styles.gridCont}>
        {articlesResult.article.map((articles) => {
          return (
            <Link
              className={styles.links}
              to={`/articles/${articles.article_id}`}
            >
              <section className={styles.cards} key={articles.article_id}>
                <h3>{articles.author}</h3>
                <h2>{articles.title}</h2>
                <img className={styles.image} src={articles.article_img_url}></img>
                <div className={styles.footer}>
                  <p> {articles.topic}</p>
                  <p> ❤️ {articles.votes}</p>
                </div>
              </section>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
