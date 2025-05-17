import React from 'react'
import Input from '../Input/Input'

function Checkoutform(props) {
  return (
    <>
       {/* Checkoutform */}
        {props.showForm && <div className="checkout-form"> 
          <span className="close-icon" onClick={()=>props.setShowForm(false)}>&times;</span>
          <form onSubmit={props.submitOrder}>
           <Input label="name" type="text" onChange={props.handleChange} name="name"/>
          <Input label="Email" type="email" onChange={props.handleChange} name="email"/>
            {/* <div>
              <label>Email</label>
              <input type="email" required name="email" onChange={props.handleChange}></input>
            </div> */}

            <div>
              <button type="submit" >Checkout</button>
            </div>
          </form>

        </div>}

    </>
  )
}

export default Checkoutform
