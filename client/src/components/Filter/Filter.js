import React from 'react'

function Filter(props) {
  return (
    <div className="wrapper-filter">
        <h2 className='filter-title'>Filter</h2>
        <div className='num-of-product'>Number Of Product 4</div>
        <div className='filter-by-size'>
        <span>Filter</span>
        <select  className='filter-select' onChange={props.handleSize} value={props.size}>
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
       <select className='filter-select' value={props.sort} onChange={props.handleOrder}>
            <option value="lastest">lastest</option>
            <option value="lowerest">lowerest</option>
            <option value="highest">highest</option>

            </select>
            </div>
        </div>
  )
}

export default Filter
