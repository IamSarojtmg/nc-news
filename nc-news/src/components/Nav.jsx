import { Link } from "react-router-dom";
import Categories from "../../categories/categories";

export default function Nav() {
  return (
    <nav>
      <header className="nav-cont">
        <div className="logo">
          <h1>Northern</h1>
          <h2>News</h2>
        </div>
        <ul className="links-cont">
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
