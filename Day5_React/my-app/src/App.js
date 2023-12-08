import React from "react";
import Person from "./Components/Person";
import Adhar_card from "./Components/Adhar_card";
import Counter from "./Components/Counter";
import Persondetail from "./Components/Personaldetail";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import Use_Effect from "./Components/Use_Effect";
import Fetch_Data from "./Components/Fetch_Data";
import FormH_Handling from "./Components/FormH_Handling";
import Multipal_input_handeling from "./Components/Multipal_input_handeling";
import To_Do_List from "./Components/To_Do_List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Router/Home";
import Career from "./Components/Router/Career";
import About from "./Components/Router/About";
import Contect from "./Components/Router/Contect";
import Dynamic_Route from "./Dynamic_Route";
import SearchItems from "./Components/SearchItems";
import IndianGovernment from "./Components/IndianGovernment";

const App = () => {
const money = 1000;

  return (
    <>
    <IndianGovernment money={money}/>

      {/* <Router>
        <Navbar />
        <Routes> */}
          {/* <Route path={"/"} element={<Home />} /> */}
          {/* <Route path={"/about"} element={<About />} />
          <Route path={"/career"} element={<Career />} />
          <Route path={"/contect"} element={<Contect />} />
          <Route path={"/products"} element={<Product />} />
          <Route path={"/products/:slug"} element={<Dynamic_Route />} />
          <Route path={"/products/search/:term"} element={<SearchItems />} /> */}

          {/* <Counter />
          <Persondetail/> */}

          {/* <Person
    name={"Google"} age={27} gmail={"hello@gmail.com"} father={"Saktiman"} />
    <Person
    name={"Anurag"} age={54} gmail={"anurag@gmail.com"} father={"Spiderman"} />
    <Person
    name={"Blade Dancer"} age={73} gmail={"bdancer@gmail.com"} father={"Ghost Rider"} />
    
      <Adhar_card/> */}

          {/* <div> */}
          {/* <Navbar/> */}

          {/* <Use_Effect/>*/}
          {/* <Fetch_Data/> */}
          {/* <FormH_Handling/> */}
          {/* <Multipal_input_handeling/> */}
          {/* <To_Do_List/> */}

          {/* </div> */}
        {/* </Routes>
      </Router> */}
    </>
  );
};
export default App;
