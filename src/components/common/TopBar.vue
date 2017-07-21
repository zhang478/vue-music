<template>
	<header class="bar bar-nav">
			<div class="buttons-tab">
			    <router-link :to="{ name: 'Home'}" class="tab-link button" exact>推荐</router-link>
			    <router-link :to="{ name: 'Bill'}" class="tab-link button">榜单</router-link>
			    <router-link to="/play" class="tab-link button">歌单</router-link>
			    <router-link to="/search" class="tab-link button">搜索</router-link>
		  	</div>
	</header>
</template>
<script>
	
</script>
<style scoped>
	.bar{
		padding: 0;
		/*background-color: rgba(98,34,25,0.6);*/
	}
	.bar .button{
		top: 0;
		line-height: 2.2rem
	}
	.buttons-tab{
		background-color: rgba(233,123,98,0.6);
	}
	.buttons-tab:after{
		display: none;
	}
	.router-link-active{
		color: #0894ec;
	    border-color: #0894ec;
	    z-index: 100;
	}
	.bar:after{
		display: none;
	}
	.buttons-tab .button{
		height: 2.2rem;
		/*border-bottom: 0.1rem solid #0894ec;*/
	}
</style>