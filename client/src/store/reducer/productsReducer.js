import { FETCH_PRODUCTS } from "../actions/types";


export const productsReducer=(state={},action) => {
switch(action.type){            //FETCH_PRODUCTSجاي منaction.typeنسأل هنا اذا 
    case FETCH_PRODUCTS:
        return{products:action.data}     //products اي اسم من عدنا: action.dataالي هي جوة بالتعليق
        
        default:               //FETCH_PRODUCTSاذا لم تكن من 
            return state
}
}


//actionوstateشغلتينReducerيستقبل
//dispatch({ reducer<===dataوtypeيرسل هذا الاوبحكت الى عبارة عن
// type:FETCH_PRODUCTS,
 // data:data جاية من الريسبونس مال الطلب مال داتا بيس
            // })
        

 