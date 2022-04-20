.<template>
  <ul>
      <li v-for="todo in iconlist">{{todo}}</li>
  </ul>
    <el-icon><UploadFilled /></el-icon>
   <el-icon>
         <component is="user"></component>
  </el-icon>
  
</template>

<script setup>
    import {UploadFilled} from '@element-plus/icons-vue'
</script>

<style>

</style>