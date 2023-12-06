import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateComponent = () => {
const Navigate=useNavigate()

  return (
    <>
    <div
    onClick={()=>Navigate('/')}
    className='btn btn-warning'>Back To Home</div>
    </>
  )
}

export default NavigateComponent