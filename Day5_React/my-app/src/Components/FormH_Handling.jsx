import React, { useState } from "react";

const FormH_Handling = () => {
  const [name, setname] = useState("");
  const [Gmail, setGmail] = useState("");
  const [Age, setAge] = useState("");

 

  return (
    <>
      <div className="container my-5 text-center d-flex justify-content-center item-center">
        {/* <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}
        <h1>Name:</h1>{" "}
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
        />
        <button className="btn btn-primary mx-3">Submit</button>
        <h1>Gmail:</h1>{" "}
        <input
          value={Gmail}
          onChange={(e) => setGmail(e.target.value)}
          type="text"
        />
        <button className="btn btn-primary mx-3">Submit</button>
        <h1>Age:</h1>{" "}
        <input
          value={Age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
        />
        <button className="btn btn-primary mx-3">Submit</button>
      </div>
      <h1 className="text-center">{name}</h1>
      <h1 className="text-center">{Gmail}</h1>
      <h1 className="text-center">{Age}</h1>
    </>
  );
};

export default FormH_Handling;
