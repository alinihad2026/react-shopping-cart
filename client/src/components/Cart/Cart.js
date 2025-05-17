import React, { useState } from "react";
import Checkoutform from "../Checkout/Checkoutform";





function Cart(props) {
  const [value, setValue] = useState("");
  const [showForm,setShowForm]=useState(false);
  const submitOrder=(e)=>{
    e.preventDefault();
    const order ={
      name:value.name,
      email:value.email,
    }
    console.log(order)
  }

  const handleChange =(e)=>{
    setValue((prevState)=>({ ...prevState,[e.target.name]:e.target.value}))
    console.log(value)
  }
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length == 0 ? (
          "the product is empty"
        ) : (
          <p>the product is {props.cartItems.length}now avaliable</p>
        )}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageurl} alt="" />
            <div className="cart-info">
              <div>
                <p>title:{item.title}</p>
                <p>qty:{item.qty}</p>
                <p>price:${item.price}</p>
              </div>
              <button onClick={() => props.removeCartProduct(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
        
        {
          props.cartItems.length !== 0 &&
         (
           <div className="cart-footer">
          <div className="total-cart-footer">
            Total is:{" "}
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price
            }, 0)} </div>
        <button onClick={()=> setShowForm(true)}>select item</button>
        </div>
        )
        }

       <Checkoutform showForm={showForm} submitOrder={submitOrder} handleChange={handleChange} setShowForm={setShowForm} />





    </div>
  )};

export default Cart;
