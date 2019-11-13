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
									ok-text="发布文章"
									cancel-text="保存草稿"
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
									:image_data_child="blog.blogid"
								></upload-image>
								<div slot="footer">
									<Button type="error" ghost  @click="on_save_blog">保存草稿</Button>
									<Button type="error"  @click="on_update_blog">发布文章</Button>
								</div>
							</Modal>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row style="height: 700px;width: 100%">
				<Col span="24" style="height: 100%;width: 100%">
					<child-markdown
						ref="md"
						:mddefaultdata="child.md_default_data"
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
	            child:{
                    md_default_data: "## Hello iView",
	            },
	            blog:{
                    blogid: -1, // 当前文章id
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
	    created(){
            this.blog.blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
		    if (this.blog.blogid >0 ){ // Vuex有值, 有文章需要编辑
                this.$api.api_all.detail_article_list_api( // 发http请求, 获取id对应文章的详细信息
                    this.blog.blogid
                ).then((response)=>{ // 成功获取博文详细信息
                    let http_data = response.data.results[0]; // 后端接口博文详细信息
	                this.form.title = http_data.title;
	                this.form.subtitle = http_data.subtitle;
	                this.child.md_default_data = http_data.content;
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
		    } else {

		    }
        },
        beforeDestroy(){ // Vue组件销毁前 钩子
            this.$store.commit("clear_current_blog_id", -1); // 清空Vuex中当前文章的id, 将id设为-1
        },
	    methods:{
            draft_blog_bt:function(){ // 保存草稿箱按钮
                this.$refs.titleform.validate((valid) => { // 校验表单(标题)
                    // this.$refs.loginForm.validate : 获取表单校验结果; 校验正确-> valid为True; 校验失败-> valid为False;
                    if (valid) { // 标题校验成功
                        let value = this.$refs.md.get_htlmvalue(); // 获取md数据
                        if (value){ // md编辑框有数据
                            if (this.blog.blogid <= 0) { // vuex没有id, 新建文章 -- 保存草稿
                                let articlestate = 0; // 草稿箱
                                this.$api.api_all.post_article_create_api( // 发布文章(草稿箱)
                                    this.form.title, value, articlestate
                                ).then((response) => {
                                    this.$Message.success("文章保存至草稿箱");
                                    this.blog.blogid = response.data.results.id; // 保存当前文章的id
                                    this.child.md_default_data = response.data.results.content; // 更新md编辑框里面的数据
                                    this.$store.commit("update_current_blog_id",response.data.results.id); // 将当前被查看的文章对应的id存到vuex中
                                }).catch((error) => {
                                    this.$Message.error(error.response.data.msg);
                                });
                            }else { // vuex有id, 更新文章 -- 保存草稿
                                let articlestate = 0; // 草稿箱
                                this.$api.api_all.put_article_update_api( // 发布文章(草稿箱)
                                    this.blog.blogid, this.form.title, value, articlestate
                                ).then((response) => {
                                    this.$Message.success("文章保存至草稿箱");
                                    this.blog.blogid = response.data.results.id; // 保存当前文章的id
                                    this.child.md_default_data = response.data.results.content; // 更新md编辑框里面的数据
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
                            if (this.blog.blogid <= 0) { // vuex没有id, 新建文章
                                let articlestate = 0; // 发布文章
                                this.$api.api_all.post_article_create_api( // 发布文章
                                    this.form.title, value, articlestate
                                ).then((response) => {
                                    this.$Message.success("文章保存至草稿箱");
                                    this.blog.blogid = response.data.results.id; // 保存当前文章的id
                                    this.$store.commit("update_current_blog_id",response.data.results.id); // 将当前被查看的文章对应的id存到vuex中
	                                this.modal.create_blog = true; // 弹框
                                }).catch((error) => {
                                    this.$Message.error(error.response.data.msg);
                                });
                            }else { // vuex有id, 更新文章
                                let articlestate = 0; // 草稿箱
                                this.$api.api_all.put_article_update_api( // 发布文章(草稿箱)
                                    this.blog.blogid, this.form.title, value, articlestate
                                ).then((response) => {
                                    this.$Message.success("文章保存至草稿箱");
                                    this.blog.blogid = response.data.results.id; // 保存当前文章的id
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
            on_update_blog:function () { // 点击发布文章按钮
                this.$refs.subtitleform.validate((valid) => {
                    if (valid) { // 校验副标题
                        if (this.blog.blogid > 0){ // 文章已经保存至草稿箱
                            this.$api.api_all.put_msgarticle_update_api( // 更新文章
                                this.blog.blogid, this.form.subtitle, 1
                            ).then((response)=>{
                                this.$Message.success(response.data.msg);
                                this.modal.create_blog = false; // 关闭弹框
                                this.$router.push("listblog"); // 跳转到博客列表
                            }).catch((error)=>{
                                this.$Message.error(error.response.data.msg);
                            })
                        }
                    }else { // 校验副标题失败
                        this.modal.create_blog = true;
                        this.$Message.error("副标题不能为空");
                        setTimeout(() => { // 异步处理弹框问题
                            this.modal.ok_bt_loading = false;
                            this.$nextTick(() => {
                                this.modal.ok_bt_loading = true;
                            });
                        }, 2000);
                    }
                })
            },
            on_save_blog:function () { // 点击保存草稿按钮
                this.$api.api_all.put_msgarticle_update_api( // 更新文章
                    this.blog.blogid, this.form.subtitle, 0
                ).then((response)=>{
                    this.$Message.warning("退出编辑,文章以保存至草稿箱");
                    this.modal.create_blog = false; // 关闭弹框
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
            },
            on_cancel_create_blog:function () { // 点击取消按钮
                this.modal.create_blog = false; // 关闭弹框
                this.$Message.error("退出成功");
            }
	    }
    }
</script>

