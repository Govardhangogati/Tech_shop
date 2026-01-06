import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mb-0 h1 text-light">
        Tech-Shop
      </Link>
    </nav>
  );
};
