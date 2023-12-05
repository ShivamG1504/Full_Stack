import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between items-align-center bg-danger'>
<Link  to={'/'}>Home</Link>
<Link  to={'/about'}>About</Link>
<Link  to={'/career'}>Career</Link>
<Link  to={'/contect'}>Contect</Link>
{/* <Link to={'/products'}>Product</Link> */}
    </div>
  )
}

export default Navbar