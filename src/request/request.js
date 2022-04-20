import axios from 'axios'
import router from '../router/index'
import {ElMessage} from 'element-plus'

const instance=axios.create({
    baseURL:'https://lianghj.top:8888/api/private/v1/',
    timeout:4000,
})
const requesets=axios.create({
    baseURL:'https://lianghj.top:8888/api/private/v1/',
    timeout:4000,
})
//响应拦截器
instance.interceptors.response.use((res)=>{
    console.log('响应拦截器',res);
    const {data,meta}=res.data;
    if(meta.status===200){
        //登入成功 把token存储到浏览器中
        localStorage.setItem('token',data.token)
        localStorage.setItem('token_time',Date.now())
        router.push('/userlist')

        return res.data
    }else{
        //登入失败
        ElMessage.error(meta.msg)
        return Promise.reject(new Error(meta.msg))
    }
    
    
    
},(err)=>{
    console.log(err);
    return Promise.reject(err);
})

//请求拦截器
requesets.interceptors.request.use((config)=>{
    console.log('请求拦截器——+++++');
    //用户一段时间没操作自动退出
    if(localStorage.getItem('token_time')){
        if(Date.now()-localStorage.getItem('token_time')>(1000*60*60)){
            localStorage.clear();
            router.replace('/')
            return Promise.reject(new Error('token失效了'))
        }
    }
    console.log('不会执行了');
    config.headers.Authorization=localStorage.getItem('token')  
    return config
})
export default {instance,requesets}
