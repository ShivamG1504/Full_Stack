import React, { useState } from "react";
import { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { product } from "../Product_Data";

const SearchItems = () => {
  const { term } = useParams();

  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      setfilterData(
        product.filter((data) =>
          data.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    };
    filterData();
  }, [term]);
  console.log(filterData);

  return (
    <>
   <div className="container-fluid row my-5 ">
        {filterData.map((data) => {
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
  )
};

export default SearchItems;
