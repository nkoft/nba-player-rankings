import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Rankings Home Page</Link>
      <Link to="/new">Create/Edit</Link>
    </nav>
  );
}

export default Nav;
