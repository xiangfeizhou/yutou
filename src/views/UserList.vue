.<template>
  <div class="common-layout">
  <el-container class="home-container">
      <!-- header头部 -->
      <el-header>
          <div>后台管理系统</div>
          <el-button type="primary">退出</el-button>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container class="jkl">
          <!-- 菜单 -->
          <el-aside width="200px">
              <!-- 菜单 -->
              <el-menu
        :default-active="getPath"
        router
        background-color="#eceff2"
      >
          <el-sub-menu :index="item.id" v-for="(item,index) in munusList" :key="item.id">
            <template #title>
                <el-icon>
                <component :is="iconList[index]"></component>

                </el-icon>

                <span>{{item.authName}}</span>
            </template>

            <el-menu-item :index="'/'+it.path" v-for="it in item.children" :key="it.id" @click="menu_item(it.path)">
            <el-icon><IconMenu /></el-icon>
                <span>{{it.authName}}</span>
            </el-menu-item>
          </el-sub-menu>
      </el-menu>
          </el-aside>
          <!-- 主体部分 -->
          <el-main>
              <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
  
    </div>
</template>

<script setup>
    import{ref,onMounted,computed} from 'vue'
    import{getMenus} from '../request/userlist'
    import{Menu as IconMenu} from '@element-plus/icons-vue'
    //存储左侧菜单权限数据列表
    const munusList=ref({});
    //icon图标
    const iconList=ref(['user','setting','shop','tickets','PieChart'])
    //获取菜单列表
    const getMenuList=async()=>{
       const {data:res} =await getMenus();
       munusList.value=res.data;
       console.log('菜单权限',res);
    }

    onMounted(() => {
      getMenuList();  
    })

    const menu_item=(path)=>{
        //菜单地址存储在localstorage中,用于页面刷新也能保持打开刷新前的菜单
        localStorage.setItem('path','/'+path)
    }
    //计算属性获取localstroage中的路径
    let getPath=computed(()=>{
        return localStorage.getItem('path') || '/users'
    })
</script>

<style lang="less" scoped>

    .common-layout{
        height: 100%;
    }
    .el-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #d1d2d8;
    }
    .el-aside{
        // background-color: #eceff2;
        background-color: #eceff2;

    }
    .home-container{
        height: 100%;
    }
    .el-menu{
        height: 100%;
        background-color: #eceff2;
    }
    .el-main{
        background-color: #f5f5f5;
    }
</style>