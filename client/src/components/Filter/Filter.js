import React from 'react'
import Flip from 'react-reveal/Flip';
import { connect } from "react-redux";
import { filteredSize, filteredSort } from '../../store/actions/products';


function Filter(props) {
  return (
    <Flip right>
     {props.filterProducts &&  <div className="wrapper-filter">
        <h2 className='filter-title'>Filter</h2>
        <div className='num-of-product'>Number Of Product {props.filterProducts.length}</div>
        <div className='filter-by-size'>
        <span>Filter</span>
        <select  className='filter-select' onChange={(e)=>props.filteredSize(props.filterProducts,e.target.value)} value={props.size}>
            <option value="ALL" >ALL</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="l">l</option>
            <option value="xl">xl</option>
            <option value="xxl">xxl</option>
        </select>
       </div>
       <div>
       <span>Order</span>
       <select className='filter-select' value={props.sort} onChange={(e)=>props.filteredSort(props.filterProducts,e.target.value)}>
            <option value="lastest">lastest</option>
            <option value="lowerest">lowerest</option>
            <option value="highest">highest</option>

            </select>
            </div>
        </div> }
    </Flip>
  )
}

export default connect ((state)=>{
  return{
    sort:state.products.sort,
    size:state.products.size,
    products:state.products.products,
    filterProducts:state.products.filterProducts

  }
},{
  filteredSize,filteredSort} ) (Filter);
