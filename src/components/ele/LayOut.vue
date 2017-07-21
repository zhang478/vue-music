<template>
  <div class="hello">
    <h2 class="hh-bd">热门推荐</h2>
    <el-button @click=''>新歌榜</el-button>  
    <el-button @click='' type="primary">热歌榜</el-button>  
    <el-button @click='' type="text">摇滚榜</el-button>  
  </div>  
</template>

<script>
  export default {  
  name: 'hello',  
  data () {  
    return {  
      msg: 'Welcome to Your Vue.js App'  
    }  
  },
    methods:{
        goPage(){
            this.$router.push({path:'/home'})
        }
    },
}  
</script>
<style lang="scss" scoped>
$hh-lineheight: 1.5rem;
.hh-bd{
    line-height: $hh-lineheight;
    color:red;
}
</style>  