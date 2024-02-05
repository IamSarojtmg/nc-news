export default function ListAllArticles({ articlesResult }) {
  return (
    <>
      {articlesResult.article.map((articles) => {
        console.log(articles);

        return (
          <div key={articles.article_id}>
            <p>ID: {articles.article_id}</p>
            <p>Author: {articles.author}</p>
            <p>Comment Counts:{articles.comment_count}</p>
            <p>Created At: {articles.created_at}</p>
            <p>Title:{articles.title}</p>
            <p>Topic: {articles.topic}</p>
            <p> Votes:{articles.votes}</p>
            <img src={articles.article_img_url} alt={articles.title} />
          </div>
        );
      })}
    </>
  );
}
