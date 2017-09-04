<template>
	<div class="content" style="overflow: hidden">
		<!-- <div class="content-padded">
			<audio src="http://m2.music.126.net/m/3412884129661211.mp3"></audio>
		</div> -->
		<!-- <div>{{count}}</div>
		<button class="btn" v-on:click='addNumber()'>add</button> -->

		<iframe src="http://music.163.com/m/song/347230" style="width:100%;height: 100%;border:none">
			
		</iframe>

	</div>
</template>
<script >
	import $ from 'zepto'
	export default {
		data(){
			return{
				song:'http://m2.music.126.net/BLr1ikmsA48tR_b1SRUqkw==/3412884129661211.mp3'
			}
		},
		created(){
			this.getSong()
			this.$store.commit("cirnumber",20)
			$('.u-footer').hide()
			
		},
		computed:{
			count(){
				return this.$store.state.number
			}
		},
		methods:{
			getSong:function(){
				this.$http.get(
					// 'http://s.music.163.com/search/get/?type=1&limit=5&s=海阔天空'
					"/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.playAAC&songid=877578"
				).then(function(msg){
					// console.log(msg.data)
					// this.song = msg.data
					
				},function(ret){
					console.log("shibai"+ret)
				})
			},
			addNumber(){
				var num = this.$store.state.number+1
				this.$store.commit("cirnumber",num)
				// this.$store.commit("cirnumber",20)
			}
		}
	}
</script>
<style>
	.u-footer{
		display: none !important
	}
</style>