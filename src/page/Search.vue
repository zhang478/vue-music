<template>
<div class="page page-current">
	<div class="bar bar-nav">
	  	<div class="searchbar row">
	  		<a class="icon icon-left pull-left" v-on:click="goBack()"></a>
		    <div class="search-input col-75">
		      	<input type="search" id='search_song' placeholder='搜索歌手、歌曲、MV...'/>
		    </div>
		    <a class="button button-fill button-primary col-15" v-on:click="searchSong()"><span class="icon icon-search"></span></a>
	  	</div>
	</div>
	<div class="content" v-if="isShow">
		<div class="card">
	    	<div class="card-header">
	    		<div class="buttons-tab" style="width:100%">
				    <button class="tab-link active button" id="song_btn" v-on:click="showPanel('song')">歌曲</button>
				    <button class="tab-link button" id="album_btn" v-on:click="showPanel('album')">专辑</button>
			  	</div>
	    	</div>
		    <div class="card-content">
		      <div class="list-block media-list">
		      	<ul v-if="isSong">
		          	<li class="item-content" v-for="song in song_allData.song">
			            <div class="item-inner">
			              	<div class="item-title-row">
			                	<div class="item-title">{{song.songname}}</div>
			              	</div>
			              	<div class="item-subtitle">{{song.artistname}}</div>
			            </div>
		          	</li>
		        </ul>

		        <ul v-if="isAlbum">
		          <li class="item-content" v-for="albumitem in song_allData.album">
		            <div class="item-media">
		              <img :src="albumitem.artistpic" width="55">
		            </div>
		            <div class="item-inner">
		              <div class="item-title-row">
		                <div class="item-title">{{albumitem.albumname}}</div>
		              </div>
		              <div class="item-subtitle">{{albumitem.artistname}}</div>
		            </div>
		          </li>
		        </ul>
		      </div>
		    </div>
	 	</div>
	</div>
</div>

</template>
<script>
	export default{
		data(){
			return{
				isShow:false,
				song_allData:'',
				song_lists:"",
				isAlbum:false,
				isSong : true,
			}
		},
		created(){
			this.searchSong()
		},
		methods:{
			goBack:function(){
				this.$router.go(-1)
			},
			searchSong:function(){
				// var que_value = document.getElementById('search_song').value
			    this.$http.get(
			    	'/ting?format=json&calback=&from=webapp_music&method=baidu.ting.search.catalogSug&query=海阔天空', 
			    	// "http://music.163.com/api/search/get/?type=1&limit=10&s=海阔天空"
			    	// {
			    	// 	params :{
			    	// 		// query:que_value
			    	// 		query:"小幸运"
			    	// 	}
			    	// },
			    	// { credentials: true }
		    	).then(function (msg) {
		    		console.log(msg.data)
			        this.song_allData = msg.data
			        this.isShow = true
			    }.bind(this)).catch(function(err){
			    	console.log(err)
			    });
			},
			searchSonger:function(){
				this.$http.get(
					'/ting?format=json&calback=sa&from=webapp_music&method=baidu.ting.artist.getInfo',
					{
			    		params :{
			    			tinguid:210134052
			    		}
			    	}
				).then(function (msg) {
					// console.log(msg.data)
			        // this.song_lists = msg.data.result.list
			    }.bind(this)).catch(function(err){
			    	console.log(err)
			    });
			},
			showPanel:function(p){
				if(p == "song"){
					this.isSong = true
					this.isAlbum = false
					document.getElementById('song_btn').setAttribute("class","tab-link active button")
					document.getElementById('album_btn').setAttribute("class","tab-link button")
				}else{
					this.isSong = false
					this.isAlbum = true
					document.getElementById('album_btn').setAttribute("class","tab-link active button")
					document.getElementById('song_btn').setAttribute("class","tab-link button")
				}
			}
		}
	}
</script>
<style>
	.bar .searchbar{
		background: none;
	}
	.bar{background: rgba(0,0,0,.1);}
	.bar .button{
		top: 0;
	}
	.bar .icon{
		padding-top: 0.1rem
	}
	.card{
	}
</style>