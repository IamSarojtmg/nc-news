import Home from "./components/ViewAll";
import { Route, Routes, useSearchParams } from "react-router-dom";
import ViewAllResults from "./components/ViewAllResults";
import ViewIndividualArticle from "./components/ViewIndividualArticle";
import ViewComments from "./comments/ViewComments";
// import SearchItemForm from "./components/SearchItemForm";
import { useState } from "react";
import Categories from "../categories/categories";
// FIND A WAY TO MOVE THE THREE CATEGORIES INTO ANOTHER PAGE(/TOPICS)
function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [marketPlaceSearchResults, setMarketPlaceSearchResults] = useState([]); // can be in child component?

  return (
    <>
      {/* <SearchItemForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      /> */}
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
