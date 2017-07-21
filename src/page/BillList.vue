<template>
	<div class="content">
		<div class="list-block left-container" ref='menuWrapper'>
      		<ul>
        		<li class="list-group-title">全部榜单</li>
    			<li v-for="song in songLists" >
		          	<div class="item-content" v-on:click="clickBill(song.type,0)">
			            <div class="item-inner">
			              	<div class="item-title">{{song.name}}</div>
			            </div>
		          	</div>
		        </li>
        	</ul>
        </div>
        <div class="list-block right-container media-list" ref='footerWrapper'>
        	
			        <ul>
			        <li v-for="song_list in song_datas">
			         <a href="#" class="item-link item-content">
			         	 
			            <div class="item-media">
			              <img :src="song_list.pic_small" width="70">
			            </div>
			            <div class="item-inner">
			             <!--  <div class="item-title-row">
			                <div class="item-title"></div>
			                <div class="item-after">$15</div>
			              </div> -->
			              <div class="item-text">{{song_list.title}}</div>
			              <div class="item-subtitle">{{song_list.author}}</div>
			            </div>
			          
			         </a></li>
			         <!-- <div class="item-text"></div> -->
			        </ul>
			    
        	<!-- <ul>
		      <li v-for="song_list in song_datas">
		        <a href="#" class="item-link item-content">
		          <div class="item-media"><img :src="song_list.pic_small" width="78"></div>
		          <div class="item-inner">
		            <div class="item-title-row">
		              <div class="item-title">{{song_list.title}}</div>
		              <div class="item-after">$15</div>
		            </div>
		            <div class="item-subtitle">{{song_list.author}}</div>
		            <div class="item-text">此处是文本内容...</div>
		          </div>
		        </a>
		      </li>
		    </ul> -->
	    	
	 	</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import SongType from '../router/songtype.js'

	
	export default{
		data(){
			return{
				songLists:SongType,
				song_datas:"",
				menuScroll:"",
				footerScroll:""
			}
		},
		mounted(){
			this.$http.get(
				"/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList",
				{
					params:{
						type:1,
						size:20,
						offset:0
					}
				}
			).then(function (msg) {
		        this.song_datas = msg.data.song_list
		        this.$nextTick(function(){
		        	this._initScroll()
		        })
		    }, function (ret) {
		        console.log("请求失败"+ret)
		    });
		},
		methods:{
			getBillboard:function(){
				this.$http.get(
					"/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList",
					{
						params:{
							type:1,
							size:15,
							offset:0
						}
					}
				).then(function (msg) {
			        this.song_datas = msg.data.song_list
			        this.$nextTick(function(){
			        	this._initScroll()
			        })
			    }, function (ret) {
			        console.log("请求失败"+ret)
			    });
			},
			_initScroll:function(){
				this.menuScroll = new BScroll(this.$refs.menuWrapper,{
					click:true
				})
				this.footerScroll = new BScroll(this.$refs.footerWrapper,{
					startX: 0,
  					startY: 0,
					click:true
				})
			},
			clickBill:function(ty,num){
				this.$http.get(
					"/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList",
					{
						params:{
							type:ty,
							size:20,
							offset:0
						}
					}
				).then(function (msg) {
			        this.song_datas = msg.data.song_list
			        this.$nextTick(function(){
			        	this.footerScroll.refresh()
			        	this.footerScroll.scrollTo(0,0,0)
			        })
			    }, function (ret) {
			        console.log("请求失败"+ret)
			    });
			}
		}
	}
</script>

<style>
	.left-container{
		width: 35%;height: 100%;overflow: hidden;float: left;
	}
	.right-container{
		width: 65%;height: 100%;overflow: hidden;float: right;
	}
	.card,.list-block{
		margin: 0
	}
	/*.content{height: 500px;clear: both !important}*/
	
</style>