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
<!--<template>-->
<!--	<div>-->
<!--		<Button @click="confirm">Normal</Button>-->
<!--		<Button @click="custom">Custom button text</Button>-->
<!--		<Button @click="async">Asynchronous closing</Button>-->
<!--	</div>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        methods: {-->
<!--            confirm () {-->
<!--                this.$Modal.confirm({-->
<!--                    title: 'Title',-->
<!--                    content: '<p>Content of dialog</p><p>Content of dialog</p>',-->
<!--                    onOk: () => {-->
<!--                        this.$Message.info('Clicked ok');-->
<!--                    },-->
<!--                    onCancel: () => {-->
<!--                        this.$Message.info('Clicked cancel');-->
<!--                    }-->
<!--                });-->
<!--            },-->
<!--            custom () {-->
<!--                this.$Modal.confirm({-->
<!--                    title: 'Title',-->
<!--                    content: '<p>Content of dialog</p><p>Content of dialog</p>',-->
<!--                    okText: 'OK',-->
<!--                    cancelText: 'Cancel'-->
<!--                });-->
<!--            },-->
<!--            async () {-->
<!--                this.$Modal.confirm({-->
<!--                    title: 'Title',-->
<!--                    content: '<p>The dialog box will be closed after 2 seconds</p>',-->
<!--                    loading: true,-->
<!--                    onOk: () => {-->
<!--                        // setTimeout(() => {-->
<!--                            this.$Modal.remove();-->
<!--                        //     this.$Message.info('Asynchronously close the dialog box');-->
<!--                        // }, 2000);-->
<!--                    }-->
<!--                });-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->


<!--<template>-->
<!--	<div>-->
<!--		<el-tag-->
<!--				:key="tag"-->
<!--				v-for="tag in dynamicTags"-->
<!--				closable-->
<!--				:disable-transitions="false"-->
<!--				@close="handleClose(tag)">-->
<!--			{{tag}}-->
<!--		</el-tag>-->
<!--		<el-input-->
<!--				class="input-new-tag"-->
<!--				v-if="inputVisible"-->
<!--				v-model="inputValue"-->
<!--				ref="saveTagInput"-->
<!--				size="small"-->
<!--				@keyup.enter.native="handleInputConfirm"-->
<!--				@blur="handleInputConfirm"-->
<!--		>-->
<!--		</el-input>-->
<!--		<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>-->
<!--	</div>-->
<!--</template>-->
<!--<script>-->

<!--    export default {-->
<!--        data() {-->
<!--            return {-->
<!--                dynamicTags: ['标签一', '标签二', '标签三'], // 需要显示的标签-->
<!--                inputVisible: false, // 是否可输入-->
<!--                inputValue: '', // 双向数据绑定, 当前输入的数据-->
<!--            };-->
<!--        },-->
<!--        methods: {-->
<!--            handleClose(tag) { // 关掉某个标签事件-->
<!--                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);-->
<!--            },-->

<!--            showInput() {-->
<!--                this.inputVisible = true;-->
<!--                this.$nextTick(_ => {-->
<!--                    this.$refs.saveTagInput.$refs.input.focus();-->
<!--                });-->
<!--            },-->

<!--            handleInputConfirm() { // 回车按键-->
<!--                let inputValue = this.inputValue;-->
<!--                if (inputValue) {-->
<!--                    this.dynamicTags.push(inputValue);-->
<!--                }-->
<!--                this.inputVisible = false;-->
<!--                this.inputValue = '';-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
<!--<style>-->
<!--	.el-tag + .el-tag {-->
<!--		margin-left: 10px;-->
<!--	}-->
<!--	.button-new-tag {-->
<!--		margin-left: 10px;-->
<!--		height: 32px;-->
<!--		line-height: 30px;-->
<!--		padding-top: 0;-->
<!--		padding-bottom: 0;-->
<!--	}-->
<!--	.input-new-tag {-->
<!--		width: 90px;-->
<!--		margin-left: 10px;-->
<!--		vertical-align: bottom;-->
<!--	}-->
<!--</style>-->


<!--<template>-->
<!--	<div>-->
<!--		<el-upload-->
<!--			:action="upload_action"-->
<!--			list-type="picture-card"-->
<!--			:headers="headers_token"-->
<!--		>-->
<!--			<i class="el-icon-plus"></i>-->
<!--		</el-upload>-->
<!--	</div>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data() {-->
<!--            return {-->
<!--                dialogImageUrl: '',-->
<!--                dialogVisible: false,-->
<!--            };-->
<!--        },-->
<!--        computed:{-->
<!--            headers_token:function () {-->
<!--                var token = JSON.parse(localStorage.getItem('TOKEN'));-->
<!--                token = "TOKEN " + token;-->
<!--                return {"Authorization":token}-->
<!--            },-->
<!--            upload_action:function () {-->
<!--				return "http://127.0.0.1:19900/api/user/update-avataruser/"-->
<!--            },-->
<!--        },-->
<!--        methods: {-->
<!--        }-->
<!--    }-->
<!--</script>-->

<template>
	<div style="height: 16px;background-color: #d7dde4">
<!--		<i class="fa fa-camera-retro fa-5x"></i>-->
		aaaa
		<font-awesome-icon :icon="['fas','user']" />
		<font-awesome-icon :icon="['fas','camera']" />
		<font-awesome-icon :icon="['fas','barcode']" />
		<font-awesome-icon :icon="['fas','brain']" />
<!--		<font-awesome-icon :icon="['fas','fa-weixin']" />-->
<!--		<i class="fab fa-weixin"></i>-->
<!--		<i class="fab fa-apple-pay"></i>-->
<!--		<i class="fas fa-brain"></i>-->

		<svg t="1575108341438" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2229" width="16" height="16"><path d="M498.816 345.056c26.336 0 43.936-17.632 43.936-43.904 0-26.56-17.568-43.744-43.936-43.744s-52.832 17.184-52.832 43.744C446.016 327.424 472.48 345.056 498.816 345.056zM253.088 257.408c-26.336 0-52.96 17.184-52.96 43.744 0 26.272 26.624 43.904 52.96 43.904 26.24 0 43.808-17.632 43.808-43.904C296.864 274.592 279.328 257.408 253.088 257.408zM1024 626.112c0-138.88-128.832-257.216-286.976-269.536 0.224-1.728 0.32-3.52-0.064-5.312-31.712-147.84-190.688-259.296-369.824-259.296C164.704 91.968 0 233.12 0 406.624c0 93.088 47.52 176.96 137.568 243.104l-31.392 94.368c-2.016 6.144-0.192 12.896 4.704 17.152 2.976 2.56 6.72 3.904 10.496 3.904 2.432 0 4.896-0.576 7.168-1.696L246.4 704.48l14.528 2.944c36.288 7.456 67.616 13.92 106.208 13.92 11.36 0 22.88-0.512 34.176-1.472 4.576-0.384 8.448-2.688 11.072-6.016 42.496 106.336 159.616 183.104 297.44 183.104 35.296 0 71.04-8.512 103.104-16.544l90.848 49.664c2.4 1.312 5.056 1.984 7.68 1.984 3.584 0 7.168-1.216 10.048-3.552 5.056-4.096 7.136-10.848 5.248-17.024l-23.2-77.152C981.344 772.864 1024 699.328 1024 626.112zM398.592 687.968c-10.4 0.896-20.96 1.344-31.424 1.344-35.328 0-65.216-6.112-99.776-13.248L247.296 672c-3.456-0.736-7.104-0.256-10.272 1.376l-88.288 44.192 22.944-68.928c2.24-6.752-0.224-14.112-6.016-18.176C76.96 568.64 32 493.312 32 406.624c0-155.84 150.336-282.656 335.136-282.656 163.36 0 308 99.392 337.856 231.584-171.296 2.24-309.888 122.656-309.888 270.56 0 21.504 3.264 42.336 8.768 62.432C402.208 688.128 400.448 687.808 398.592 687.968zM875.456 815.552c-5.344 4.032-7.616 10.976-5.696 17.376l15.136 50.336-62.112-33.984c-2.368-1.312-5.024-1.984-7.68-1.984-1.312 0-2.624 0.16-3.904 0.512-33.312 8.416-67.776 17.088-101.344 17.088-155.904 0-282.72-107.136-282.72-238.816 0-131.68 126.816-238.784 282.72-238.784 152.928 0 282.144 109.344 282.144 238.784C992 691.744 950.624 759.04 875.456 815.552zM612.992 511.968c-17.568 0-35.136 17.696-35.136 35.232 0 17.664 17.568 35.104 35.136 35.104 26.4 0 43.84-17.44 43.84-35.104C656.832 529.632 639.392 511.968 612.992 511.968zM806.016 511.968c-17.312 0-34.88 17.696-34.88 35.232 0 17.664 17.568 35.104 34.88 35.104 26.304 0 44.064-17.44 44.064-35.104C850.08 529.632 832.352 511.968 806.016 511.968z" p-id="2230" fill="#515a6e"></path></svg>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                value: {
                    a:"",
                },
            };
        },
    }
</script>
