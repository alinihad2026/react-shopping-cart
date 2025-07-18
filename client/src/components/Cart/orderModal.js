import React from 'react'

import Modal from "react-modal"


function OrderModal(props) {
const {order,closeModal,cartItems}=props
  return (
    <>
       {order && <Modal isOpen={order} onRequestClose={closeModal}>
        <div className="order-info">
          <span className="close-modal-checkout" onClick={closeModal}>&times;</span>
        <p className="alert-success">order done success</p>
        <table>
        <tr>
          <td>Name: </td>
          <td>{order.name}</td></tr>
        <tr>
        <td>Email:</td>
        <td>{order.email}</td>
        </tr>

        <tr>
          <td>Total:</td>
          <td>{cartItems.reduce((a,p)=>{
            return a + p.price
          } , 0)}</td>
        </tr>
          <tr>
            <td>Select Item:</td>
           <td>{cartItems.map(p=>(
            <div className="cart-data">
              <p>Number of this product:{p.qty}</p>
              <p>Title of  product:{p.title}</p>
            </div>
           ))}
           </td>
          </tr>
        </table>
        </div>
      </Modal>}
      </>
    
  )
}

export default OrderModal;
