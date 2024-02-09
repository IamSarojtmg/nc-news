import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";
import { Link } from "react-router-dom";

export default function SearchItemForm({ searchParams, setSearchParams }) {
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
      .catch((err) => {

      });
  }, []);

  return (
    <>
      <form action="">
              <label>Choose topic</label>
        {viewCategories.map((category) => (
            <div key={category.slug}>
              <Link
                to={`/articles?topic=${category.slug}`}
                onClick={() => {
                  setCategoryQuery(category.slug);
                }}
              >
                <input
                  type="radio"
                  id={category.slug}
                  name="category"
                  value={category.slug}
                />
                <label htmlFor={category.slug}>{category.slug}</label>
              </Link>
            </div>
          ))}
      </form>
    </>
  );
}
