import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import {words} from "./words"
import data from "./data.json"
import Products from "./components/products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import {Provider} from "react-redux";
import store from "./store/Store";
function App() {
  const [products,setProducts]=useState(data);
  const [size,setSize]=useState("");
  const [sort,setSort]=useState("");
  const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem("cartItems"))|| []);

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

 const addToCartProduct=(product) =>{
  const cartItemsClone=[...cartItems]
  var isExistingProduct=false;

   cartItemsClone.forEach(p => {

    if (p.id ==product.id) {
      p.qty++;
      isExistingProduct=true;
    }
  })
    if (!isExistingProduct) {
      cartItemsClone.push({...product, qty:1})
    }
    setCartItems(cartItemsClone);
 }


//  useEffect(()=>{
//   localStorage.setItem("cartItems",JSON.stringify(cartItems))
//  },[cartItems])



 const removeCartProduct=(product)=>{
 const cartItemsClone=[...cartItems]
setCartItems(cartItemsClone.filter(p=> p.id !==product.id))
 };

 



  return (
    <Provider store={store}>
      <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
       <Products products={products} addToCartProduct={addToCartProduct}/> 
       <Filter size={size} handleSize={handleSize} handleOrder={handleOrder} sort={sort} numberOfProducts={products.length}/>
        </div>
        <Cart cartItems={cartItems} removeCartProduct={removeCartProduct}/>
      </main>
      <Footer/>
    </div>
    </Provider>
  );

}

export default App;
