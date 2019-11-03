<template>
	<Form ref="loginForm" :model="form" :rules="ruleslogin" @keydown.enter.native="handleSubmit">
		<FormItem prop="username">
			<Input v-model="form.username" placeholder="请输入用户名">
				<span slot="prepend">
				<Icon :size="16" type="ios-person"></Icon>
				</span>
			</Input>
		</FormItem>
		<FormItem prop="password">
			<Input type="password" v-model="form.password" placeholder="请输入密码">
				<span slot="prepend">
				<Icon :size="14" type="md-lock"></Icon>
				</span>
			</Input>
		</FormItem>
		<FormItem>
			<Button @click="handleSubmit" type="primary" long>登录</Button>
		</FormItem>
	</Form>
</template>

<script>
export default {
	name: 'LoginForm',
	data () {
		return {
			form: {
                username: 'admin',
				password: 'cox123456'
			},
            ruleslogin:{ // 校验表单规则
                username: [ // FormItem标签中的 prop 属性预期值
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [ // FormItem标签中的 prop 属性预期值
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '6位数密码', trigger: 'blur' }
                ]
            }
		}
	},
	methods: {
		handleSubmit () {
			this.$refs.loginForm.validate((valid) => {
			    // this.$refs.loginForm.validate : 获取表单校验结果; 校验正确-> valid为True; 校验失败-> valid为False;
				if (valid) {
					this.$emit('on-success-valid', {
                        username: this.form.username, // 将this.form.username和this.form.password传给父组件的on-success-valid参数
						password: this.form.password // 并使用 username 和 password 接受
					})
				}
			})
		}
	}
}
</script>
