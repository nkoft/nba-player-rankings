import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>NBA Player Rankings</h1>
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Nav;
