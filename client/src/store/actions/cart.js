// import { connect } from "react-redux";
import { ADD_CART, REMOVE_CART } from "./types";
// import Cart from "../../components/Cart/Cart";

export const addToCart=(product)=>{ //productالكارت الواحد
    return (dispatch,getState)=>{
        const cartItems = getState().cart.cartItems
  const cartItemsClone=[...cartItems]
  var isExistingProduct=false;

   cartItemsClone.forEach(p => {

    if (p._id == product._id) {
      p.qty++;
      isExistingProduct=true;
    }
  })
    if (!isExistingProduct) {
      cartItemsClone.push({...product, qty:1})
    }
    dispatch({
        type:ADD_CART,
        data:{
            cartItems:cartItemsClone
        }
    });
    localStorage.setItem("cartItems",JSON.stringify(cartItemsClone))
    }
}

export const removeCart=(product)=>{
 return (dispatch,getState)=>{
 const cartItems = getState().cart.cartItems
 const cartItemsClone=[...cartItems]
 const updatedCartItems=cartItemsClone.filter(p=> p._id !==product._id)
 dispatch({
    type:REMOVE_CART,
    data:{
        cartItems:updatedCartItems
    }
 });
     localStorage.setItem("cartItems",JSON.stringify(updatedCartItems))

 }       
}
