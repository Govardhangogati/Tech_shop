// CenterSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import productsData from "../utils/productsData";
import { Link } from "react-router-dom";

export default function CenterSlider() {
  return (
    <div>
      {/* Title */}
      <div className="text-center text-white my-5">
        <h1 className="text-2xl font-bold">Featured Products</h1>
      </div>

      {/* Slider */}
      <div className="py-5 bg-black">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, // only shows limited dots at a time
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          style={{ padding: "40px 10px" }}
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              {({ isActive }) => (

              <Link> 
                <div
                  className="transition-transform duration-300 text-center p-2"
                  style={{
                    transform: isActive ? "scale(1.1)" : "scale(0.9)",
                    backgroundColor: "#000",
                    borderRadius: "10px",
                    opacity: isActive ? 1 : 0.6, // faded side slides
                  }}
                >
                  {/* Product Title */}
                  <h3
                    className={`mt-2 font-bold ${
                      isActive ? "text-white " : "text-light"
                    }`}
                    style={{ lineHeight: "1.2", minHeight: "2.5rem" }}
                  >
                    {product.title}
                  </h3>

                  {/* Product Image */}
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="mx-auto object-contain"
                    style={{ maxHeight: isActive ? "170px" : "120px" }}
                  />

                  {/* Price */}
                  <div className="flex justify-center items-center gap-3 mt-2 text-light">
                    <span
                      className={`font-bold text-sm bg-success  ${
                        isActive ? "text-red-500" : "text-red-400"
                      }`}
                    >
                      ₹{product.finalPrice}
                    </span>
                    <span
                      className={`font-bold line-through text-xs m-3 text-light ${
                        isActive ? "text-light" : "text-light"
                      }`}
                    >
                      <del>₹{product.originalPrice}</del>
                    </span>
                  </div>
                </div>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Dots CSS */}
      <style>
        {`
          /* All bullets red */
          .swiper-pagination-bullet {
            background-color: #ff4d4f !important; /* danger red */
            opacity: 0.5;
          }

          /* Active bullet brighter */
          .swiper-pagination-bullet-active {
            background-color: #ff4d4f !important;
            opacity: 1;
          }

          /* Limit visible bullets width */
          .swiper-pagination {
            max-width: calc(5 * 14px + 4 * 6px); /* 5 dots + 4 gaps */
            overflow: hidden;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
}
