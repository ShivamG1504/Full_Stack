import React from 'react'

const Product = ({product}) => {
console.log(product);
  return (
    <>
    <div className='container my-5 '>
    {product.map((data)=>{
return(
    <>
    <div className='text-center my-3 '>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

       <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"1rem",
       }}> 

        <img
        style={{
            
            height:"100%",
            width:"30%",
            objectFit:"contain",

        }}
        src={data.imgUrl} alt="img"/>
        </div>
        <button className='btn btn-warning'>{data.price}{""}₹</button>
    </div>
    </>
    
)

    })
    }
    </div>
    </>
    
  )
}

export default Product