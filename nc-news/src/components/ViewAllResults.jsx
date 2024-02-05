import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/utils";
import ListAllArticles from "./ListAllArticles";

export default function ViewAllResults() {
    const [isResult, setIsResult] = useState(false);
    const [articlesResult, setArticlesResult] = useState([])

  useEffect(() => {
    getAllArticles().then((response) => {
      setIsResult(true);
      setArticlesResult(response)
    });
  },[]);

  if (isResult)
    return (
      <>
            <section>
                <ListAllArticles articlesResult={articlesResult} />
        </section>
      </>
    );
}
