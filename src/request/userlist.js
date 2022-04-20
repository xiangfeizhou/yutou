import rqe from './request'
import axios from 'axios'

//左侧菜单权限
export const getMenus=()=>{
    return rqe.requesets.get('menus')
}