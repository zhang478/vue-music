<template>
	<swiper :options="swiperOption">
	    <swiper-slide v-for="slide in swiperSlides" key>
	    	<img :src="slide.imgsrc" style="width:100%">
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		components: {
		    swiper,
		    swiperSlide
	  	},
	  	data(){
	  		return{
				swiperSlides:[
					{imgsrc:"../../static/images/baner1.png"},
					{imgsrc:"../../static/images/baner2.png"},
					{imgsrc:"../../static/images/baner3.png"},
					{imgsrc:"../../static/images/baner4.png"},
					{imgsrc:"../../static/images/baner5.png"}
				],
				swiperOption: {
			        initialSlide: 0,  //初始化索引
			        autoplay: 3000,     //自动切换时间间隔
			        speed: 800,    //滑动速度
          			direction : 'horizontal',   //方向水平或垂直
			        loop: true,    //
			        autoplayDisableOnInteraction:false,   //用户操作swiper后是否禁止autoplay，默认true 禁止
			        pagination: '.swiper-pagination'
			    }
	  		}
	  	}
	}
</script>
<style>
	.swiper-pagination-bullet{
		background-color: #fff;
		opacity:1;
	}
	.swiper-pagination-bullet-active{
		background-color: #007aff;
	}
</style>