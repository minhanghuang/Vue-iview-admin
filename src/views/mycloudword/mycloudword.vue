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
	.img-top{
		margin: 0 auto;
	}
	.img-bottom{
		margin: 0 auto;
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
								<Col span="24" style="height: auto">
									<Row style="height: 40%;" >
										<Col span="24" style="text-align: center">
											<div  class="img-top" :style="{height:value.width_img+'px',width:value.width_img+'px',backgroundColor:value.color}">
												<div v-if=value.circle :style="{height:value.width_img+'px',width:value.width_img+'px',backgroundColor:'#10E4E2',borderRadius:value.width_img/2+'px'}">

												</div>
												<div v-else :style="{height:value.width_img+'px',width:value.width_img+'px',backgroundColor:'#10E4E2',}">

												</div>
											</div>
										</Col>
									</Row>
									<Divider />
									<Row style="height: 40%" >
										<Col span="24">
											<div :style="{height:value.cloudword_width+'px',width:value.cloudword_width+'px',}" class="img-bottom">
												<img :src=value.cloudword>
											</div>
										</Col>
									</Row>
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
											<Button type="success" @click="clear_bt" style="float: right;margin-right: 20px" >重置</Button>
											<Button type="error" @click="update_bt" style="float: right;margin-right: 30px">刷新</Button>
										</div>
										<Form ref="personform" :model="value" :rules="rulesperson">
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
																:count="50"
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
													<Slider v-model="value.width_img" show-input :min="100" :max="400" :marks="slidermarks"></Slider>
												</div>
											</FormItem>
											<FormItem prop="color">
												<div class="my-form-items">
													背景颜色
													<ColorPicker v-model="value.color" ></ColorPicker>
												</div>
											</FormItem>
											<FormItem prop="full">
												<div class="my-form-items">
													<Tooltip content="开启后,标签将充满整个图片" placement="bottom-start">
														填充
														<i-switch v-model="value.full" @on-change="change_full(value.full)" class="inner-item"></i-switch>
													</Tooltip>
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

    export default {
        name: "mycloudword",
        components: {
            ChildTag,
            ChildUploadele,
        },
        data() {
            return {
                value:{
                    tag: '["Python","Django]',
                    circle: true,
                    width_img: 260,
                    color: "rgb(255,255,255)",
                    full: true,
                    cloudword: "",
                    cloudword_width: "260",
                },
                loadding: true,
                slidermarks:{
					100:"100px",
					260:"260px",
					400:{
                        style: {
                            color: '#ff0000'
                        },
                        label: this.$createElement('strong', '400px')
                    },
                },
                rulesperson:{ // 校验表单规则
                    tag: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '不能为空', trigger: 'change' }
                    ],
                }
            }
        },
        created() {
            let username = JSON.parse(localStorage.getItem('username')); // 获取用户名
            this.$api.api_all.get_data_detail_api( // 发http请求, 获取用户data
                username
            ).then((response)=>{ // 获取用户data
                this.value.cloudword = response.data.results[0].cloudword;
                this.value.tag = response.data.results[0].tag;
                this.value.cloudword_width = response.data.results[0].cloudword_width;
                this.loadding = false;
                this.$Message.success(response.data.msg);
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
                this.loadding = false;
            });
        },
        methods:{
            real_time_get_tags:function (new_tag_value) { // 获取子组件实时的tag数据
                this.value.tag = new_tag_value;
            },
            update_bt:function () { // 点击刷新按钮
                this.loadding = true;
                let username = JSON.parse(localStorage.getItem('username'));
                this.$api.api_all.put_cloudword_update_api( // 发http请求,
                    username,this.value
                ).then((response)=>{ //
                    this.value.cloudword = response.data.results.cloudword;
                    this.value.tag = response.data.results.tag;
                    this.value.cloudword_width = response.data.results.cloudword_width;
                    this.loadding = false;
                    this.$Message.success(response.data.msg);
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding = false;
                });
            },
            clear_bt:function () { // 点击重置按钮
                this.loadding = true;
                let username = JSON.parse(localStorage.getItem('username'));
                this.$api.api_all.put_cloudword_reset_api( // 发http请求-重置云词图,
                    username
                ).then((response)=>{ //
                    this.value.cloudword = response.data.results.cloudword;
                    this.value.tag = response.data.results.tag;
                    this.value.cloudword_width = response.data.results.cloudword_width;
                    this.loadding = false;
                    this.$Message.success(response.data.msg);
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding = false;
                });
            },
            change_full:function (value) {
                if (value){
                    this.$Message.info("填充功能已开启");
                }
                else {
                    this.$Message.error("填充功能已关闭");
                }
            }
        }
    }
</script>

