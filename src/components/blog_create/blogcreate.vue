<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%">
			<Row>
				<Col span="24" style="height:40px;margin-bottom: 24px">
					<Row style="height: 100%">
						<Col span="17" style="height: 100%;background-color: aquamarine">
							<Form ref="titleform" :model="form" :rules="rulestitle">
								<FormItem prop="title">
									<Input v-model="form.title" type="text" clearable size="large" prefix="ios-paper-outline" placeholder="输入文章标题" style="height: 100%;width: 100%;" />
								</FormItem>
							</Form>
						</Col>
						<Col span="6" style="height: 100%" offset="1">
							<Button type="error" ghost size="large" @click="draft_blog_bt">保存草稿</Button>
							<Button type="error" size="large" @click="create_blog_bt">发布文章</Button>
							<Modal
									:value="modal.create_blog"
									:title="form.title"
									:loading="modal.ok_bt_loading"
									:mask-closable="false"
									:z-index=2000
									@on-ok="on_ok_create_blog"
									@on-cancel="on_cancel_create_blog"
							>
								<Form ref="subtitleform" :model="form" :rules="rulestitle">
									<FormItem prop="subtitle">
										<Row>
											<Col span="7">
												<Button type="text" size="large" style="background-color: white">请输入副标题</Button>
											</Col>
											<Col span="17">
												<Input v-model="form.subtitle" type="text" clearable size="large" prefix="ios-paper-outline" placeholder="输入文章标题" style="height: 100%;width: 100%;" />
											</Col>
										</Row>
									</FormItem>
								</Form>
								<Divider></Divider>
								<p>提交图片</p>
								<upload-image
									:image_data_child="image.image_data"
								></upload-image>
							</Modal>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row style="height: 700px;width: 100%">
				<Col span="24" style="height: 100%;width: 100%">
					<child-markdown
						ref="md"
					>
					</child-markdown>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    import ChildMarkdown from '@/components/child/markdown' // md子组件
    import UploadImage from '@/components/child/upload' // md子组件

    export default {
        name: "blogcreate",
        components: {
            ChildMarkdown,
            UploadImage,
        },
        data() {
            return {
                form:{
                    title: "", // 文章标题,input框
                    subtitle: "", // 文章副标题,input框
                },
                modal:{
                    create_blog: false, // 发布文章按钮弹框
                    ok_bt_loading: true, // 打开loading
                },
	            image:{ // 图片数据
                    image_data:{ // 传给后端的数据
                        "blogid":-1, // 当前文章id, 默认-1, 没有该文章
                    }
	            },
                rulestitle:{ // 校验表单规则
                    title: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '标题不能为空', trigger: 'change' }
                    ],
                    subtitle: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '副标题不能为空', trigger: 'change' }
                    ],
                }
            }
        },
	    computed:{

	    },
	    methods:{
            draft_blog_bt:function(){ // 保存草稿箱按钮
                this.$refs.titleform.validate((valid) => { // 校验表单(标题)
                    // this.$refs.loginForm.validate : 获取表单校验结果; 校验正确-> valid为True; 校验失败-> valid为False;
                    if (valid) { // 标题校验成功
                        let value = this.$refs.md.get_htlmvalue(); // 获取md数据
                        if (value){ // md编辑框有数据
                            let blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
                            if (blogid <= 0) { // vuex没有id, 新建文章 -- 保存草稿
                                let articlestate = 0; // 草稿箱
                                this.$api.api_all.post_article_create_api( // 发布文章(草稿箱)
                                    this.form.title, value, articlestate
                                ).then((response) => {
                                    this.$Message.success("文章保存至草稿箱");
                                    this.image.image_data.blogid = response.data.results.id; // 保存当前文章的id
                                    this.$store.commit("update_current_blog_id",response.data.results.id); // 将当前被查看的文章对应的id存到vuex中
                                }).catch((error) => {
                                    this.$Message.error(error.response.data.msg);
                                });
                            }else { // vuex有id, 更新文章 -- 保存草稿
                                let articlestate = 0; // 草稿箱
                                this.$api.api_all.put_article_update_api( // 发布文章(草稿箱)
                                    blogid, this.form.title, value, articlestate
                                ).then((response) => {
                                    this.$Message.success("文章保存至草稿箱");
                                    this.image.image_data.blogid = response.data.results.id; // 保存当前文章的id
                                }).catch((error) => {
                                    this.$Message.error(error.response.data.msg);
                                });
                            }
                        }else {
                            this.$Message.error("内容不能为空");
                        }
                    }
                })
            },


            create_blog_bt:function () { // 发布文章-按钮
                this.$refs.titleform.validate((valid) => { // 校验表单(标题)
                    // this.$refs.loginForm.validate : 获取表单校验结果; 校验正确-> valid为True; 校验失败-> valid为False;
                    if (valid) { // 标题校验成功
                        let value = this.$refs.md.get_htlmvalue(); // 获取md数据
                        if (value){ // md编辑框有数据
                            let blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
                            if (blogid <= 0) { // vuex没有id, 新建文章
                                let articlestate = 0; // 发布文章
                                this.$api.api_all.post_article_create_api( // 发布文章
                                    this.form.title, value, articlestate
                                ).then((response) => {
                                    this.$Message.success("文章保存至草稿箱");
                                    this.image.image_data.blogid = response.data.results.id; // 保存当前文章的id
                                    this.$store.commit("update_current_blog_id",response.data.results.id); // 将当前被查看的文章对应的id存到vuex中
	                                this.modal.create_blog = true; // 弹框
                                }).catch((error) => {
                                    this.$Message.error(error.response.data.msg);
                                });
                            }else { // vuex有id, 更新文章
                                let articlestate = 0; // 草稿箱
                                this.$api.api_all.put_article_update_api( // 发布文章(草稿箱)
                                    blogid, this.form.title, value, articlestate
                                ).then((response) => {
                                    this.$Message.success("文章保存至草稿箱");
                                    this.image.image_data.blogid = response.data.results.id; // 保存当前文章的id
                                    this.modal.create_blog = true; // 弹框
                                }).catch((error) => {
                                    this.$Message.error(error.response.data.msg);
                                });
                            }
                        }else {
                            this.$Message.error("内容不能为空");
                        }
                    }
                })
            },
            on_ok_create_blog:function () { // 确定发布文章
                this.$refs.subtitleform.validate((valid) => {
                    if (valid) { // 校验副标题
                        if (this.image.image_data.blogid > 0){ // 文章已经保存至草稿箱
                            this.$api.api_all.put_msgarticle_update_api( // 更新文章
                                this.image.image_data.blogid, this.form.subtitle, 1
                            ).then((response)=>{
                                this.$Message.success(response.data.msg);
                                this.modal.create_blog = false; // 关闭弹框
                                this.$router.push("listblog"); // 跳转到博客列表
                            }).catch((error)=>{
                                this.$Message.error(error.response.data.msg);
                            })
                        }
                    }else { // 校验副标题失败
                        setTimeout(() => { // 异步处理弹框问题
                            this.modal.ok_bt_loading = false;
                            this.$nextTick(() => {
                                this.modal.ok_bt_loading = true;
                            });
                        }, 2000);
                    }
                })
            },
            on_cancel_create_blog:function () { // 点击取消按钮
                this.$Message.error("退出编辑,文章以保存至草稿箱");
                this.modal.create_blog = false; // 关闭弹框
            },
	    }
    }
</script>

