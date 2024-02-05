import axios from "axios";

const ncNewsAPI = axios.create({
    baseURL : 'https://backend-project-vpy0.onrender.com/api'
})

export const getAllArticles = () => {
    return ncNewsAPI.get('/articles').then((response) => {
        return response.data
    })
}