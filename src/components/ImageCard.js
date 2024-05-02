import React from "react";

export default function ({ images }) {
  return (
    <div className="image-gallery">
      {images.map((imgSrc, index) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={imgSrc}
              // alt="Shoes"
            />
          </figure>
          <div className="card-body"></div>
        </div>
      ))}
    </div>
  );
}
