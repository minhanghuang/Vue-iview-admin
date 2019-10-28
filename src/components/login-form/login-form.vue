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
				password: ''
			},
            ruleslogin:{
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '6位数密码', trigger: 'blur' }
                ]
            }
		}
	},
	methods: {
		handleSubmit () {
			this.$refs.loginForm.validate((valid) => {
			    console.log(valid)
				if (valid) {
					this.$emit('on-success-valid', {
                        username: this.form.username,
						password: this.form.password
					})
				}
			})
		}
	}
}
</script>
