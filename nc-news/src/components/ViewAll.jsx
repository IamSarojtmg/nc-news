import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <Link to={"/"}>
          <button className="home-btn">Home</button>
        </Link>
        <Link to={"/articles"}>
          <button>View All</button>
        </Link>
        <h1>Welcome to NC news</h1>
</header>

    </>
  );
}
