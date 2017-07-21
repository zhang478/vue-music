<template>
	<div class="content" >
	 	<swiper></swiper>
		<search></search>
	 	<h2>热门推荐</h2>
	    
		<lay-out></lay-out>
	    <div class="card" style="margin:0.5rem">
	    	<div class="card-header">最新热歌:</div>
		    <div class="card-content">
		      <div class="list-block media-list">
		        <ul>
		          <li class="item-content" v-for="song_list in song_lists" @click="goSong()">
		            <div class="item-media">
		              <img :src="song_list.pic_small" width="55">
		            </div>
		            <div class="item-inner">
		              <div class="item-title-row">
		                <div class="item-title">{{song_list.title}}</div>
		              </div>
		              <div class="item-subtitle">{{song_list.author}}</div>
		            </div>
		          </li>
		        </ul> 
		      </div>
		    </div>
	 	</div>
		
		<!-- <card-list></card-list> -->

		<loading-action v-show="isLoading"></loading-action>
	</div>
		
</template>
<script>
	import Swiper from '../components/home/Swiper.vue'
	import Search from '../components/common/Search.vue'
	import LoadingAction from '../components/common/LoadingAction.vue'
	import LayOut from '../components/ele/LayOut.vue'
	import CardList from '../components/common/CardList.vue'

	export default{
		data(){
			return{
				song_lists:"",
				show_lists:"",
				isLoading:true
			}
		},
		created(){
			this.getRecommend()
		},
		components:{
			Swiper,
			Search,
			LoadingAction,
			LayOut,
			CardList
		},
		methods:{
			getRecommend:function(){
				this.$http.jsonp(
					"http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.getRecommandSongList&song_id=877578&num=10",
				).then(function (msg) {
					// console.log(msg.data.result)
					setTimeout(()=>{
						this.song_lists = msg.data.result.list
			        	this.isLoading = false
					},1000)  
			    }, function (ret) {
			        console.log("请求失败"+ret)
			    });
			},
			goSong(){
				this.$router.push({name:'Song'})
			}
			
		}

	}
</script>
<style scoped>
	
	
</style>