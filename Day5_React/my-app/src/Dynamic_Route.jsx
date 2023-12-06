import React from 'react'
import { useParams } from 'react-router-dom'
import {product }from './Product_Data';
import NavigateComponent from './Components/NavigateComponent';

const Dynamic_Route = () => {
    // console.log(useParams());
const{slug}=useParams();

const product_Details=product.filter((data)=>data.id==slug);
console.log(product_Details);

  return (
    <>
    <div className='container text-center'>
<h1>{product_Details[0].title}</h1>
<p>{product_Details[0].description}</p>
<div
  style={{
    display:"flex",
    justifyContent:"center",
    alignItem:"center",
    margin:"1rem",
  }}>

    <img
    style={{
      height:"100%",
      width:"30%",
      objectFit:"contain",
    }}
    src={product_Details[0].imgUrl}
    alt=""
    
    />
     
</div>
<button>{product_Details[0].price}</button>
    </div>
    <div className='my-5 text-center'>
      <NavigateComponent />
    </div>
    </>
  )
}

export default Dynamic_Route