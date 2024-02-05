import { Link } from "react-router-dom";

export default function ViewAll() {
  return (
      <>
          <div>
              
      <Link to={"/articles"}>
        <button>View All</button>
      </Link>
          </div>
    </>
  );
}
