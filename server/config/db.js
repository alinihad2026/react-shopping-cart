const mongoose=require("mongoose")

//mongoose من خلال connectنعمل
const connectionString='mongodb://localhost/react-shopping-cart';
function runDB(){
mongoose.connect(connectionString,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}) // thenتحتاج بعدهاpromiseترجع <=mongoose.connect  // {useNewUrlParser:true,useUnifiedTopology:true}قمنا بعملها زيادةوفائدتها هي منع اي تحذير او غلط خلال الاتصال
.then(res => console.log("Connection Done")) //اذا الامور تمام سويلي هذه العبارة
}

module.exports=runDB