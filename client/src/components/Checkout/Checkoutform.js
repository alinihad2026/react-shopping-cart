import React from 'react'
import Input from '../Input/Input'
import Zoom from 'react-reveal/Zoom';

function Checkoutform(props) {
  return (
    <>
       {/* Checkoutform */}
        {props.showForm && <div className="checkout-form"> 
          <span className="close-icon" onClick={()=>props.setShowForm(false)}>&times;</span>
          <Zoom left>
          <form onSubmit={props.submitOrder}>
           <Input label="name" type="text" onChange={props.handleChange} name="name"/>
           <Input label="Email" type="email" onChange={props.handleChange} name="email"/>
            {/* <div>
              <label>Email</label>
              <input type="email" required name="email" onChange={props.handleChange}></input>
            </div> */}

            <div>
              <button type="submit"  onClick={()=> props.setOrder(true)}>Checkout</button>
            </div>
          </form>
          </Zoom>

        </div>}

    </>
  )
}

export default Checkoutform
