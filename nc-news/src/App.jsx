import { useState } from "react";
import ViewAll from "./components/ViewAll";
import { Route, Routes } from "react-router-dom";
import ViewAllResults from "./components/ViewAllResults";

// import './App.css'

function App() {
  return (
    <>
      <ViewAll />

      <Routes>
        <Route path="/articles" element={<ViewAllResults />} />
      </Routes>
    </>
  );
}

export default App;
