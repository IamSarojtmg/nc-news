import { Link } from "react-router-dom";
import ViewAllResults from "./ViewAllResults";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";
import Nav from "./Nav";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <ViewAllResults searchParams={searchParams} />
    </>
  );
}
