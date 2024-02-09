import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/utils";
import ListAllArticles from "../ListAllArticles/ListAllArticles";
import { Link } from "react-router-dom";

export default function ViewAllResults({marketPlaceSearchResults,setMarketPlaceSearchResults,searchParams}) {
  const [isResult, setIsResult] = useState(false);
  const [articlesResult, setArticlesResult] = useState([]);

  useEffect(() => {
    const slug = searchParams.get('topic')

    getAllArticles(slug).then((response) => {

      setIsResult(true);
      setArticlesResult(response);
    });
  }, [searchParams]);




  if (isResult)
    return (
      <>
        <div>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
        </div>
        <section>
          <ListAllArticles articlesResult={articlesResult} />
        </section>
      </>
    );
}

// same as searchresult.jsx
