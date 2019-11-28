<style lang="scss" scoped>
	.layout-logo{
		width: 100px;
		height: 30px;
		/*background: #5b6270;*/
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}
	.layout-nav{
		width: 420px;
		margin: 0 auto;
		margin-right: 20px;
	}
	.header-box{
		height: 60px;
		width: 100%;
		margin: 0;
		padding: 0;
		/*display:inline-flex;*/
		/*.header-box-l{*/
		/*	width: 200px;*/
		/*	height: 100%;*/
		/*}*/
		/*.header-box-r{*/
		/*	height: 100%;*/
		/*	flex: 1; // 左边固定宽度, 右边自适应*/
		/*}*/
		.header-box-content{
			height: 100%;
			width: 540px;
			float: right;
			background-color: #56b6c2;
		}
	}
</style>

<template>
	<div class="header-box">
		<div class="header-box-content">

		</div>
	</div>
</template>

<script>
    export default {
        name: "myhead",
        components: {},
        data() {
            return {}
        },
	    methods:{
            headdown:function (name) {
	            if (name == "logout"){
                    localStorage.clear(); // 清空TOKEN
                    this.$router.replace({ // 跳转到登录页面
                        path: '/login',
                    })
	            }else if (name == "about"){

	            } else {

	            }
            }
	    }
    }
</script>

