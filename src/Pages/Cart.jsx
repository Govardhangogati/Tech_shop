import { useDispatch, useSelector } from "react-redux";
import { ADDTOCART, DECREMENT, REMOVE } from "../REDUX/cart/CartSlice";

export const Cart = () => {
  let cartData = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let totalOriginalPrice=cartData.reduce(
    (acc,val)=>acc+val.originalPrice*val.quantity,0
  )

  let totalFinalPrice=cartData.reduce(
    (acc,val)=>acc+val.finalPrice*val.quantity,0
  )

  let discount=totalOriginalPrice-totalFinalPrice


  if(cartData.length===0){
    return(
      <div className="text-light text-center ">
       <i class="fa-solid fa-cart-plus" style={{fontSize:"250px", margin:"100px",color:"orangered"}}></i>
      <h1>Cart is empty</h1>
      </div>
    )

  }

  return (
    <>
      <div className="container mt-5 d-flex">
       
        <div className="cart-scroll">
          {cartData.map((product) => (
            <div
              key={product.id}
              className="product-container bg-dark col-6 mb-3"
              style={{ color: "lightgray" }}
            >
              <div className="singleProduct d-flex justify-content-between">
                <div className="image m-3">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    width="130px"
                  />
                </div>

                <div className="details m-3">
                  <b>
                    {product.title} {product.info}
                  </b>

                  <div className="price d-flex mt-3">
                    <h4 className="m-2 text-light">
                      ₹{product.finalPrice}
                    </h4>
                    <del>
                      <h4 className="m-2 text-secondary">
                        ₹{product.originalPrice}
                      </h4>
                    </del>
                  </div>

                  <div className="btns d-flex mt-3">
                    <button onClick={()=>dispatch(DECREMENT(product.id))} style={{backgroundColor:"gray",color:"white",fontWeight:"bold",fontSize:"20px"}}>-</button>
                    <button style={{backgroundColor:"black",color:"orangered",fontWeight:"bold",fontSize:"20px"}}>{product.quantity}</button>
                    <button onClick={()=>dispatch(ADDTOCART(product))} style={{backgroundColor:"gray",color:"white",fontWeight:"bold",fontSize:"20px"}}>+</button>
                  </div>
                </div>

                <div className="delete m-3">
                  <i style={{cursor:"pointer"}} onClick={()=>dispatch(REMOVE(product.id))} className="fa-solid fa-trash-can"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cartDetails ms-5">
          <h5><b>Cart Summary ({cartData.length} items)</b></h5>
          <div className="price">
            <div className="original">
              <p>Original Price</p>
              <p>{totalOriginalPrice}</p>
            </div>
            <div className="discount">
              <p>Discount</p>
              <p>{discount}</p>
            </div>
            <div className="delivery">
              <p>Delivery</p>
              <p>Free</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
