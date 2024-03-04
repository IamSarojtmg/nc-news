import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/utils";
import ListAllArticles from "../ListAllArticles/ListAllArticles";
import { Link } from "react-router-dom";

export default function ViewAllResults({ searchParams }) {
  const [isResult, setIsResult] = useState(false);
  const [articlesResult, setArticlesResult] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const slug = searchParams.get("topic");

    getAllArticles(slug).then((response) => {
      setIsResult(true);
      setArticlesResult(response);
      setisLoading(false);
    });
  }, [searchParams]);

  if(isLoading) return <div>...Loading</div>

  if (isResult)
    return (
      <>

        <section>
          <ListAllArticles articlesResult={articlesResult} />
        </section>
      </>
    );
}

// same as searchresult.jsx
