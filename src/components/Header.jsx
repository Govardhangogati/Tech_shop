import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productsData from "../utils/productsData";
import AuthModal from "../Authentication/AuthModal";


export const Header = () => {
  const cartData = useSelector((state) => state.cart);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [authType, setAuthType] = useState(null); // login | signup

  const filteredProducts = productsData.filter((p) =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <nav className="navbar px-3 position-relative" style={{ background: "#000" }}>
        <Link to="/" className="navbar-brand text-light fw-bold fs-3">
          Tech-Shop
        </Link>

        {showSearch && (
          <div className="position-relative" style={{ marginLeft: "400px" }}>
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              style={{
                width: "350px",
                height: "40px",
                background: "black",
                border: "1px solid white",
                color: "white",
              }}
            />

            {searchText && (
              <div style={{
                position: "absolute",
                top: "45px",
                width: "100%",
                background: "black",
                border: "1px solid white",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 1000,
              }}>
                {filteredProducts.map(p => (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    className="d-block text-light p-2"
                    onClick={() => {
                      setShowSearch(false);
                      setSearchText("");
                    }}
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="d-flex gap-4 align-items-center ms-auto position-relative">
          <i className="fas fa-search text-light" onClick={() => setShowSearch(!showSearch)} />

          <Link to="/cart" className="text-light" style={{textDecoration:"none"}}>
            <i className="fas fa-shopping-cart"></i>
            <sup className="bg-danger p-1 rounded-circle">{cartData.length}</sup>
          </Link>

          {/* USER ICON */}
          <i
            className="fas fa-user text-light"
            style={{ cursor: "pointer" }}
            onClick={() => setShowAuthBox(!showAuthBox)}
          ></i>

          {/* SMALL BOX UNDER ICON */}
          {showAuthBox && (
            <div style={{
              position: "absolute",
              top: "40px",
              right: "0",
              background: "black",
              border: "1px solid white",
              padding: "20px",
              zIndex: 1000,
              width:"270px",
              height:"200px",
              color:"white",
              
            }}>
              <h6><b>Hello!</b></h6>
              <p style={{fontSize:'14px'}}>Access Account and manage orders</p>
              
              <button style={{backgroundColor:"black",color:'white',padding:"10px",border:"1px solid"}} onClick={() => { setAuthType("login"); setShowAuthBox(false); }}>
                Login/SignUp
              </button>
              <hr />
              <p>Please Login</p>
            </div>
          )}
        </div>
      </nav>

      {/* POPUP MODAL */}
      {authType && (
        <AuthModal type={authType} close={() => setAuthType(null)} />
      )}
    </>
  );
};
