import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar  px-3 d-flex justify-content-between">
      
     
      <Link to="/" className="navbar-brand mb-0 h1 text-light b" style={{fontSize:"30px",fontWeight:"bold"}}>
        Tech-Shop
      </Link>

     
      <div className="d-flex gap-4">
        <Link to="/search" className="text-light">
          <i className="fas fa-search"></i>
        </Link>

        <Link to="/cart" className="text-light">
          <i className="fas fa-shopping-cart"></i>
        </Link>

        <Link to="/signin" className="text-light">
          <i className="fas fa-user"></i>
        </Link>
      </div>

    </nav>
  );
};
