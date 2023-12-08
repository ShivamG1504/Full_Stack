import React from 'react'
import moneyContext from '../context/MoneyContext'
import { useContext } from 'react'
import Person from './Person'

const People = () => {
    // console.log(useContext(moneyContext))
    const data =useContext(moneyContext)

  return (
    <>People ={data.money}
    <div className='container'>
        <h1>{data.person.name}</h1>
        <h1>{data.person.email}</h1>
        <h1>{data.person.contect}</h1>
        <h1>Conter={data.counter}</h1>
        <button onClick={()=>data.setCounter(data.counter+1)} className='btn btn-warning'>Increase</button>
 </div>
 </>
  )
}

export default People