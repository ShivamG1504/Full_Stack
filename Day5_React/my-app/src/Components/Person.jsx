import React from 'react'

const Person = ({name,age,gmail,father}) => {

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
     
      <h1>{name}</h1>
      <h1 
    //   style={style2}
      >{age}</h1>
      <h1>{gmail}</h1>
    
      <h1>{father}</h1>

    
    </div>

    
    </>
  );
};

export default Person;