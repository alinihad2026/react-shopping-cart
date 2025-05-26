import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "./types"
//craete Order
export const createOrder=(order)=>{
    return (dispatch)=>{
        fetch('/api/orders',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:CREATE_ORDER,
                data:{
                    order:data
                }
            })
        })
        localStorage.clear('cartItems');//typesفنرجع لملف cartبس هل مرة للclearلعملdispatchبس لازم نرجع نسوي 
        dispatch({type:CLEAR_CART})
    }

}

//close model after finsh order
export const clearOrder=()=>{
return (dispatch)=>{
    dispatch({
        type:CLEAR_ORDER
    })
}
}

//لل فوك handelingلعمل Reducerبعدها نذهب الى ال