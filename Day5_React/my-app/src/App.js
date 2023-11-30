import React from 'react'
import Person from './Components/Person'
import Adhar_card from './Components/Adhar_card'
import Counter from './Components/Counter'
import Persondetail from './Components/Personaldetail'


export const App = () => {
  return (
  <>
  <Counter />
<Persondetail/>
    <Person
    name={"Google"} age={27} gmail={"hello@gmail.com"} father={"Saktiman"} />
    <Person
    name={"Anurag"} age={54} gmail={"anurag@gmail.com"} father={"Spiderman"} />
    <Person
    name={"Blade Dancer"} age={73} gmail={"bdancer@gmail.com"} father={"Ghost Rider"} />
    
      <Adhar_card/>
    
      

    </>
  )
}
export default App