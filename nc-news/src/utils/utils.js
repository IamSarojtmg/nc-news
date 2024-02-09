import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://backend-project-vpy0.onrender.com/api",
});

export const getAllArticles = (slug) => {
  let url = null;
  if (slug) {
    url = `/articles/${slug}`;
  } else {
    url = "/articles";
  }
  return ncNewsAPI.get(url).then((response) => {
    return response.data;
  });
};

export const getArticleByID = (article_id) => {
  return ncNewsAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNewsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const voteArticle = (article_id, votesCount) => {
  return ncNewsAPI.patch(`/articles/${article_id}`, votesCount).then((res) => {
    return res.data;
  });
};

export const postComment = (article_id, comment) => {
  return ncNewsAPI
    .post(`/articles/${article_id}/comments`, comment)
    .then((res) => {
      return res.data;
    });
};

export const getCategories = () => {
  return ncNewsAPI.get("/topics").then((res) => {
    return res.data;
  });
};
