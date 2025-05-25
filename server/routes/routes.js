const express=require("express");
const router=express.Router(); // routerب app مكان
const Product=require('../models/productModel')


// 1- requst api fetch all data (by postman)
router.get('/api/products',async(req,res)=>{
    const products=await Product.find(); //فلازم نحدد منو داخل القوس الي نريدهProduct.find({})حيجيب كل البيانات في الداتا بيس بس اذا خلينا
    res.send(products);
})

//2- save data عندما نجيب البيانات في الخطوة الاولئ فلازم نحغظها
router.post('/api/products',async(req,res)=>{
const newProduct = new Product(req.body);
const saveP =await newProduct.save();
res.send(saveP)
})


//delete item
router.delete('/api/products/:id',async(req,res)=>{
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deleteProduct)
})


module.exports=router; //علمود نستخدمة في السيرفر


//لازم اسميه راوت برودكت لانه يخص البرودكت بس نسيت