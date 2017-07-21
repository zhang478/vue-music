<template>
	<div class="z-card">
		<div class="left-box">
			<img src="http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_90" width="66" height="66">
		</div>
		<div class="right-box">
			<div class="title-box">这个是标题</div>
			<div class="info-box">这里是一些说明文字，超长就要省略掉</div>
		</div>
	</div>
</template>


<style lang='scss' scoped>
	/*.z-card{position: relative;padding: 10px;background-color: #fff;height: auto;display: flex;display: -webkit-flex;}
	.z-card .left-box{padding: 10px;display: flex;display: -webkit-flex;flex-wrap: nowrap;align-items: center;}
	.z-card .left-box img{display: block;}
	.z-card .right-box{padding: 0px 5px;vertical-align: middle;}
	.z-card .right-box .title-box{line-height: 1rem;display: block}
	.z-card .right-box .info-box{line-height: 1rem;}*/
	.z-card{
		position: relative;padding: 10px;background-color: #fff;height: auto;display: flex;display: -webkit-flex;
		.left-box{
			padding: 10px;display: flex;display: -webkit-flex;flex-wrap: nowrap;align-items: center;
			img{
				display: block;
			}
		}
		.right-box{
			padding: 0px 5px;vertical-align: middle;
			.title-box{line-height: 1rem;display: block}
			.info-box{line-height: 1rem;}
		}
	}

</style>