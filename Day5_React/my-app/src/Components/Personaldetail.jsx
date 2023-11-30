import React, { useState } from 'react';
const Persondetail = () => {
    // const [name, setName] = useState("Shailesh");
    // const [age, setAge] = useState("30");
    // const [gmail, setGmail]=useState("sha2gmail.com")
    // const update= () => {
    //     setName("Dubey");
    //     setAge(31);
    //     setGmail("dgsdg@gmail.com")
    // }
    const[data, setData] = useState({
        name:"ram",
        age:23,
        gamil:"ram@gmail.com"
    })
    return (
        <div>
            <h1>{data.name}</h1>
            <h2>{data.age}</h2>
            <h3>{data.gamil}</h3>
          <button
          onClick={()=>{
            setData({
                name:'mohan',
                age:50,
                gamil:"majj@gmail.com"
            })
          }}
          >Update</button>
        </div>
    );
};
export default Persondetail;