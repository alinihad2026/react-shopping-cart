import {FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT} from "./types";


export const fetchProducts=()=>{ //دالة تحتوي بداخلها دالة
    return(dispatch)=>{ //الي انت تريده وابعث الداتاactionللdispatchدالة تقوم بارسال طلب ومن تجي الطلب الداتا اكوله اعمل 
        fetch('/api/products').then(res=> res.json()).then(data=>{//jsonاثنين وحدة للداتا ووحدةthenيجيب الداتا من الداتا بيس ولانها بروميس يعمل لها
            dispatch({//مالتهstateالداتا مال الاكشين بناءً علىreducerوهذا الاكشن بيه الداتا الي بناءً عليه حيفيرreducerيبعث اكشن الى
                type:FETCH_PRODUCTS,
                data:data //requestالبيانات الي جاية من ال
            })
        })
    }
}

export const filteredSize=(products,value)=>{
    return(dispatch)=>{
        let prodectsClone = [...products];
    let newProducts=prodectsClone.filter(p => p.sizes.indexOf(value) != -1);

    dispatch({
        type:FILTER_SIZE,
        data:{
            size:value,
            products: value=="ALL" ? products : newProducts
        }

    })
    }
}
export const filteredSort=(products,value)=>{
return(dispatch)=>{
    let prodectsClone = [...products]
    let newProducts=prodectsClone.sort(function(a,b){
if (value =="lowerest"){
  return a.price - b.price
}else if (value =="highest"){
  return b.price - a.price
}else if(value =="lastest") {
  return a.id < b.id ? 1 : -1  
}
});
dispatch({
    type:FILTER_SORT,
    data:{
        sort:value,
        products:newProducts
    }
})
}
}



//create action creator: dispatch,(requests)ا,نستطيع عمل طلباتthunkعبارة عن فانكشنن تقوم بعمل ريتيرن لل اكشن وبما انه منصبين ال