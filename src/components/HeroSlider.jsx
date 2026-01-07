import { useEffect, useState } from "react";
import productsData from "../utils/productsData";

export default function HeroSlider() {
  const heroProducts = productsData.filter(
    (item) => item.tag === "hero-product" && item.heroImage
  );

  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroProducts.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [heroProducts.length]);

  const product = heroProducts[index];

  return (
    <div className="hero-bg py-5 ">
      <div className="container ">
        <div className="row align-items-center">
          
          
          <div className="col-md-6">
            

            <p className="fw-bold text-light" style={{fontSize:'20px'}}>{product.title}</p>

            <h1 className="text-light "style={{fontSize:'50px'}}>
              {product.tagline}
            </h1>

            <div className="text-light">
                <p>{product.info}</p>
            </div>

            <div className="mb-3">
              <span className="fs-4 fw-bold text-light">
                ₹{product.finalPrice}
              </span>
              <del className="text-light ms-2">
                ₹{product.originalPrice}
              </del>
            </div>

            <button className="btn btn-danger me-2">
              Shop Now
            </button>
            
          </div>

          
          <div className="col-md-6 text-center">
            <img
              src={product.heroImage}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "420px" }}
            />
          </div>

        </div>

        {/* DOTS */}
        <div className="d-flex justify-content-center mt-4">
          {heroProducts.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                margin: "0 6px",
                cursor: "pointer",
                backgroundColor: index === i ? "#f60c0cff" : "#ccc",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
