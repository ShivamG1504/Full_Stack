import React from "react";
import { useEffect, useState } from "react";

const Fetch_Data = () => {
  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await api.json();
      console.log(data);
      setapiData(data);
    };
    fetchData();
  }, []);
  // console.log("data in state",apiData)
  return (
    <div>
      {apiData.map((data) => {
        return (
          <>
            <div className="container text-center bg-danger my-5">
              <h1>{data.userid}</h1>
              <h1>{data.title}</h1>
              <h1>{data.name}</h1>
              <h1>{data.email}</h1>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Fetch_Data;
