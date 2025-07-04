import React, { useEffect, useState } from "react";
import "../../css/products/product.css";
import ProductModal from "./ProductModal";
import Bounce from 'react-reveal/Bounce';
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/products";
import { addToCart } from "../../store/actions/cart";



function Products(props) {
const [product,setProduct]=useState("")

const openModal=(product)=>{
  setProduct(product)
}
const closeModal=()=>{
  setProduct(false)
}

useEffect(() => { //ارسال داتا واستقبال داتا
  props.fetchProducts()

  
}, []);

  return (
    <Bounce left cascade>
    <div className="products-wrapper">
      {props.products && props.products.length ? props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={()=>openModal(product)} >
          <img src={product.imageurl} alt={product.title} /></a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button onClick={()=>props.addToCart(product)}>Add To Cart</button>
        </div>
      )):"loading ...."}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
    </Bounce>
    
  );
}

export default connect((state)=>{ //الموجودة جوة الريدكس او الستور نغس الشيstateيفوم بربط الرياكت بالريدكس بداخله اثنين دوال الاولى
  return{
       products: state.products.filterProducts   //props.productsنفس المعنى
  } 

},{ fetchProducts,addToCart } )(Products) //{ fetchProducts }=props.fetchProducts



