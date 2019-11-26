<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="height: 100%;width: 100%;">
			<Row style="height: 100%;width: 100%;">
				<Col style="height: 100%;width: 100%;">
					<Row style="padding: 30px;" >
						<Col span="8" style="height: auto">
							<Row style="padding: 15px;height: auto;background-color: #f5f7f9" >
								<Col span="24" style="height: auto">
									<Row style="padding: 25px;height: auto" >
										<Col span="24" style="height: auto">
											<div style="margin: 8px 0;text-align: center">
												<div style="margin: 0 auto;width: auto;height: auto">
													<img src="../../../src/assets/logo.png" style="height: 100px;width: 100px;border-radius:50px">
												</div>
											</div>
											<div style="text-align: center;margin: 10px 0">
												<p style="color: rgba(0, 0, 0, 0.85);font-size: 20px;font-weight:500; ">Cox</p>
											</div>
											<div style="text-align: center;width:auto;margin: 0 auto">
												<p>到了最后,我们都活成曾经最讨厌的样子</p>
											</div>
											<div style="text-align: center;width:auto;height: auto; margin-top: 40px">
												<Row style="margin: 5px 0" >
													<Col span="2">
														<Icon type="ios-mail-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="10">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">job@minhung.me</div>
													</Col>
												</Row>
												<Row style="margin: 5px 0">
													<Col span="2">
														<Icon type="ios-briefcase-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="21" style="float: left">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">某某公司 · 某某部门 · 后端开发工程师</div>
													</Col>
												</Row>
												<Row style="margin: 5px 0">
													<Col span="2">
														<Icon type="ios-pin-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="4">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">深圳</div>
													</Col>
												</Row>
											</div>
											<Divider dashed />
											<div style="margin: 9px 0 ">
												<p>标签</p>
											</div>
											<div>
												aaa
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
						<Col span="16" style="height: auto">
							<div style="height: auto;width: 100%">
								<div style="padding: 15px 15px 15px 0;margin-left: 30px; background-color: #f5f7f9">
									<div style="padding-left: 20px">
										<Tabs >
											<TabPane label="基本设置"></TabPane>
										</Tabs>
									</div>
									<div style="padding-left: 30px">
										<div style="margin-bottom: 26px">
											<child-uploadele>

											</child-uploadele>
										</div>
										<div style="padding-bottom: 26px">
											姓名
											<Input v-model="value.username" placeholder="Cox" style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											描述
											<Input v-model="value.description" placeholder="到了最后,我们都活成曾经最讨厌的样子" type="textarea" :autosize="true" style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											邮箱
											<Input v-model="value.email" placeholder="job@minhung.me"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											公司
											<Input v-model="value.company" placeholder="某某公司"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											部门
											<Input v-model="value.department" placeholder="某某部门"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											职位
											<Input v-model="value.position" placeholder="后端开发工程师"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											地址
											<Input v-model="value.city" placeholder="深圳"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											<div style="height: auto;">
												<div style="display: inline-block;margin-right: 15px">
													标签
												</div>
												<div style="display: inline-block;border:2px solid #eee;height: auto;max-width: 500px">
													<child-tag
															ref="tag"
															:tag_data="user.http_data"
															:count="4"
													>
													</child-tag>
												</div>
											</div>
										</div>
										<div style="padding-bottom: 26px">
											<div style="display: inline-block;margin-right: 15px;color: rgb(245, 247, 249)">
												标签
											</div>
											<Button type="error">保存</Button>
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

    export default {
        name: "myperson",
        components: {
            ChildTag,
            ChildUploadele,
        },
        data() {
            return {
                value:{
                    username: "",
                    description: "",
                    email: "",
                    company: "",
                    department: "",
                    position: "",
                    address: "",
                    tags: ["Vue.js"],
                },
	            user: {
                    http_data: {},
	            },
                loadding: true,
            }
        },
	    watch:{
            user:{
                handler (newval, oldval) {
	                this.loadding = false;
                },
	            deep: true,
            }
	    },
	    created() {
            var username = JSON.parse(localStorage.getItem('username'));
            this.$api.api_all.get_user_detail_api( // 发http请求, 获取用户的详细资料
                username
            ).then((response)=>{ // 成功获取博文详细信息
                this.user.http_data = response.data.results[0]; // 后端接口博文详细信息
	            console.log(response.data.results[0])
                this.value.username = response.data.results[0].username;
                this.value.description = response.data.results[0].description;
                this.value.email = response.data.results[0].email;
                this.value.company = response.data.results[0].company;
                this.value.department = response.data.results[0].department;
                this.value.position = response.data.results[0].position;
                this.value.city = response.data.results[0].city;
                console.log("this.value:",this.value)
                console.log("user.http_data:",this.user.http_data)
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
            })
        },

    }
</script>

