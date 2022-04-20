.<template>
  登入界面
  <el-button type="primary" @click="userLogin">登入</el-button>
</template>

<script setup>
    import {dengru}  from '../request/login.js'
    const userLogin=async()=>{
      const res=await dengru({username:'admin',password:'123456'});
      console.log(res);
    }
</script>

<style>

</style>