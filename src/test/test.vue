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

<!--<style lang="scss" scoped>-->

<!--</style>-->

<!--<template>-->
<!--	<div>-->
<!--		<Form ref="formlogin" :model="form" :rules="rulelogin" inline>-->
<!--			<FormItem prop="user">-->
<!--				<Input type="text" v-model="form.username" placeholder="Username">-->
<!--					<Icon type="ios-person-outline" slot="prepend"></Icon>-->
<!--				</Input>-->
<!--			</FormItem>-->
<!--			<FormItem prop="password">-->
<!--				<Input type="password" v-model="form.password" placeholder="Password">-->
<!--					<Icon type="ios-lock-outline" slot="prepend"></Icon>-->
<!--				</Input>-->
<!--			</FormItem>-->
<!--			<FormItem>-->
<!--				<Button type="primary" @click="submitForm">登录</Button>-->
<!--			</FormItem>-->
<!--		</Form>-->
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
<!--                },-->
<!--                rulelogin: {-->
<!--                    username: [-->
<!--                        { required: true, message: '用户名不能为空', trigger: 'blur' }-->
<!--                    ],-->
<!--                    password: [-->
<!--                        { required: true, message: '密码不能为空', trigger: 'blur' },-->
<!--                        { type: 'string', min: 6, message: '密码至少需要6位', trigger: 'blur' }-->
<!--                    ]-->
<!--                }-->
<!--            }-->
<!--        },-->
<!--        methods:{-->
<!--            submitForm(){-->
<!--                this.$refs['formlogin'].validate((valid) => {-->
<!--                    if (valid) {-->
<!--                        var formdata = JSON.stringify(this.form)-->
<!--                        console.log(formdata)-->
<!--                        // this.$Message.success('Success!');-->
<!--                    } else {-->
<!--                        // this.$Message.error('Fail!');-->
<!--                        console.log("error")-->
<!--                    }-->
<!--                })-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<template>-->
<!--	<div>-->
<!--		<div @click="btnClick()">点击</div>-->
<!--		<div @click="btnClick2()">POST点击</div>-->
<!--		<div @click="btnClick3()">GET点击</div>-->
<!--		<div @click="btnClick4()">POST点击</div>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: 'HelloWorld',-->
<!--        data () {-->
<!--            return {}-->
<!--        },-->
<!--        methods:{-->
<!--            // btnClick:function(){-->
<!--            //     this.axios.get('/api/user/list-user/').then((response)=>{-->
<!--            //         console.log(response.data)-->
<!--            //     }).catch((error)=>{-->
<!--            //         console.log(error)-->
<!--            //     })-->
<!--            // },-->
<!--            // btnClick2:function(){-->
<!--            //     this.axios.post(-->
<!--            //         '/api/user/create-user/',-->
<!--            //         {-->
<!--            //             "username" : "cox2",-->
<!--            //             "password" : "cox123456",-->
<!--            //         }-->
<!--            //     ).then((response)=>{-->
<!--            //         console.log(response.data)-->
<!--            //     }).catch((error)=>{-->
<!--            //         console.log(error.response.status)-->
<!--            //     })-->
<!--            // },-->
<!--            btnClick3:function(){-->
<!--                this.$api.api_all.get_test_list().then((response)=>{-->
<!--                    console.log(response.data)-->
<!--                }).catch((error)=>{-->
<!--                    console.log(error.response.status)-->
<!--                })-->
<!--            },-->
<!--            btnClick4:function(){-->
<!--                this.$api.api_all.create_test(-->
<!--                    "小肥柴"-->
<!--                ).then((response)=>{-->
<!--                    console.log(response.data)-->
<!--                }).catch((error)=>{-->
<!--                    console.log(error.response.status)-->
<!--                })-->
<!--            },-->
<!--        },-->
<!--    }-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->

<!--</style>-->


<!--<template>-->
<!--	<Table :columns="columns" :data="data">-->
<!--		<template slot-scope="{ row, index }" slot="name">-->
<!--			<Input type="text" v-model="editName" v-if="editIndex === index" />-->
<!--			<span v-else>{{ row.name }}</span>-->
<!--		</template>-->

<!--		<template slot-scope="{ row, index }" slot="age">-->
<!--			<Input type="text" v-model="editAge" v-if="editIndex === index" />-->
<!--			<span v-else>{{ row.age }}</span>-->
<!--		</template>-->

<!--		<template slot-scope="{ row, index }" slot="birthday">-->
<!--			<Input type="text" v-model="editBirthday" v-if="editIndex === index" />-->
<!--			<span v-else>{{ getBirthday(row.birthday) }}</span>-->
<!--		</template>-->

<!--		<template slot-scope="{ row, index }" slot="address">-->
<!--			<Input type="text" v-model="editAddress" v-if="editIndex === index" />-->
<!--			<span v-else>{{ row.address }}</span>-->
<!--		</template>-->

<!--		<template slot-scope="{ row, index }" slot="action">-->
<!--			<Button @click="handleEdit(row, index)">操作</Button>-->
<!--		</template>-->
<!--	</Table>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                columns: [-->
<!--                    {-->
<!--                        title: '姓名',-->
<!--                        slot: 'name'-->
<!--                    },-->
<!--                    {-->
<!--                        title: '年龄',-->
<!--                        slot: 'age'-->
<!--                    },-->
<!--                    {-->
<!--                        title: '出生日期',-->
<!--                        slot: 'birthday'-->
<!--                    },-->
<!--                    {-->
<!--                        title: '地址',-->
<!--                        slot: 'address'-->
<!--                    },-->
<!--                    {-->
<!--                        title: '操作',-->
<!--                        slot: 'action'-->
<!--                    }-->
<!--                ],-->
<!--                data: [-->
<!--                    {-->
<!--                        name: '王小明',-->
<!--                        age: 18,-->
<!--                        birthday: '919526400000',-->
<!--                        address: '北京市朝阳区芍药居'-->
<!--                    },-->
<!--                    {-->
<!--                        name: '张小刚',-->
<!--                        age: 25,-->
<!--                        birthday: '696096000000',-->
<!--                        address: '北京市海淀区西二旗'-->
<!--                    },-->
<!--                    {-->
<!--                        name: '李小红',-->
<!--                        age: 30,-->
<!--                        birthday: '563472000000',-->
<!--                        address: '上海市浦东新区世纪大道'-->
<!--                    },-->
<!--                    {-->
<!--                        name: '周小伟',-->
<!--                        age: 26,-->
<!--                        birthday: '687024000000',-->
<!--                        address: '深圳市南山区深南大道'-->
<!--                    }-->
<!--                ],-->
<!--                editIndex: -1,  // 当前聚焦的输入框的行数-->
<!--                editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁-->
<!--                editAge: '',  // 第二列输入框-->
<!--                editBirthday: '',  // 第三列输入框-->
<!--                editAddress: '',  // 第四列输入框-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            handleEdit (row, index) {-->
<!--                this.editName = row.name;-->
<!--                this.editAge = row.age;-->
<!--                this.editAddress = row.address;-->
<!--                this.editBirthday = row.birthday;-->
<!--                this.editIndex = index;-->
<!--            },-->
<!--            handleSave (index) {-->
<!--                this.data[index].name = this.editName;-->
<!--                this.data[index].age = this.editAge;-->
<!--                this.data[index].birthday = this.editBirthday;-->
<!--                this.data[index].address = this.editAddress;-->
<!--                this.editIndex = -1;-->
<!--            },-->
<!--            getBirthday (birthday) {-->
<!--                const date = new Date(parseInt(birthday));-->
<!--                const year = date.getFullYear();-->
<!--                const month = date.getMonth() + 1;-->
<!--                const day = date.getDate();-->
<!--                return `${year}-${month}-${day}`;-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->

<!--<template>-->
<!--	<div id="main">-->
<!--		<mavon-editor-->
<!--			v-model="value"-->
<!--			:toolbarsFlag="true"-->
<!--		>-->
<!--		</mavon-editor>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "blogdetail",-->
<!--        components: {},-->
<!--        data() {-->
<!--            return {-->
<!--                value:"> app",-->
<!--            }-->
<!--        },-->
<!--    }-->
<!--</script>-->

