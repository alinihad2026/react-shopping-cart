import React from 'react'

function Cart(props) {
  return (
    <div className='cart-wrapper'>
        <div className='cart-title'>{props.cartItems.length == 0 ? "the product is empty" :<p>the product is {props.cartItems.length}now avaliable</p> }</div>
        <div className='cart-items'>
           {props.cartItems.map(item =>(
                <div className='cart-item' key={item.id}>

            <img src={item.imageurl} alt=''/>
            <div className='cart-info'>
            <div>
                <p>title:{item.title}</p>
                <p>qty:{item.qty}</p>
                <p>price:${item.price}</p>
            </div>
                <button onClick={()=> props.removeCartProduct(item)}>Remove</button>
            </div>

            </div>
                
                
                
                ))}
        </div>
      
    </div>
  )
}

export default Cart
