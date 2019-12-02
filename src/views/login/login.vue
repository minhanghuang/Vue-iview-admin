<style lang="less">
	.login{
		width: 100%;
		height: 100%;
		position: relative;
		&-con{
			position: absolute;
			right: 45%;
			top: 50%;
			transform: translateY(-60%);
			width: 300px;
			&-header{
				font-size: 16px;
				font-weight: 300;
				text-align: center;
				padding: 30px 0;
			}
			.form-con{
				padding: 10px 0 0;
			}
			.login-tip{
				font-size: 10px;
				text-align: center;
				color: #c3c3c3;
			}
		}
	}
</style>

<template>
	<div class="login">
		<div class="login-con">
			<Card icon="log-in" title="欢迎登录">
				<div class="form-con">
					<login-form
						@on-success-valid="handleSubmit"
					>
					</login-form>
					<p class="login-tip">输入任意用户名和密码即可@Beta</p>
				</div>
				<Spin size="large" fix v-if="loadding"></Spin>
			</Card>
		</div>
	</div>
</template>

<script>
	import LoginForm from '@/components/login_form/loginform' // 驼峰命名法
	export default {
	    data(){
	      return{
              loadding: false,
	      }
	    },
		components: {
			LoginForm
	    },
		methods:{
            handleSubmit({username, password}){
                this.loadding = true; // 打开 loadding
                this.$api.api_all.post_user_login_api(
                    username,password
                ).then((response)=>{
                    this.$Message.success(response.data.msg);
                    localStorage.setItem('TOKEN', JSON.stringify(response.data.results.TOKEN)); // 设置TOKEN
                    localStorage.setItem('username', JSON.stringify(response.data.results.username)); // 设置username
                    this.loadding = false; // 打开 loadding
                    this.$router.push("/"); // 跳转到首页
                    setTimeout(() =>{
                        this.$Notice.info({
                            duration: 5, // 消息显示时间 s
                            title: '服务器',
                            desc: "服务器配置比较低,访问会有些卡顿😭😭",
                        });
                        this.$Notice.info({
                            title: '博客后台管理系统',
                            desc: "喜欢的话,给它点个star",
                            render: h => {
                                return h('span', [
                                    '这里是我的博客后台管理系统,喜欢的话给它',
                                    h('i',{class:"ivu-icon ivu-icon-logo-github",style:"font-size: 23px;"},),
                                    '个star吧 ! 😊',
                                    '👉',
                                    h('a',{attrs:{href:"https://github.com/Coxhuang/iview-admin",target:"_blank"}},"点我点我"),
	                                '👈👈',
                                ])
                            }
                        });
                    },1000);
                }).catch((error)=>{
                    this.loadding = true; // 打开 loadding
                    this.$Message.error(error.response.data.msg);
                })
            }
		}
	}
</script>

