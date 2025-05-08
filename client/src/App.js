import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import {words} from "./words"
import data from "./data.json"
import Products from "./components/products/Products";
function App() {
  const [products,setProducts]=useState(data);
  // console.log(products)
  return (
    <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
       <Products products={products}/> 
        <div className="wrapper-filter">filters</div>

        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
// productsاي اسم نخترعه={products الستيت هذا }