.<template>
    <!-- <table>
        <thead>
            <tr>
            <th>序号</th>
            <th>标题</th>
            <th>内容</th>
            <th>操作</th>
            </tr>           
        </thead>
        <tbody>
            <tr v-for="(item,index) in userlist" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>{{item.Position}}</td> 
                <td>
                    <slot :it="item">{{name}}</slot>
                    
                </td>
            </tr>
        </tbody>
    </table> -->
    <el-button type="primary" @click="login">登入</el-button>
</template>

<script setup>
    import{ref} from 'vue'
    import log from '../request/login'
    const props=defineProps({
       userlist:Array,
       
    })
    const name=ref('小向');

    //登入操作
    const login=()=>{
       log.dengru({username:'admin',password:'123456'}).then((res)=>{
           console.log(res.data);
       }).catch((error)=>{
           console.log(error);
       })
       
    }
</script>

<style>

</style>