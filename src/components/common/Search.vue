<template>
	<div class="searchbar row" style="background-color: rgba(24,33,254,0.4);padding: 0.4rem 0.5rem" v-on:click="ToSearch()">
	    <div class="search-input col-80">
	      	<label class="icon icon-search" for="search"></label>
	      	<input type="search" id='search' placeholder='输入关键字...'/>
	    </div>
	    <a class="button button-fill button-primary col-20">搜索</a>
  	</div>
</template>

<script>
	export default {
		methods:{
			ToSearch:function(){
				this.$router.push({ path: '/search' })
			}
		}
	}
	
</script>
