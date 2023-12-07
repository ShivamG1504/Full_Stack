import React, { useState } from "react";
import { product } from "../Product_Data";
import { Link } from "react-router-dom";

const Product = () => {
  console.log(product);

  const [products, setProducts] = useState(product);

  const filterMethod = (category) => {
    setProducts(product.filter((data) => data.category == category));
  };
  

  return (
    <>
      <div className="container d-flex justify-content-center sticky-top bg-light">
        <button
          onClick={() => setProducts(product)}
          className="btn btn-info mx-3"
        >
          Home
        </button>
        <button
          onClick={() => filterMethod("mobile")}
          className="btn btn-primary mx-3"
        >
          Mobile
        </button>
        <button
          onClick={() => filterMethod("laptop")}
          className="btn btn-warning mx-3"
        >
          Laptop
        </button>
        <button
          onClick={() => filterMethod("Smart watch")}
          className="btn btn-danger mx-3"
        >
          SmartWatch
        </button>
        <button
          onClick={() => filterMethod("Speeker")}
          className="btn btn-secondary mx-3"
        >
          Speeker
        </button>
        <button
          onClick={() => filterMethod("Playstation")}
          className="btn btn-success mx-3"
        >
          Play Station
        </button>
        <button
          onClick={() => filterMethod("Airbuds")}
          className="btn btn-info mx-3"
        >
          Air-buds
        </button>
      </div>

      <div className="container-fluid row my-5 ">
        {products.map((data) => {
          return (
            <>
              <div className="col-lg-4 text-center my-3 ">
                <div
                  style={{
                    border: "2px solid aqua",
                    padding: "1rem",
                    margin: "1rem",
                  }}
                >
                  <h1>{data?.title}</h1>
                  <p>{data?.description}</p>

                  <Link
                    to={`/products/${data.id}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1rem",
                    }}
                  >
                    <img
                      style={{
                        height: "100%",
                        width: "30%",
                        objectFit: "contain",
                      }}
                      src={data.imgUrl}
                      alt="img"
                    />
                  </Link>
                  <button className="btn btn-warning">
                    {data.price}
                    {""}₹
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
