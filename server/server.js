const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const productRouter = require("./routes/routes");
const orderRouter = require("./routes/orderRoutes");
const runDB = require("./config/db");
const app=express();//يعمل طلب لل اكسبريس ويرجع دالة
app.use(bodyParser.json());//jsonرجعلي البياتات على صيغة useمن خلال الوسيط 
app.use('/', productRouter)//(/==>url)اي نخلي بعد /الذي يعتبر يو ار ال حتحط المسار,appغلمود لا كل مرة نخلي 
app.use('/', orderRouter)


//Order apis



//run db
runDB();

app.listen(5001,()=>{
    console.log("Running on port 5001")
})