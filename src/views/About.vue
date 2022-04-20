<template>
  <div class="about">
    <h1>{{usernmae}}</h1>
    <h1>{{age}}</h1>
  </div>
  <input type="text" v-model="todo.userList.name">
  <input type="checkbox"  id="1">
  <label for="1">按钮</label>
  <!-- <h3>计算属性:{{plusOne}}</h3> -->
  <button @click="shwoBox">按钮</button>
</template>
<script setup>

import { get } from 'http'
import{ref,computed,watch,reactive} from 'vue'
  const pro=defineProps({
    usernmae:{
      type:String,
      default:'张三'
    },
    age:String
  })
  const todo=reactive({
    name:'',
    age:20,
    userList:{
      name:'小向'
    }
  })
  const name='法外狂徒'
  //自定义事件
  const emits=defineEmits(['shwo'])

  //按钮点击事件
  const shwoBox=()=>{
    pro.usernmae='李四'
    emits('shwo','我是子元素给父亲传递的话');
  }
  function hello(){
    console.log('hello word',name)
  }

  defineExpose({
    hello,name
  })
  //计算属性
  // let shu=computed(()=>{
  //   // return true ? '真' : '假'
  //  get:()=>{
  //    return true
  //  }
  //  set:(val)=>{
  //    console.log(val);
  //    return false
  //  }
  // })
  const count=ref(1);
  // const plusOne=computed(()=>{
  //   set:()=>{
  //     return count.value+1
  //   }
  //   set:(val)=>{
  //     count.value=val+1
  //   }
  // //  return count.value+1
  // })
  // plusOne.value=1
  //  console.log(count.value);

  //watch侦听器
  watch(todo,(newValue,oldValue)=>{
    console.log(newValue);
  })
</script>

<style lang="less" scoped>

</style>
