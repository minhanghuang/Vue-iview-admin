<style lang="scss" scoped>
	.my-form >>> .ivu-form-item{
		height: auto;
		width: auto;
		margin: 0;
		padding-bottom: 26px;
	}

	.my-form{
		.my-form-items{
			.my-form-items-bt:hover{
				background-color: rgb(245, 247, 249);
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
						<Col span="7" style="height: auto">
							<Row style="padding: 15px;height: auto;background-color: #f5f7f9;border-radius: 20px" >
								<Col span="24" style="height: auto">
									<Row style="padding: 25px;height: auto" >
										<Col span="24" style="height: auto">
											<div style="margin: 8px 0;text-align: center">
												<div style="margin: 0 auto;width: auto;height: auto">
													<img :src="value.avatar" style="height: 100px;width: 100px;border-radius:50px">
												</div>
											</div>
											<div style="text-align: center;margin: 10px 0">
												<p style="color: rgba(0, 0, 0, 0.85);font-size: 20px;font-weight:500; ">{{value.name}}</p>
											</div>
											<div style="text-align: center;width:auto;margin: 0 auto">
												<p>{{value.description}}</p>
											</div>
											<div style="text-align: center;width:auto;height: auto; margin-top: 40px">
												<Row style="margin: 5px 0" >
													<Col span="2">
														<Icon type="ios-mail-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="10">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">{{value.email}}</div>
													</Col>
												</Row>
												<Row style="margin: 5px 0" >
													<Col span="2">
														<Icon type="ios-chatbubbles-outline" size="20"></Icon>
													</Col>
													<Col span="10">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">{{value.wechat}}</div>
													</Col>
												</Row>
												<Row style="margin: 5px 0">
													<Col span="2">
														<Icon type="ios-briefcase-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="21" style="float: left">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">{{value.company}} · {{value.department}} · {{value.position}}</div>
													</Col>
												</Row>
												<Row style="margin: 5px 0">
													<Col span="2">
														<Icon type="ios-pin-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="4">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;width: 200px;text-align: left">{{value.city}}</div>
													</Col>
												</Row>
											</div>
											<Divider dashed />
											<div style="margin: 9px 0 ">
												<p>标签</p>
											</div>
											<div style="display: inline-block;padding:2px 2px 1px 2px ;height: auto;width: auto">
												<child-tag
													ref="tag"
													:tag_data="value.tag"
													:count="30"
													:disable="true"
													tag_size="small"
													:closable="false"
													type="danger"
												>
												</child-tag>
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
						<Col span="17" style="height: auto">
							<div style="height: auto;width: 100%">
								<div style="padding: 15px 15px 15px 0;margin-left: 30px; background-color: #f5f7f9;border-radius: 20px">
									<div style="padding-left: 20px">
										<Tabs >
											<TabPane label="基本设置"></TabPane>
										</Tabs>
									</div>
									<div style="padding-left: 30px" class="my-form">
										<div style="margin-bottom: 26px">
											<child-uploadele
												:is_auto_upload="auto_upload"
												@get_upload_success_file="get_upload_success_file"
											>
											</child-uploadele>
										</div>
										<Form ref="personform" :model="value" :rules="rulesperson">
											<FormItem prop="name">
												<div class="my-form-items">
													<Button type="text" class="my-form-items-bt">姓名: </Button>
													<Input v-model="value.name" placeholder="Cox" style="margin-left: 15px ;width: 372px"></Input>
												</div>
											</FormItem>
											<FormItem prop="description">
												<div class="my-form-items">
													<Button type="text" class="my-form-items-bt">描述: </Button>
													<Input :show-word-limit="true" maxlength="30" v-model="value.description" placeholder="到了最后,我们都活成曾经最讨厌的样子" type="textarea" :autosize="true" style="margin-left: 15px ;width: 372px"></Input>
												</div>
											</FormItem>
											<FormItem prop="email">
												<div class="my-form-items">
													<Button type="text" class="my-form-items-bt">邮箱: </Button>
													<Input v-model="value.email" placeholder="job@minhung.me"  style="margin-left: 15px ;width: 372px"></Input>
												</div>
											</FormItem>
											<FormItem prop="wechat">
												<div class="my-form-items">
													<Button type="text" class="my-form-items-bt">微信: </Button>
													<Input v-model="value.wechat" placeholder="wechat"  style="margin-left: 15px ;width: 372px"></Input>
												</div>
											</FormItem>
											<FormItem prop="company">
												<div class="my-form-items">
													<Button type="text" class="my-form-items-bt">公司: </Button>
													<Input v-model="value.company" placeholder="某某公司"  style="margin-left: 15px ;width: 372px"></Input>
												</div>
											</FormItem>
											<FormItem prop="department">
												<div class="my-form-items">
													<Button type="text" class="my-form-items-bt">部门: </Button>
													<Input v-model="value.department" placeholder="某某部门"  style="margin-left: 15px ;width: 372px"></Input>
												</div>
											</FormItem>
											<FormItem prop="position">
												<div class="my-form-items">
													<Button type="text" class="my-form-items-bt">职位: </Button>
													<Input v-model="value.position" placeholder="后端开发工程师"  style="margin-left: 15px ;width: 372px"></Input>
												</div>
											</FormItem>
											<FormItem prop="city">
												<div class="my-form-items">
													<Button type="text" class="my-form-items-bt">地址: </Button>
													<Input v-model="value.city" placeholder="深圳"  style="margin-left: 15px ;width: 372px"></Input>
												</div>
											</FormItem>
											<FormItem prop="tag">
												<div class="my-form-items">
													<div style="height: auto;">
														<div style="display: inline-block;margin-right: 15px;">
															<Button type="text" class="my-form-items-bt">标签: </Button>
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
										</Form>
										<div style="padding-bottom: 26px">
											<div style="display: inline-block;margin-right: 15px;color: rgb(245, 247, 249);height: auto">
												<Button type="text" class="my-form-items-bt" style="color: rgb(245, 247, 249)">地址: </Button>
											</div>
											<Button type="error" @click="save_bt">保存</Button>
											<Button type="success" @click="reset_bt" style="margin-left: 30px">重置</Button>
										</div>
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
                },
	            user: {
                    http_data: {},
		            avatar: imga
		            // avatar:"https://profile.csdnimg.cn/6/2/D/3_qq_25479327"
		            // avatar:"../../../src/assets/logo.png"
	            },
                loadding: true,
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
                        { required: true, message: '微信不能为空', trigger: 'change' }
                    ],
	                company: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '公司不能为空', trigger: 'change' }
                    ],
                    department: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '部门不能为空', trigger: 'change' }
                    ],
	                position: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '岗位不能为空', trigger: 'change' }
                    ],
	                city: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '城市不能为空', trigger: 'change' }
                    ],
                    tag: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '标签不能为空', trigger: 'change' }
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
            var username = JSON.parse(localStorage.getItem('username'));
            this.$api.api_all.get_user_detail_api( // 发http请求, 获取用户的详细资料
                username
            ).then((response)=>{ // 成功获取博文详细信息
                this.user.http_data = response.data.results[0]; // 后端接口博文详细信息
	            this.value = response.data.results[0];
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
            })
        },
		methods:{
            real_time_get_tags:function (new_tag_value) { // 获取子组件实时的tag数据
	            this.value.tag = new_tag_value;
            },
            save_bt:function () { // 点击保存按钮
                this.loadding= true;
                var username = JSON.parse(localStorage.getItem('username')); // 获取用户名
                this.$api.api_all.put_user_detail_api( // 更新用户资料
                    username, this.value
                ).then((response)=>{
                    this.$Message.success(response.data.msg);
                    this.user.http_data = response.data.results; // 更新用户资料, 更新后的数据, 同步到data中
                    this.value = response.data.results;
                    this.loadding= false;
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding= false;
                });
            },
            reset_bt:function () { // 点击重置按钮
                this.loadding= true;
                var username = JSON.parse(localStorage.getItem('username')); // 获取用户名
                this.$api.api_all.put_data_reset_api( // 更新用户资料
                    username
                ).then((response)=>{
                    this.$Message.success(response.data.msg);
                    this.user.http_data = response.data.results; // 更新用户资料, 更新后的数据, 同步到data中
                    this.value = response.data.results;
                    this.loadding= false;
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding= false;
                });
            },
            get_upload_success_file:function (file_value) {
	            this.value.avatar = file_value;
            }
		}
    }
</script>

