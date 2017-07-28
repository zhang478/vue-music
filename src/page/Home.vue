<template>
	<div class="content" >
	 	<swiper></swiper>
		<search></search>

		<lay-out></lay-out>
	    <div class="card" style="margin:0.5rem">
	    	<div class="card-header">最新热歌推荐</div>
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
				isLoading:true
			}
		},
		created(){
			// this.getRecommend()
			this.getMV()
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
				this.$http.get(
					"/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.getRecommandSongList&song_id=877578&num=10",
				).then(function (msg) {
					setTimeout(()=>{
						this.song_lists = msg.data.result.list
						this.isLoading = false
					},1000)
			    }.bind(this)).catch(function(err){
				  	console.log(err)
				});
			},
			goSong(){
				this.$router.push({name:'Song'})
			},
			getMV(){
				this.$http.get("/api//mv/detail", {
					    params: {
					      	id: 12345
					    }
				  	}
				).then(function (msg) {
					console.log(msg)
					// setTimeout(()=>{
					// 	this.song_lists = msg.data.result.list
					// 	this.isLoading = false
					// },1000)
			    }.bind(this)).catch(function(err){
				  	console.log(err)
				});
			}

		}

	}
</script>
<style scoped>


</style>
