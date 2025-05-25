const mongoose=require("mongoose");
const orderSchema= require('../schema/orderSchema');//الموجودةفي فولدر السكيماorderSchemaحيجيبها من 
//model====> collection // documentالفكرة من المودل اتسوي اسم للمودل كولكشن وتجيب شكل السكيما اي الداتا الي حتكون بداخلهااي



const Order=mongoose.model("order",orderSchema)

module.exports=Order