<template>
	<div class="page page-current bg_000">
		<div class="load-box"><img src="../../assets/loading.gif" height="81" width="85"></div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scope>
	.bg_000{
		background-color: rgba(0,0,0,0.2);z-index: 11111111
	}
	.load-box{
		position: absolute;top: 50%;left: 50%;width: 85px;height: 81px;margin-top: -40px;margin-left: -42px;
	}
</style>