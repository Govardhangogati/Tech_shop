import { useState } from "react";
import productsData from "../utils/productsData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../REDUX/cart/CartSlice";

export const Products = () => {
  
  let [clickedButtons, setClickedButtons] = useState({});

  let [browseProducts,setBrowseProducts]=useState(false)

  let [selectedCategory,setSelectedCategory]=useState("All")

  let categories=["All",...new Set(productsData.map(p=>p.category))]

  let dispatch=useDispatch()

  let viewProducts=browseProducts?productsData:selectedCategory==="All"? productsData.slice(0,11):productsData.filter(p=>p.category===selectedCategory)

  let handleClick = (product) => {
    setClickedButtons((prev) => ({
      ...prev,
      [product.id]: true,
    }));
    dispatch(ADDTOCART(product))
  };

  return (

    <>

    <div className="text-light d-flex justify-content-center mt-5">
      <h1 style={{fontWeight:'bold'}}>Top Products</h1>
    </div>


    <div className="container">

      <div className="row d-flex justify-content-center m-5">
        {
          categories.map(cat=>(
            <div className="col-1 m-2" ><button onClick={()=>setSelectedCategory(cat)} style={{width:"100px",
              backgroundColor:selectedCategory==cat?"orangered":"black",
              color:"white",
              border:"none",
              padding:'10px',
              borderRadius:"5px",
              
              
            }}>{cat}</button></div>
          ))
        }
      </div>

      <div className="row">
        {viewProducts.map((product) => {
          let isClicked = clickedButtons[product.id]; 

          return (
            <div className="col-3" key={product.id}>
              <div className="card m-3 " style={{height:"490px",backgroundColor:"black",border:"1px solid white"}}>
                
                <Link to={`/products/${product.id}`}>
                  <div className="d-flex justify-content-center bg-dark p-3">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      style={{ width: "200px" }}
                    />
                </div>
                </Link>
                <div className="info p-3" style={{ backgroundColor: "black" }}>
                  
                  <div style={{ fontSize: "12px", color: "orangered" }}>
                    {Array.from({ length: product.rateCount }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>

                  
                  <h5 className="text-light">{product.title}</h5>

                
                  <p style={{ color: "rgba(245, 245, 245, 0.6)" }}>{product.info}</p>

                  <hr style={{ border: "1px solid #ccc" }} />

                  
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <div className="finalprice text-light" style={{ fontSize: "25px" }}>
                      <b>₹{product.finalPrice}</b>
                    </div>
                    <div
                      className="originalprice"
                      style={{ fontSize: "25px", color: "rgba(245,245,245,0.6)" }}
                    >
                      <del>
                        <b>₹{product.originalPrice}</b>
                      </del>
                    </div>
                  </div>

                  
                  <button
                    onClick={() => handleClick(product)}
                    style={{
                      marginTop: "10px",
                      width: "100%",
                      padding: "10px",
                      backgroundColor: isClicked ? "green" : "orangered",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {isClicked ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {!browseProducts && (
          <div className="col-3">
            <div
              className="card m-3 d-flex justify-content-center align-items-center"
              style={{
                height: "490px",
                minHeight: "300px",
                cursor: "pointer",
                backgroundColor: "black",
                color: "whitesmoke",
                border:"1px solid white",
                fontSize: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign:'center'
              }}
              onClick={() => setBrowseProducts(true)}
            >
              Browse All Products➜
            </div>
          </div>
        )}
      </div>
      
    </div>
  </>
  );
};
