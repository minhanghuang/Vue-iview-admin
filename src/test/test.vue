<!--<style lang="scss" scoped>-->

<!--</style>-->

<!--<template>-->
<!--	<div>-->
<!--		<input value="text" v-model="input_value">-->
<!--		<p>{{input_value}}</p>-->
<!--		<button @click="buttonCilck">-->
<!--			点我-->
<!--		</button>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "test",-->
<!--        components: {},-->
<!--        data() {-->
<!--            return {-->
<!--                input_value:"aaa"-->
<!--            }-->
<!--        },-->
<!--	    methods:{-->
<!--            buttonCilck(){-->
<!--                console.log("pppp");-->
<!--                console.log(this.$store.state.bankInf.name)-->
<!--	            this.$store.commit("update","kkk")-->
<!--                console.log(this.$store.state.bankInf.name)-->
<!--            }-->
<!--	    }-->
<!--    }-->
<!--</script>-->


<!--<template>-->
<!--	<div>-->
<!--		<button>父组件</button>-->
<!--		&lt;!&ndash; hello引用父元素的hello，它也可以引用message,greet，world等 &ndash;&gt;-->
<!--		<child :hello='hello'></child>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--    import Vue from 'vue'-->

<!--    var com1 = Vue.component('child',{-->
<!--        // 声明在prop中的变量可以引用父元素的数据-->
<!--        props:['hello'],-->
<!--        // 这里渲染props中声明的那个hello-->
<!--        template:'<div><p>{{ hello }}</p></div>',-->
<!--    })-->
<!--    export default {-->
<!--        name: "test",-->
<!--        data() {-->
<!--            return {-->
<!--                greet: {-->
<!--                    hello:'hello,',-->
<!--                    world: 'world',-->
<!--                },-->
<!--                message: 'message1',-->
<!--                hello: 'hello',-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
<!--<style lang="scss" scoped>-->

<!--</style>-->

<!--<template>-->
<!--	<div>-->
<!--		<form>-->
<!--			<input type="text" v-model="form.username" placeholder="用户名">-->
<!--			<input type="text" v-model="form.password" placeholder="密码">-->
<!--			<button @click="submitForm">登录</button>-->
<!--		</form>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->

<!--    export default {-->
<!--        name: "test",-->
<!--        data() {-->
<!--            return {-->
<!--                form:{-->
<!--                    username:"admin",-->
<!--                    password:"123456",-->
<!--                }-->
<!--            }-->
<!--        },-->
<!--	    methods:{-->
<!--            submitForm(){-->
<!--	            var formdata = JSON.stringify(this.form)-->
<!--	            console.log(formdata)-->
<!--            }-->
<!--	    }-->
<!--    }-->
<!--</script>-->

<style lang="scss" scoped>

</style>

<template>
	<div>
		<Form ref="formlogin" :model="form" :rules="rulelogin" inline>
			<FormItem prop="user">
				<Input type="text" v-model="form.username" placeholder="Username">
					<Icon type="ios-person-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="password">
				<Input type="password" v-model="form.password" placeholder="Password">
					<Icon type="ios-lock-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="submitForm">登录</Button>
			</FormItem>
		</Form>
	</div>
</template>

<script>

    export default {
        name: "test",
        data() {
            return {
                form:{
                    username:"admin",
                    password:"123456",
                },
                rulelogin: {
                    username: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码至少需要6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs['formlogin'].validate((valid) => {
                    if (valid) {
                        var formdata = JSON.stringify(this.form)
                        console.log(formdata)
                        // this.$Message.success('Success!');
                    } else {
                        // this.$Message.error('Fail!');
                        console.log("error")
                    }
                })
            }
        }
    }
</script>
