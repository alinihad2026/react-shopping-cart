import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "../actions/types";


export const productsReducer=(state={},action) => {
switch(action.type){            //FETCH_PRODUCTSجاي منaction.typeنسأل هنا اذا 
    case FETCH_PRODUCTS:
        return{products:action.data,filterProducts:action.data}     //products اي اسم من عدنا: action.dataالي هي جوة بالتعليق
        
    case FILTER_SIZE:
        return{
            ...state,
            size:action.data.size,
            filterProducts:action.data.products

        }

        case FILTER_SORT:
        return{
            ...state,
            sort:action.data.sort,
            filterProducts:action.data.products

        }
        default:               //FETCH_PRODUCTSاذا لم تكن من 
            return state
}
}


//actionوstateشغلتينReducerيستقبل
//dispatch({ reducer<===dataوtypeيرسل هذا الاوبحكت الى عبارة عن
// type:FETCH_PRODUCTS,
 // data:data جاية من الريسبونس مال الطلب مال داتا بيس
            // })
        

 