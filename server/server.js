const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const router = require("./routes/routes");

const app=express();//يعمل طلب لل اكسبريس ويرجع دالة
app.use(bodyParser.json());//jsonرجعلي البياتات على صيغة useمن خلال الوسيط 
app.use('/',router)//(/==>url)اي نخلي بعد /الذي يعتبر يو ار ال حتحط المسار,appغلمود لا كل مرة نخلي 
//mongoose من خلال connectنعمل
const connectionString='mongodb://localhost/react-shopping-cart';

mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true}) // thenتحتاج بعدهاpromiseترجع <=mongoose.connect  // {useNewUrlParser:true,useUnifiedTopology:true}قمنا بعملها زيادةوفائدتها هي منع اي تحذير او غلط خلال الاتصال
.then(res => console.log("Connection Done")) //اذا الامور تمام سويلي هذه العبارة




app.listen(5001,()=>{
    console.log("Running on port 5001")
})