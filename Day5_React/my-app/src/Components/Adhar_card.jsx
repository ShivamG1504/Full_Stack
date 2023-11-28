import React from 'react'

const Adhar_card = () => {

    const person ={
        name:'Shivam',
        adharno:1234567899876,
        age:25,
        phone:7898214067,
         };
  return (

    <>
    <div className='shivam'>
      <h1>{person.age}</h1>
      <h1>{person.name}</h1>
      <h1>{person.adharno}</h1>
      <h1>{person.phone}</h1>
    </div>
    </>
    
  )
}

export default Adhar_card