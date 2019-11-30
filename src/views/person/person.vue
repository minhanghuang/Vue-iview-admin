<style lang="scss" scoped>

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
														<svg t="1575108341438" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2229" width="20" height="20"><path d="M498.816 345.056c26.336 0 43.936-17.632 43.936-43.904 0-26.56-17.568-43.744-43.936-43.744s-52.832 17.184-52.832 43.744C446.016 327.424 472.48 345.056 498.816 345.056zM253.088 257.408c-26.336 0-52.96 17.184-52.96 43.744 0 26.272 26.624 43.904 52.96 43.904 26.24 0 43.808-17.632 43.808-43.904C296.864 274.592 279.328 257.408 253.088 257.408zM1024 626.112c0-138.88-128.832-257.216-286.976-269.536 0.224-1.728 0.32-3.52-0.064-5.312-31.712-147.84-190.688-259.296-369.824-259.296C164.704 91.968 0 233.12 0 406.624c0 93.088 47.52 176.96 137.568 243.104l-31.392 94.368c-2.016 6.144-0.192 12.896 4.704 17.152 2.976 2.56 6.72 3.904 10.496 3.904 2.432 0 4.896-0.576 7.168-1.696L246.4 704.48l14.528 2.944c36.288 7.456 67.616 13.92 106.208 13.92 11.36 0 22.88-0.512 34.176-1.472 4.576-0.384 8.448-2.688 11.072-6.016 42.496 106.336 159.616 183.104 297.44 183.104 35.296 0 71.04-8.512 103.104-16.544l90.848 49.664c2.4 1.312 5.056 1.984 7.68 1.984 3.584 0 7.168-1.216 10.048-3.552 5.056-4.096 7.136-10.848 5.248-17.024l-23.2-77.152C981.344 772.864 1024 699.328 1024 626.112zM398.592 687.968c-10.4 0.896-20.96 1.344-31.424 1.344-35.328 0-65.216-6.112-99.776-13.248L247.296 672c-3.456-0.736-7.104-0.256-10.272 1.376l-88.288 44.192 22.944-68.928c2.24-6.752-0.224-14.112-6.016-18.176C76.96 568.64 32 493.312 32 406.624c0-155.84 150.336-282.656 335.136-282.656 163.36 0 308 99.392 337.856 231.584-171.296 2.24-309.888 122.656-309.888 270.56 0 21.504 3.264 42.336 8.768 62.432C402.208 688.128 400.448 687.808 398.592 687.968zM875.456 815.552c-5.344 4.032-7.616 10.976-5.696 17.376l15.136 50.336-62.112-33.984c-2.368-1.312-5.024-1.984-7.68-1.984-1.312 0-2.624 0.16-3.904 0.512-33.312 8.416-67.776 17.088-101.344 17.088-155.904 0-282.72-107.136-282.72-238.816 0-131.68 126.816-238.784 282.72-238.784 152.928 0 282.144 109.344 282.144 238.784C992 691.744 950.624 759.04 875.456 815.552zM612.992 511.968c-17.568 0-35.136 17.696-35.136 35.232 0 17.664 17.568 35.104 35.136 35.104 26.4 0 43.84-17.44 43.84-35.104C656.832 529.632 639.392 511.968 612.992 511.968zM806.016 511.968c-17.312 0-34.88 17.696-34.88 35.232 0 17.664 17.568 35.104 34.88 35.104 26.304 0 44.064-17.44 44.064-35.104C850.08 529.632 832.352 511.968 806.016 511.968z" p-id="2230" fill="#515a6e"></path></svg>
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
											<div style="display: inline-block;padding:2px 2px 1px 2px ;height: auto;width: 246px">
												<child-tag
													ref="tag"
													:tag_data="value.tag"
													:count="20"
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
									<div style="padding-left: 30px">
										<div style="margin-bottom: 26px">
											<child-uploadele
												:is_auto_upload="auto_upload"
												@get_upload_success_file="get_upload_success_file"
											>
											</child-uploadele>
										</div>
										<div style="padding-bottom: 26px">
											姓名
											<Input v-model="value.name" placeholder="Cox" style="margin-left: 15px ;width: 372px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											描述
											<Input :show-word-limit="true" maxlength="30" v-model="value.description" placeholder="到了最后,我们都活成曾经最讨厌的样子" type="textarea" :autosize="true" style="margin-left: 15px ;width: 372px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											邮箱
											<Input v-model="value.email" placeholder="job@minhung.me"  style="margin-left: 15px ;width: 372px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											微信
											<Input v-model="value.wechat" placeholder="wechat"  style="margin-left: 15px ;width: 372px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											公司
											<Input v-model="value.company" placeholder="某某公司"  style="margin-left: 15px ;width: 372px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											部门
											<Input v-model="value.department" placeholder="某某部门"  style="margin-left: 15px ;width: 372px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											职位
											<Input v-model="value.position" placeholder="后端开发工程师"  style="margin-left: 15px ;width: 372px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											地址
											<Input v-model="value.city" placeholder="深圳"  style="margin-left: 15px ;width: 372px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											<div style="height: auto;">
												<div style="display: inline-block;margin-right: 15px;">
													标签
												</div>
												<div style="display: inline-block;border:2px solid #eee;padding:2px 2px 1px 2px ;height: auto;width: 372px">
													<child-tag
														ref="tag"
														:tag_data="value.tag"
														:count="20"
														:closable="true"
														:disable="false"
														tag_size=""
														@realtime="real_time_get_tags"
													>
													</child-tag>
												</div>
											</div>
										</div>
										<div style="padding-bottom: 26px">
											<div style="display: inline-block;margin-right: 15px;color: rgb(245, 247, 249);height: auto">
												标签
											</div>
											<Button type="error" @click="save_bt">保存</Button>
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
                var username = JSON.parse(localStorage.getItem('username')); // 获取用户名
                this.$api.api_all.put_user_detail_api( // 更新用户资料
                    username, this.value
                ).then((response)=>{
                    this.$Message.success(response.data.msg);
                    this.user.http_data = response.data.results; // 更新用户资料, 更新后的数据, 同步到data中
                    this.value = response.data.results;
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                });
            },
            get_upload_success_file:function (file_value) {
	            this.value.avatar = file_value;
            }
		}
    }
</script>

