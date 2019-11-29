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
		.header-box-content{
			height: 100%;
			width: 540px;
			float: right;
			background-color: #56b6c2;
			display: inline-flex;
			justify-content: flex-end;
			.menu{
				height: 100%;
				width: 160px;
				background-color: white;
				.menu-box{
					margin-left: 10px;
					padding: 0 20px 0 15px;
					height: inherit;
					.menu-box-img{
						height: 100%;
						width: 100%;
						padding-right: 26px;
						.menu-box-img-con{
							height: 100%;
							padding: 0;
							margin: 0;
							width: 100%;
							position: relative;
							.menu-box-img-con-box{
								height: 30px;
								width: 30px;
								position: absolute;
								top: 15px;
								.menu-box-img-con-data{
									background-image: url("../../assets/logo.png");
									height: 30px;
									width: 30px;
									background-position: center center;
									background-size: cover;
									border-radius: 15px;
								}
							}
							.menu-box-name-con-box{
								width: 45px;
								height: 100%;
								padding-left: 44px;
								text-align: center;
								.menu-box-name-con-data{
									height: 30px;
									width: 60px;
									position: absolute;
									top: 18px;
									font-size: 18px;
								}
							}
						}
					}
				}
			}
			.menu:hover{
				background-color: #e3e6e8; // 背景变灰色
				.my-icon-down{
					-webkit-transform: rotate(180deg) // 箭头旋转180度
				}
			}
		}
	}
	.mydropdown >>> .ivu-dropdown-rel{
		height: 60px;
		width: 100%;
	}
	.mydropdown >>> .ivu-select-dropdown{
		 /*height: 60px;*/
		 width: 150px;
	 }
</style>

<template>
	<div class="header-box">
		<div class="header-box-content">
			<div class="search">
				search
			</div>
			<div class="msg">
				msg
			</div>
			<div class="bell">
				bell
			</div>
			<div class="github">
				github
			</div>
			<div class="help">
				help
			</div>
			<Dropdown class="mydropdown" @on-click="click_dropdown">
				<div class="menu">
					<div class="menu-box">
						<div class="menu-box-img">
							<div class="menu-box-img-con">
								<div class="menu-box-img-con-box">
									<div class="menu-box-img-con-data">
									</div>
								</div>
								<div class="menu-box-name-con-box">
									<div class="menu-box-name-con-data">
										Cox
										<Icon type="ios-arrow-down" class="my-icon-down"></Icon>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<DropdownMenu slot="list">
					<DropdownItem name="person">
						<i class="el-icon-user" style="font-size: 18px;margin-right: 10px"></i>
						个人中心
					</DropdownItem>
					<DropdownItem name="logout">
						<Icon type="md-log-out" size="18" style="margin-right: 10px" />
						退出登录
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
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
            click_dropdown:function (name) {
	            if (name == "logout"){
                    localStorage.clear(); // 清空TOKEN
                    this.$router.replace({ // 跳转到登录页面
                        path: '/login',
                    })
	            }else if (name == "person"){
                    this.$router.push("person");
                } else {

	            }
            }
	    }
    }
</script>

