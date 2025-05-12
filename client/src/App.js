import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import {words} from "./words"
import data from "./data.json"
import Products from "./components/products/Products";
import Filter from "./components/Filter/Filter";
function App() {
  const [size,setSize]=useState("");
  const [sort,setSort]=useState("");
  const [products,setProducts]=useState(data);

const handleSize=(e)=>{
  console.log(e.target.value)
  setSize(e.target.value);
  if (e.target.value == "ALL") {
    setProducts(data);
  } else {
    let prodectsClone = [...products];
    let newProducts=prodectsClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
    setProducts(newProducts);
  }
}
const handleOrder=(e)=>{
  console.log(e.target.value);
let order = e.target.value;
setSort(order);
let prodectsClone = [...products];
let newProducts=prodectsClone.sort(function(a,b){
if (order =="lowerest"){
  return a.price - b.price
}else if (order =="highest"){
  return b.price - a.price
}else if(order =="lastest") {
  return a.id < b.id ? 1 : -1  
}
});
setProducts(newProducts);
}

  return (
    <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
       <Products products={products}/> 
       <Filter size={size} handleSize={handleSize} handleOrder={handleOrder} sort={sort}/>

        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
