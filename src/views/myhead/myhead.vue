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
</style>

<template>
	<Row style="height: 100%;width: 100%;background-color: #363436">
		<Col style="height: 100%;width: 100%">
			<div class="layout-logo"></div>
			<div class="layout-nav">
				<Row>
					<Col>
						<Row>
							<Col span="4" offset="20" style="">
								<Dropdown style="margin-left: 20px" @on-click="headdown">
									<Avatar style="background-color: #9c2760" icon="ios-person" />
									<Icon type="ios-arrow-down"></Icon>
									<DropdownMenu slot="list">
										<DropdownItem name="center">个人中心</DropdownItem>
										<DropdownItem name="logout">退出登录</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</Col>
	</Row>
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

