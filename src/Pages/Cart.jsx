import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export let Cart = () => {
  let cartData = useSelector(state => state.cart);
  let dispatch = useDispatch()
  let navigate = useNavigate()

  
  let grandTotal = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartData.length === 0) {
    return <h2 className="text-center mt-5">Your Cart is Empty</h2>;
  }

  return (
    <div className="container mt-4">
      {cartData.map(product => (
        <div className="card mb-3" key={product.id}>
          <div className="row g-0 align-items-center">

            
            <div className="col-md-4 text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid p-3"
                style={{ maxHeight: "220px" }}
              />
            </div>

            
            <div className="col-md-8">
              <div className="card-body">
                <h4>{product.title}</h4>
                <p className="text-muted">{product.description}</p>

                <p>
                  Price (1 item): <b>₹ {product.price}</b>
                </p>

                <p>
                  Total Price:{" "}
                  <b className="text-success">
                    ₹ {product.price * product.quantity}
                  </b>
                </p>

                
                <div className="d-flex align-items-center mt-2">
                  <button className="btn btn-danger" onClick={() => dispatch(DECREMENT(product.id))}>−</button>

                  <span className="mx-3 fs-5">
                    {product.quantity}
                  </span>

                  <button className="btn btn-success" onClick={() => dispatch(ADDTOCART(product))}>+</button>
                </div>

                
                <button className="btn btn-outline-danger mt-3" onClick={() => dispatch(REMOVE(product.id))}>Remove Item</button>

                
                <button className="btn btn-outline-primary mt-3 ms-2"onClick={() => navigate("/products")}>Continue Shopping</button>
              </div>
            </div>

          </div>
        </div>
      ))}

      
      <div className="card p-3 mt-4">
        <h3 className="text-end">
          Grand Total: <span className="text-success">₹ {grandTotal}</span>
        </h3>
      </div>
    </div>
  );
};
