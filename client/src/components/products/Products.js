import React, { useState } from "react";
import "../../css/products/product.css";
import ProductModal from "./ProductModal";
import Bounce from 'react-reveal/Bounce';




function Products(props) {
const [product,setProduct]=useState("")

const openModal=(product)=>{
  setProduct(product)
}
const closeModal=()=>{
  setProduct(false)
}

  return (
    <Bounce left cascade>
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={()=>openModal(product)} >
          <img src={product.imageurl} alt={product.title} /></a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button onClick={()=>props.addToCartProduct(product)}>Add To Cart</button>
        </div>
      ))}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
    </Bounce>
    
  );
}

export default Products;
// claude aiجوة قمت بتحميل كود يظهر رابط الصورة عندما اظغط عليهاتظهر في تاب منفصل مو نفس التاب مثل الفوك واخذت هذا الكود من 

// import React, { useState } from "react";
// import "../../css/products/product.css";
// import ProductModal from "./ProductModal";

// function Products(props) {
//   const [product, setProduct] = useState("");

//   const openModal = (product) => {
//     setProduct(product);
//   };

//   const closeModal = () => {
//     setProduct(false);
//   };

//   // Function to open the image in a new tab
//   const openImageInNewTab = (imageUrl, e) => {
//     e.preventDefault(); // Prevent default link behavior
//     window.open(imageUrl, '_blank'); // Open the image URL in a new tab
//   };

//   return (
//     <div className="products-wrapper">
//       {props.products.map((product) => (
//         <div className="product-item" key={product.id}>
//           {/* Use the image URL directly for opening in a new tab */}
//           <a 
//             href={product.imageurl} 
//             onClick={(e) => openImageInNewTab(product.imageurl, e)}
//           >
//             <img src={product.imageurl} alt={product.title} />
//           </a>
//           <div className="product-desc">
//             <p>{product.title}</p>
//             <span>{product.price}</span>
//           </div>
//           <button>Add To Cart</button>
//         </div>
//       ))}
//       <ProductModal product={product} closeModal={closeModal} />
//     </div>
//   );
// }

// export default Products;