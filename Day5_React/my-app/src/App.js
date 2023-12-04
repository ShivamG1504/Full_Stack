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

export const App = () => {
  const product = [
    {
      id: 1,
      title:
        "OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage",
      description:
        "Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP",
      imgUrl: "https://m.media-amazon.com/images/I/61LB+d0vheL._SX679_.jpg",
      price: 19999,
      category: "mobile",
    },
    {
      id: 2,
      title: "OnePlus Nord CE 3 5G (Aqua Surge, 8GB RAM, 128GB Storage)",
      description:
        "Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera with Sony IMX355 (FOV: 112 degree) and 2MP Macro lens; 16MP Front (Selfie) Camera",
      imgUrl: "https://m.media-amazon.com/images/I/6175SlKKECL._SX679_.jpg",
      price: 24999,
      category: "mobile",
    },
    {
      id: 3,
      title: "Acer Aspire 3 Spin 14 Intel Core i3 N305 Laptop",
      description:
        "Windows 11 Home, Intel Core i3-N305 Processor, Microsoft Office included",
      imgUrl: "https://m.media-amazon.com/images/I/51ufjoN8K4L._SX679_.jpg",
      price: 41990,
      category: "laptop",
    },

    {
      id: 4,
      title: "boAt Ultima Chronos Smart Watch with 1.96, AMOLED Display",
      description:
        "Screen Size- Make everything come to life with a 1.96” AMOLED Display on Ultima Chronos. It’s Always-On Display and Wake gesture ensures that important information is readily available at a glance. Always on display:Yes, Peak Brightness 650 Nits",
      imgUrl: "https://m.media-amazon.com/images/I/61fOhVR-vZL._SX679_.jpg",
      price: 2799,
      category: "Smart watch",
    },
    {
      id: 5,
      title: "Echo Pop| Smart speaker with Alexa and Bluetooth| Loud sound,",
      description:
        "Smart speaker with loud sound, balanced bass, crisp vocals and Alexa Stylish design that blends into any decor.",
      imgUrl: "https://m.media-amazon.com/images/I/71y+IjV-qyL._SX679_.jpg",
      price: 3999,
      category: "Speeker",
    },

    {
      id: 6,
      title:
        "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming",
      description:
        "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.",
      imgUrl: "https://m.media-amazon.com/images/I/61KNJav3S9L._SX522_.jpg",
      price: 1299,
      category: "Airbuds",
    },

    {
      id: 7,
      title: "Sony PS5® Console – Call of Duty® Modern Warfare® III Bundle",
      description:
        "Maximize your play sessions with near instant load times for installed PS5 games.The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible",
      imgUrl: "https://m.media-amazon.com/images/I/61VQTLVxvGL._SX679_.jpg",
      price: 59999,
      category: "Playstation",
    },
  ];

  return (
    <>
      {/* <Counter />
<Persondetail/> */}

      {/* <Person
    name={"Google"} age={27} gmail={"hello@gmail.com"} father={"Saktiman"} />
    <Person
    name={"Anurag"} age={54} gmail={"anurag@gmail.com"} father={"Spiderman"} />
    <Person
    name={"Blade Dancer"} age={73} gmail={"bdancer@gmail.com"} father={"Ghost Rider"} />
    
      <Adhar_card/> */}

      <div>
        {/* <Navbar/> */}
        {/* <Product product={product} /> */}
        {/* <Use_Effect/>*/}
        {/* <Fetch_Data/> */}
        {/* <FormH_Handling/> */}
        <Multipal_input_handeling/>


      </div>
    </>
  );
};
export default App;
