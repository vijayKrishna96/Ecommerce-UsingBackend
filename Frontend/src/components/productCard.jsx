import React from "react";
import "../components/productCard.css";

function ProductCard(props) {
  const product = props.product;
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4">
        <div className="card h-100 text-center p-4 border-0 shadow p-3 mb-5 bg-white rounded">
          <img
            src={product.mainImage}
            className="card-img-top object-fit-fill"
            alt=""
            height="450px"
          />
          <div className="card-body">
            <h5 className="card-title mb-0">{product.title}</h5>
            <p className="card-text lead fw-bold">${product.price}</p>
            <a href="#" className="btn btn-outline-primary mt-3 w-75">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
