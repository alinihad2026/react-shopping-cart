//Reducersهذا الملف سيكون المجمع لكل 


import { combineReducers } from "redux";
import {productsReducer} from "./productsReducer";
import { cartReducer } from "./cartReducer";


export default combineReducers({ //key-valueداخلها اوبجكت عبارة عن
    products:productsReducer,//productsوهوkeyلازم نستدعي الstoreفي داخلproductsReducer الوصول الى هذا Reducerيحتوي على اوبجكت كبير بداخله كثير منstoreال ***********
    cart:cartReducer
})