<!--<template>-->
<!--	<div>-->
<!--		<Upload-->
<!--				:show-upload-list="false"-->
<!--				:default-file-list="false"-->
<!--				:format="['jpg','jpeg','png']"-->
<!--				:max-size="2048"-->
<!--				:on-success="uploadSuccess"-->
<!--				:on-error="uploadError"-->
<!--				:on-format-error="handleFormatError"-->
<!--				:on-exceeded-size="handleMaxSize"-->
<!--				:before-upload="handleBeforeUpload"-->
<!--				:data="data_img"-->
<!--				multiple-->
<!--				type="drag"-->
<!--				action="http://127.0.0.1:19900/api/test/create-imag/"-->
<!--				style="display: inline-block;width:58px;"-->
<!--		>-->
<!--			<div style="width: 58px;height:58px;line-height: 58px;">-->
<!--				<Icon type="ios-camera" size="20"></Icon>-->
<!--			</div>-->
<!--		</Upload>-->
<!--	</div>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                data_img:{"a":"A"}-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            uploadSuccess (response, file, fileList) { // 文件上传成功时的钩子，返回字段为 response, file, fileList-->
<!--                this.$Message.success("上传成功");-->
<!--            },-->
<!--            uploadError(error, file, fileList){ // 文件上传失败时的钩子，返回字段为 error, file, fileList-->
<!--                this.$Message.error("上传失败");-->

<!--            },-->
<!--            handleFormatError(file, fileList){ // 文件格式验证失败时的钩子，返回字段为 file, fileList-->

<!--            },-->
<!--            handleMaxSize(file, fileList){ // 文件超出指定大小限制时的钩子，返回字段为 file, fileList-->

<!--            },-->
<!--            handleBeforeUpload(response){ // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传-->

<!--            }-->
<!--        },-->
<!--    }-->
<!--</script>-->
<!--<style>-->
<!--	.demo-upload-list{-->
<!--		display: inline-block;-->
<!--		width: 60px;-->
<!--		height: 60px;-->
<!--		text-align: center;-->
<!--		line-height: 60px;-->
<!--		border: 1px solid transparent;-->
<!--		border-radius: 4px;-->
<!--		overflow: hidden;-->
<!--		background: #fff;-->
<!--		position: relative;-->
<!--		box-shadow: 0 1px 1px rgba(0,0,0,.2);-->
<!--		margin-right: 4px;-->
<!--	}-->
<!--	.demo-upload-list img{-->
<!--		width: 100%;-->
<!--		height: 100%;-->
<!--	}-->
<!--	.demo-upload-list-cover{-->
<!--		display: none;-->
<!--		position: absolute;-->
<!--		top: 0;-->
<!--		bottom: 0;-->
<!--		left: 0;-->
<!--		right: 0;-->
<!--		background: rgba(0,0,0,.6);-->
<!--	}-->
<!--	.demo-upload-list:hover .demo-upload-list-cover{-->
<!--		display: block;-->
<!--	}-->
<!--	.demo-upload-list-cover i{-->
<!--		color: #fff;-->
<!--		font-size: 20px;-->
<!--		cursor: pointer;-->
<!--		margin: 0 2px;-->
<!--	}-->
<!--</style>-->
<template>
	<div>
		<Button @click="confirm">Normal</Button>
		<Button @click="custom">Custom button text</Button>
		<Button @click="async">Asynchronous closing</Button>
	</div>
</template>
<script>
    export default {
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>The dialog box will be closed after 2 seconds</p>',
                    loading: true,
                    onOk: () => {
                        // setTimeout(() => {
                            this.$Modal.remove();
                        //     this.$Message.info('Asynchronously close the dialog box');
                        // }, 2000);
                    }
                });
            }
        }
    }
</script>
