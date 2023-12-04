import React, { useState } from "react";

const Multipal_input_handeling = () => {
  const style = {
    margin: "2rem",
  };

  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert("your form submited");
    setFormData({
      name: "",
      gmail: "",
      password: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      Name: {""}
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={style}
        type="text"
      />
      <br />
      Gmail:{""}
      <input
        name="gmail"
        value={formData.gmail}
        onChange={handleChange}
        style={style}
        type="text"
      />
      <br />
      Password:{""}
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        style={style}
        type="password"
      />
      <br />
      <button className="btn btn-danger">Submit</button>
    </form>
  );
};

export default Multipal_input_handeling;
