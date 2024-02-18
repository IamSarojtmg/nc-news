import { useEffect, useState } from "react";
import { getCategories } from "../src/utils/utils";
import { Link } from "react-router-dom";
import styles from "./categories.module.css";

export default function Categories({ searchParams, setSearchParams }) {
  console.log(searchParams);
  const [viewCategories, setViewCategories] = useState([]);

  function setCategoryQuery(category) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("slug", category); //slug = coding, cooking, football
    setSearchParams(newParams);
  }

  useEffect(() => {
    getCategories()
      .then((res) => {
        setViewCategories(res);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <header className="cont">
        <Link to={"/"}>
          <button className="nav">Home</button>
        </Link>
        <Link to={"/articles"}>
          <button className="nav">View All</button>
        </Link>
        <Link to={"/topics"}>
          <button className="nav">Categories</button>
        </Link>
      </header>
      <div className={styles.cont}>
        {viewCategories.map((category) => (
          <div key={category.slug}>
            <Link
              to={`/articles?topic=${category.slug}`}
              onClick={() => {
                setCategoryQuery(category.slug);
              }}
            >
              <nav className={styles.navCont}>
                <button className={styles.nav}>{category.slug}</button>
              </nav>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
