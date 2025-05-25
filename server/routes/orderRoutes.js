const express=require("express");
const router=express.Router(); // routerب app مكان
const Order=require('../models/orderModel')





router.get('/api/orders', async(req,res)=>{ //يجيب البيانات من الداتا بيس
    const orders= await Order.find();//يجيبلي كل الاوردر في الداتا بيس(tableجوه record)اسوي دوكيومنت جوه الكوليكشن
    res.send(orders)//جيبلي الداتا علمود اشوفهامن اتعامل مع البوست مان
});

router.post('/api/orders', async(req,res)=>{ //ارسل البيانات
    const order= await new Order(req.body).save(); //  الداتا الي انت تمليها او حتبعثهاreq.body/الاوردر الي حتنشأه حتجيبه داحل الاوردر هذا البيانات مالتك
    res.send(order)//(شكل الاورد الي هو سواه)ايعثلي الاوردر للراجل علمود بشوفهsaveبعد ماتعمل
});
router.post('/api/orders', async(req,res)=>{
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    res.send(deletedOrder);
})

module.exports=router;
