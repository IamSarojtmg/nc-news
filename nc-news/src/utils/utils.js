import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://backend-project-vpy0.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNewsAPI.get("/articles").then((response) => {
    return response.data;
  });
};

export const getArticleByID = (article_id) => {
  return ncNewsAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};
