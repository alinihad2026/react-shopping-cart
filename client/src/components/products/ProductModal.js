import React from 'react';
import modal from "react-modal";
function ProductModal(props) {
    const {product,closeModal}=props;
  return (
    <modal isOpen={product} onRequestClose={closeModal}>
        <span className="icon-close"   onClick={closeModal}>&times;</span>
      <div className="product-info">
      <img  src={product.imageurl} alt={product.title}/>
            <p>{product.title}</p>
            <p>{product.desc}</p>
            <p>{product.sizes}</p>
             <p>{product.price}</p>


      </div>
      </modal>
  )
}

export default ProductModal
