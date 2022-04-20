<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <div>
    123
  </div>
  <router-view/>
  <About></About> -->
  <!-- <About :usernmae="username" age="18" @shwo="shwojkl" ref="aboutRef"></About>
  <button @click="hello">拿子组件方法或属性</button>
  <span>父组件里的username:{{username}}</span> -->
  <!-- <router-view>
    <template #default>
      123
    </template>
  </router-view> -->
 
 
  <!-- <div class="box">
    <Slot :userlist="userList">

    <template #default="{it}">

      <el-button type="primary" size="small">删除</el-button>
    </template>
  </Slot>
   <div class="affix-container">
    <el-affix :offset="0" >
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix>
  </div>
  </div> -->

    <router-view></router-view>

   
</template> 

<script setup>
 import About from './views/About.vue'
 import Slot from './views/Slot.vue'
 import{ref} from 'vue'
  const aboutRef=ref();
 //自定义事件
  const shwojkl=(e)=>{
    alert(e)
  }
  const username=ref('王五')
  function hello(){
    aboutRef.value.hello()
    console.log(aboutRef.value.name);
  }
  const userList=[
    {name:'张三',age:18,Position:'法外狂徒'},
    {name:'李四',age:20,Position:'公交司机'},
    {name:'王五',age:22,Position:'绝命毒师'},
    {name:'王五',age:22,Position:'绝命毒师'},
    {name:'张三',age:18,Position:'法外狂徒'},
    {name:'李四',age:20,Position:'公交司机'},
   
  ]
  const del=(it)=>{
    alert(it.name);
  }
</script>
<style  lang="less" >
  // .affix-container{
  //   //  text-align: center;
   
  //   margin-right: 100px;
  //   margin-top: 50px;
  // // height: 400px;
  // border-radius: 4px;
  // // background: var(--el-color-primary-light-9);
  // }
  // .box{
  //   display: flex;
  //   // flex-direction: row-reverse;
  //   justify-content:space-around;
  // }
  // .idd{
  //   height: 100%;
  // }
 #app{
   height: 100vh;
 }
</style>
