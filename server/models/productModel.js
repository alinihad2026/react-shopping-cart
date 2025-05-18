const mongoose=require("mongoose");
const productSchema= require('../schema/productSchema');
//model====> collection // documentالفكرة من المودل اتسوي اسم للمودل كولكشن وتجيب شكل السكيما اي الداتا الي حتكون بداخلهااي



const Product=mongoose.model("product",productSchema)

module.exports=Product //لان حستخدمة في صفحة السيرفر