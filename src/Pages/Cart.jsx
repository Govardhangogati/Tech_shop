import { useDispatch, useSelector } from "react-redux";
import { ADDTOCART, DECREMENT, REMOVE } from "../REDUX/cart/CartSlice";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let navigate=useNavigate()

  const totalOriginalPrice = cartData.reduce(
    (acc, val) => acc + val.originalPrice * val.quantity,
    0
  );

  const totalFinalPrice = cartData.reduce(
    (acc, val) => acc + val.finalPrice * val.quantity,
    0
  );

  const discount = totalOriginalPrice - totalFinalPrice;

  if (cartData.length === 0) {
    return (
      <div className="text-light text-center mt-5">
        <i
          className="fa-solid fa-cart-plus"
          style={{ fontSize: "200px", color: "orangered" }}
        ></i>
        <h1>Your Cart is empty</h1>
        <button onClick={()=>navigate('/')} style={{backgroundColor:"orangered",border:"none",width:"230px",color:"white",padding:"10px",fontSize:"20px",borderRadius:'10px'}}>
          Start Shopping
        </button>


      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        
        {/* LEFT : CART ITEMS */}
        <div className="col-md-8 cart-scroll">
          {cartData.map((product) => (
            <div
              key={product.id}
              className="product-container bg-dark mb-3 p-3"
              style={{ color: "lightgray" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  width="120"
                />

                <div className="ms-3 flex-grow-1">
                  <b>{product.title}</b>
                  <p className="mb-1">{product.info}</p>

                  <div className="d-flex align-items-center">
                    <h5 className="text-light me-3">
                      ₹{product.finalPrice}
                    </h5>
                    <del className="text-secondary">
                      ₹{product.originalPrice}
                    </del>
                  </div>

                  <div className="mt-2">
                    <button
                      onClick={() => dispatch(DECREMENT(product.id))}
                      className="btn btn-secondary btn-sm" style={{border:"1px solid"}}
                    >
                      -
                    </button>

                    <span className="mx-2 text-danger fw-bold" >
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(ADDTOCART(product))}
                      className="btn btn-secondary btn-sm" style={{border:"1px solid"}}
                    >
                      +
                    </button>
                  </div>
                </div>

                <i
                  className="fa-solid fa-trash-can text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(REMOVE(product.id))}
                ></i>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT : CART SUMMARY */}
        <div className="col-md-4">
          <div className=" text-light p-4 sticky-top">
            <h5 className="mb-5"><b>Order Summary ({cartData.length} items)</b></h5>
            

            <div className="d-flex justify-content-between ">
              <span style={{color:"lightgray"}}>Original Price</span>
              <span>₹{totalOriginalPrice}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span style={{color:"lightgray"}}>Discount</span>
              <span className="text-success">-₹{discount}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span style={{color:"lightgray"}}>Delivery</span>
              <span className="text-success">Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total Price</span>
              <span>₹{totalFinalPrice}</span>
            </div>

            <button className="btn  w-100 mt-3 fw-bold" style={{backgroundColor:"orangered"}}>
              Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
