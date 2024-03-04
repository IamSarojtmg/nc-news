import { Link } from "react-router-dom";
import ViewAllResults from "./ViewAllResults";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <nav>
        <header>
          <div className="logo">
            <h1>NorthCoders</h1>
            <h2>News</h2>
          </div>
          <ul>
            <li>
              <Link to={"/"} className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/articles"} className="links">
                ViewAll
              </Link>
            </li>
            <li>
              <Link to={"/topics"} className="links">
                Categories
              </Link>
            </li>
          </ul>
        </header>
      </nav>
      <ViewAllResults searchParams={searchParams} />
    </>
  );
}
