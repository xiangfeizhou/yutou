import rqe from "./request";

//登入请求

export const dengru=(params)=>{
   return rqe.instance.post('login',params);
    // console.log(321);
}

export const jkl=()=>{
    console.log(321111);
}
