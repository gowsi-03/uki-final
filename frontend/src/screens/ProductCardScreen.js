/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
import placeHolder from "../no-image-available.webp";

const ProductScreen = ({ currentItems }) => {
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  return (
    <div className="row g-3">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card text-center border-0 shadow">
              <Link to={`/product/${item._id}`}>
                <img
                  src={item.image ? item.image.imagePath : placeHolder}
                  alt="product image"
                  className="img-card-top img-fluid"
                />{" "}
              </Link>
              <div className="card-body">
                <p className="card-text">
                  <Link to={`/product/${item._id}`}>
                    <span className="fw-bold fs-6">{item.name}</span>
                  </Link>{" "}
                  <br />
                </p>
                <div className="btn-group">
                  <p>
                    <span className="fw-lighter fs-6">
                      Rs&nbsp;{addDecimal(item.price)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductScreen;
