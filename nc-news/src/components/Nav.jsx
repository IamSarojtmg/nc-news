import { Link } from "react-router-dom";
import Categories from "../../categories/categories";

export default function Nav() {
  return (
    <nav>
      <header>
        <div className="logo">
          <h1>Northern</h1>
          <h2>News</h2>
        </div>
        <ul>
          <li>
            <Link to={"/"} className="links">
              Home
            </Link>
          </li>

          <Categories />
        </ul>
      </header>
    </nav>
  );
}
