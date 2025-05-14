import React, { useState } from "react";





function Cart(props) {
  const [showForm,setShowForm]=useState(false);
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

        {/* Checkoutform */}
        {showForm && <div className="checkout-form"> 
          <span className="close-icon" onClick={()=>setShowForm(false)}>&times;</span>
          <form>
            <div>
              <label>Name</label>
              <input type="text" require name="name"></input>
            </div>

            <div>
              <label>Email</label>
              <input type="email" require name="email"></input>
            </div>

            <div>
              <button type="submit" >Checkout</button>
            </div>
          </form>

        </div>}






    </div>
  )};

export default Cart;
