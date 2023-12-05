import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic_Route = () => {
    // console.log(useParams());
const{slug}=useParams();

  return (
    <div>Dynamic_Route={slug}</div>
  )
}

export default Dynamic_Route