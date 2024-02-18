import { Link } from "react-router-dom";

export default function Home() {
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
      <h1>Welcome to NC news</h1>
    </>
  );
}
