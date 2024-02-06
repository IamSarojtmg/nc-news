import Home from "./components/ViewAll";
import { Route, Routes } from "react-router-dom";
import ViewAllResults from "./components/ViewAllResults";
import ViewIndividualArticle from "./components/ViewIndividualArticle";
import ViewComments from "./comments/ViewComments";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ViewAllResults />} />
        <Route
          path="/articles/:article_id"
          element={<ViewIndividualArticle />}
        />
        <Route path="/articles/:article_id/comments" element={<ViewComments/> } />
      </Routes>
    </>
  );
}

export default App;
