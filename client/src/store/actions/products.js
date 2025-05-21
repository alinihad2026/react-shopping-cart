import {FETCH_PRODUCTS} from "./types";


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
//create action creator: dispatch,(requests)ا,نستطيع عمل طلباتthunkعبارة عن فانكشنن تقوم بعمل ريتيرن لل اكشن وبما انه منصبين ال