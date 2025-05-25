import React, { useState } from "react";
import Checkoutform from "../Checkout/Checkoutform";
import Bounce from 'react-reveal/Bounce';
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
import OrderModal from "./orderModal"
function Cart(props) {
  const [order, setOrder] = useState(false);
  const [value, setValue] = useState("");
  const [showForm,setShowForm]=useState(false);
  const submitOrder=(e)=>{
    e.preventDefault();
    const order ={
      name:value.name,
      email:value.email,
    }
    setOrder(order)
    console.log(order)
  }
    const closeModal =()=>{
         setOrder(false);
  }

  const handleChange =(e)=>{
    setValue((prevState)=>({ ...prevState,[e.target.name]:e.target.value}))
    console.log(value)
  }
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ? (
          "the product is empty"
        ) : (
          <p>the product is {props.cartItems.length}now avaliable</p>
        )}
      </div>
      <>
      {/* modal */}
      <OrderModal cartItems= {props.cartItems} order={order} closeModal={closeModal}/>
      <Bounce bottom cascade>
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
              <button onClick={() => props.removeCart(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
        </Bounce>
        </>
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

       <Checkoutform showForm={showForm} submitOrder={submitOrder} handleChange={handleChange} setShowForm={setShowForm} setOrder={setOrder} />

    </div>
  )};


export default connect((state) =>{
    return{
        cartItems:state.cart.cartItems
    }
} ,{removeCart} )(Cart)
