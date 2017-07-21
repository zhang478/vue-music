<template>
    <div id="app" class="page page-current">
        <top-bar v-if="this.$route.path=='/search'?false:true"></top-bar>
        <transition name='fade'>
          <keep-alive>
            <router-view class='animated' ></router-view>
          </keep-alive>
            
        </transition>

    </div>
</template>

<script>
import TopBar from './components/common/TopBar.vue'


export default {
    name: 'app',
    components:{
        TopBar,
    },
    created(){
        
    },
    // watch: {
    //     '$route' (to, from) {
    //         const toDepth = to.path.split('/').length
    //         const fromDepth = from.path.split('/').length
    //         this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    //     }
    // },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;

}
</style>
