import React from 'react'

const Person = () => {

  
 const person ={
name:'Shivam',
age:25,
email:"shivamji019@gmail.com",
phone:7898214067,
 };

//  const style={
//     border:'2px solid yellow',
//         padding:'2rem',
//         margin:'1rem',
//         backgroundColor:'blue',
    
//  };

//  const style2={
//     border:'2px solid yellow',
//         padding:'2rem',
//         backgroundColor:'red',
    
//  };
 
  return (
    <>
    <div 
    // style={{
    //     border:'2px solid yellow',
    //     padding:'2rem',
    //     margin:'1rem',
    //     backgroundColor:'blue',
    // }}
    // style={style} 
    className='shivam'
    >
      <h1 
    //   style={style2}
      >{person.age}</h1>
      <h1>{person.name}</h1>
      <h1>{person.email}</h1>
      <h1>{person.phone}</h1>
    </div>
    </>
  );
}

export default Person