import Home from "./components/Home";
import { Route, Routes, useSearchParams } from "react-router-dom";
import ViewAllResults from "./components/ViewAllResults";
import ViewIndividualArticle from "./components/ViewIndividualArticle";
import ViewComments from "./comments/ViewComments";
// import SearchItemForm from "./components/SearchItemForm";
import { useState } from "react";
import Categories from "../categories/categories";
import Nav from "./components/Nav";
function App() {
  const [searchParams, setSearchParams] = useSearchParams();//dont need it here? its not being used other than passing to

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles"
          element={
            <ViewAllResults
              searchParams={searchParams}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={<ViewIndividualArticle />}
        />
        <Route
          path="/articles/:article_id/comments"
          element={<ViewComments />}
        />

        <Route path="/topics" element={<Categories
                searchParams={searchParams}
                setSearchParams={setSearchParams}
        
        />} ></Route>
      </Routes>
    </>
  );
}

export default App;
