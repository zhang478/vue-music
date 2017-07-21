<template>
	<div class="content" id="content-con">
		<loading-action v-show='isloading'></loading-action>
		<div class="list-block menu-wrapper pull-left media-list" id="wrapper" ref="menuWraper" >
			<div>
				<div class="content-padded text-center" v-show='isdown'>下拉刷新中</div>
				<ul>
			      <li v-for="song_list in song_lists">
			        <a href="#" class="item-link item-content">
			          <div class="item-media"><img :src="song_list.pic_small" width="65"></div>
			          <div class="item-inner">
			            <div class="item-text">{{song_list.title}}</div>
			            <div class="item-subtitle">{{song_list.author}}</div>
			          </div>
			        </a>
			      </li>
			      
			    </ul>
			    <div class="content-padded text-center showLoad" id="showload" > 
						
			    </div>
			</div>
		</div>
	</div>
</template>
 <script>

 	import BScroll from 'better-scroll'
 	import LoadingAction from '../components/common/LoadingAction'

 	export default {
 		data(){
			return{
				audiourl:"",
				songData:"",
				song_lists:[],
				menuScroll:'',
				isdown:false,
				isload:false,
				isloading:true,
				isshowdata:false
			}
 		},
 		created(){
			// this.playAudio()
			this.getRecommend()
 		},
 		components:{
			LoadingAction
 		},
 		methods:{
 			
 			getRecommend:function(){
				this.$http.get(
					"/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.getRecommandSongList&song_id=877578&num=15",
				).then(function (msg) {
					
			        setTimeout(()=>{
			        		this.song_lists = msg.data.result.list
			        		this.$nextTick(function(){
			        			this.isloading = false
			        			document.getElementById('showload').innerHTML = '加载更过'
								this._initScroll()
							})	
						},800)
			    }.bind(this)).catch(function(err){
			    	console.log(err)
			    });
			},
			_initScroll:function () {         // 2 函数声明
         		this.menuScroll = new BScroll(this.$refs.menuWraper, {
         			click:true
         		})
         		this.menuScroll.on('touchend', (pos) => {
			                // 下拉动作
	                if (pos.y > 50) {
	                  // console.log("刷新中")
	                  this.downLoad()
	                }
	                if(pos.y < (this.menuScroll.maxScrollY + 20)){
	                	document.getElementById('showload').innerHTML = '加载中……'
						this.upload()
	                }
	            })

      		},
      		downLoad(){
      			this.isdown = true
				this.$http.get(
					"/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.getRecommandSongList&song_id=877578&num=2",
				).then(function (msg) {
					setTimeout(() => {
						var data = msg.data.result.list
						for(var i=0;i<data.length;i++){
							this.song_lists.unshift(data[i])
						}
						this.isdown = false
				        this.$nextTick(function(){
							this.menuScroll.refresh()
						})	
					},1500)
			        
			    }.bind(this)).catch(function(err){
			    	console.log(err)
			    });
      		},
      		upload(){
				this.isload = true
				this.$http.get(
					"/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.getRecommandSongList&song_id=877578&num=3",
				).then(function (msg) {
					setTimeout(() => {
						var data = msg.data.result.list
						for(var i = 0;i<data.length;i++){
							this.song_lists.push(data[i])
						}
						this.isload = false
						document.getElementById('showload').innerHTML = '加载更多'
				        this.$nextTick(function(){
							this.menuScroll.refresh()
						})	
					},1000)
			        
			    }.bind(this)).catch(function(err){
			    	console.log(err)
			    });
      		}
 		}
 	}
 </script>
 <style scope>
 	audio{
 		width: 100%;
 	}
 	.wrapper{
 		height: 500px;overflow: hidden;
 	}
 	.container{
 		position: relative;
 		width: 100%;height: 100%;
 		overflow: auto
 	} 
 	.menu-wrapper{
 		width: 100%;height: 100%;overflow: hidden;background-color: #fff
 	}
 	
 	.foods-wrapper{
 		width: 100%;float: right;height: 100%;overflow: hidden;
 	}
 	.card{margin: 0;box-shadow: none}
 	.list-block{margin: 0}
 	.showLoad{width: 100%;height: 40px;line-height: 40px;}
 	.fade-enter-active, .fade-leave-active {
  		transition: opacity 1s;
  		transition: height 1s
	}
 	.fadedown-enter, .fadedown-leave-to /* .fade-leave-active in <2.1.8 */ {
  		opacity: 0;
  		height: 0
  		
	}
 </style>
