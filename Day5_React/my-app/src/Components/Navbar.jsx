import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  // console.log(useLocation());
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const submitHandeler = (e) =>{ e.preventDefault();
    if(setSearchTerm!=""){

    
  navigate(`/products/search/${searchTerm}`);
}
}
  return (
    <>
      <div className="d-flex justify-content-between items-align-center bg-danger sticky-top z-1">
        <Link className="text-light p-3 text-decoration-none" to={"/"}>
          Home
        </Link>
        <Link className="text-light p-3 text-decoration-none" to={"/about"}>
          About
        </Link>

        <form className="my-3" onSubmit={submitHandeler}>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            style={{ width: "400px" }}
          />
           <button type="submit" className="btn btn-success mx-2">
            Search
          </button>
        </form>
        <Link className="text-light p-3 text-decoration-none" to={"/products"}>
          Product
        </Link>
        <Link className="text-light p-3 text-decoration-none" to={"/career"}>
          Career
        </Link>
        <Link className="text-light p-3 text-decoration-none" to={"/contect"}>
          Contect
        </Link>
      </div>
    </>
  );
};

export default Navbar;
