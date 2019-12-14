<style lang="scss" scoped>
	.my-form >>> .ivu-form-item{
		height: auto;
		width: auto;
		margin: 0;
		padding-bottom: 26px;
	}

	.my-form{
		.my-form-items{
			.inner-item{
				margin-left: 15px ;
			}
			.my-input{
				width: 372px;
			}
		}
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="height: 100%;width: 100%;">
			<Row style="height: 100%;width: 100%;">
				<Col style="height: 100%;width: 100%;">
					<Row style="padding: 30px;" >
						<Col span="12" style="height: auto">
							<Row style="padding: 15px;height: auto;background-color: #f5f7f9;border-radius: 20px" >
								<Col span="24" style="height: 500px">
									a
								</Col>
							</Row>
						</Col>
						<Col span="12" style="height: auto">
							<div style="height: auto;width: 100%">
								<div style="padding: 15px 15px 15px 0;margin-left: 30px; background-color: #f5f7f9;border-radius: 20px">
									<div style="padding-left: 20px">
										<Tabs >
											<TabPane label="基本设置"></TabPane>
										</Tabs>
									</div>
									<div style="padding-left: 30px" class="my-form">
										<div style="padding-bottom: 26px">
											<div style="display: inline-block;margin-right: 15px;color: rgb(245, 247, 249);height: auto">
												标签
											</div>
											<Button type="success" @click="save_bt" style="float: right;margin-right: 20px" >重置</Button>
											<Button type="error" @click="save_bt" style="float: right;margin-right: 30px">刷新</Button>
										</div>
										<Form ref="personform" :model="value" :rules="rulesperson">
											<FormItem prop="name">
												<div class="my-form-items">
													姓名
													<Input v-model="value.name" placeholder="Cox" class="inner-item my-input"></Input>
												</div>
											</FormItem>
											<FormItem prop="tag">
												<div class="my-form-items">
													<div style="height: auto;">
														<div style="display: inline-block;margin-right: 15px;">
															标签
														</div>
														<div style="display: inline-block;border:2px solid #eee;padding:2px 2px 1px 2px ;height: auto;width: 372px">
															<child-tag
																ref="tag"
																:tag_data="value.tag"
																:count="30"
																:closable="true"
																:disable="false"
																tag_size=""
																@realtime="real_time_get_tags"
															>
															</child-tag>
														</div>
													</div>
												</div>
											</FormItem>
											<FormItem prop="circle">
												<div class="my-form-items">
													圆形
													<i-switch v-model="value.circle" @on-change="change" class="inner-item"></i-switch>
												</div>
											</FormItem>
											<FormItem prop="width_img">
												<div class="my-form-items">
													图片大小
													<Slider v-model="value.width_img" show-input></Slider>
												</div>
											</FormItem>
										</Form>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<Spin size="large" fix v-if="loadding"></Spin>
		</Col>
	</Row>
</template>

<script>
    import ChildTag from '@/components/child/tag' // tag子组件
    import ChildUploadele from '@/components/child/upload/avatar' // 更新头像子组件
    import imga from "@/assets/logo.png";

    export default {
        name: "myperson",
        components: {
            ChildTag,
            ChildUploadele,
        },
        data() {
            return {
                value:{
                    name: "",
                    wechat: "",
                    description: "",
                    email: "",
                    company: "",
                    department: "",
                    position: "",
                    address: "",
                    tag:"",
                    avatar: "",
                    circle: true,
                    width_img: 100,
                },
                user: {
                    http_data: {},
                    avatar: imga
                    // avatar:"https://profile.csdnimg.cn/6/2/D/3_qq_25479327"
                    // avatar:"../../../src/assets/logo.png"
                },
                loadding: false,
                auto_upload: true, // 自动上传
                upload_success: false,
                rulesperson:{ // 校验表单规则
                    name: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '姓名不能为空', trigger: 'change' }
                    ],
                    description: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '描述不能为空', trigger: 'change' }
                    ],
                    email: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '描述不能为空', trigger: 'change' },
                        { type: 'email', message: '请填写正确的邮箱', trigger: 'blur' }
                    ],
                    wechat: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '描述不能为空', trigger: 'change' }
                    ],
                    company: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '描述不能为空', trigger: 'change' }
                    ],
                    department: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '描述不能为空', trigger: 'change' }
                    ],
                    position: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '描述不能为空', trigger: 'change' }
                    ],
                    city: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '描述不能为空', trigger: 'change' }
                    ],
                    tag: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '描述不能为空', trigger: 'change' }
                    ],
                }
            }
        },
        watch:{
            user:{
                handler (newval, oldval) {
                    this.loadding = false;
                },
                deep: true,
            },
        },
        created() {
            // var username = JSON.parse(localStorage.getItem('username'));
        },
        methods:{
            real_time_get_tags:function (new_tag_value) { // 获取子组件实时的tag数据
                this.value.tag = new_tag_value;
            },
            save_bt:function () { // 点击保存按钮
                // this.loadding= true;
                // var username = JSON.parse(localStorage.getItem('username')); // 获取用户名
                // this.$api.api_all.put_user_detail_api( // 更新用户资料
                //     username, this.value
                // ).then((response)=>{
                //     this.$Message.success(response.data.msg);
                //     this.user.http_data = response.data.results; // 更新用户资料, 更新后的数据, 同步到data中
                //     this.value = response.data.results;
                //     this.loadding= false;
                // }).catch((error)=>{
                //     this.$Message.error(error.response.data.msg);
                //     this.loadding= false;
                // });
            },
        }
    }
</script>

