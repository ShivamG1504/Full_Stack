import React,{ useState } from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const money =1000;
    const [person, setperson] = useState({
name:'Shivam',
email:'shivam@123',
contect:'9907714067',

    })
    const [counter,setCounter]=useState(0);

  return (
    <MoneyContext.Provider value={{money,person,counter,setCounter}}>
        {props.children}
    </MoneyContext.Provider>
  )
}

export default MoneyState