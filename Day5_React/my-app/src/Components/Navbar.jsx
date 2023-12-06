import React from 'react'
import {Link ,useLocation} from 'react-router-dom'

const Navbar = () => {
  // console.log(useLocation());
  const location=useLocation();

  return (

    <>
{location.pathname!="/products"&&(

    <div className='d-flex justify-content-between  bg-danger'>
{/* <Link className='text-light p-3 text-decoration-none'  to={'/'}>Home</Link> */}
<Link className='text-light p-3 text-decoration-none' to={'/about'}>About</Link>
<Link className='text-light p-3 text-decoration-none' to={'/products'}>Product</Link>
<Link className='text-light p-3 text-decoration-none' to={'/career'}>Career</Link>
<Link className='text-light p-3 text-decoration-none' to={'/contect'}>Contect</Link>


    </div>
    )}
</>
  )
}

export default Navbar