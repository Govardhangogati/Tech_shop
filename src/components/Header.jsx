import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productsData from "../utils/productsData"; // make sure path is correct

export const Header = () => {
  const cartData = useSelector((state) => state.cart);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  // filter products based on search input
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <nav className="navbar px-3 d-flex align-items-between position-relative" style={{ backgroundColor: "#000" }}>
      
      {/* LOGO */}
      <Link
        to="/"
        className="navbar-brand mb-0 h1 text-light"
        style={{ fontSize: "30px", fontWeight: "bold" }}
      >
        Tech-Shop
      </Link>

      {/* SEARCH BOX */}
      {showSearch && (
        <div className=" flex-grow position-relative" style={{marginLeft:'400px'}}>
          <input
            type="search"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: "350px",
              height: "40px",
              backgroundColor: "black",
              border: "1px solid white",
              color: "white",
              padding: "0 10px",
            }}
          />

          {/* SEARCH SUGGESTIONS */}
          {searchText && filteredProducts.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                width: "100%",
                backgroundColor: "black",
                border: "1px solid white",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 1000,
              }}
            >
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`} // navigate to /product-details/:id
                  style={{
                    display: "block",
                    padding: "8px 10px",
                    borderBottom: "1px solid gray",
                    color: "white",
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    setShowSearch(false); 
                    setSearchText("");   
                  }}
                >
                  {product.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ICONS */}
      <div className="d-flex gap-4 align-items-center ms-auto">
        <i
          className="fas fa-search text-light"
          style={{ cursor: "pointer" }}
          onClick={() => setShowSearch(!showSearch)}
        ></i>

        <Link to="/cart" className="text-light" style={{ textDecoration: "none" }}>
          <i className="fas fa-shopping-cart"></i>
          <sup className="bg-danger p-1" style={{ borderRadius: "50%" }}>
            {cartData.length}
          </sup>
        </Link>

        <Link to="/signin" className="text-light">
          <i className="fas fa-user"></i>
        </Link>
      </div>

    </nav>
  );
};
