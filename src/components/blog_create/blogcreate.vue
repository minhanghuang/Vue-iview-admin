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
							<Button type="error" ghost size="large">保存草稿</Button>
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
                        "id":0, // 当前文章id, 默认0, 没有该文章
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
            create_blog_bt:function () { // 发布文章-按钮
                this.$refs.titleform.validate((valid) => {
                    // this.$refs.loginForm.validate : 获取表单校验结果; 校验正确-> valid为True; 校验失败-> valid为False;
                    let value = this.$refs.md.get_htlmvalue(); // 获取md数据
                    if (valid) { // 标题校验成功
                        if (value){ // md编辑框有数据
                            this.$api.api_all.post_article_create_api( // 将文章存至草稿箱
                                this.form.title,value
                            ).then((response)=>{
                                this.$Message.success("文章保存至草稿箱");
                                this.image.image_data.id = response.data.results.id; // 保存当前文章的id
	                            console.log("kkk:",this.image.image_data)
                            }).catch((error)=>{
                                this.$Message.error(error.response.data.msg);
                            });
                            this.modal.create_blog = true; // 弹框
                        }else {
                            this.$Message.error("内容不能为空");
                        }
                    }
                })
            },
            on_ok_create_blog:function () { // 确定发布文章(实际是更新文章,文章已经在上一步保存到草稿箱中)

                this.$refs.subtitleform.validate((valid) => {
                    if (valid) { // 校验副标题
                        if (this.image.image_data > 0){ // 文章已经保存至草稿箱
                            this.$api.api_all.put_article_update_api( // 更新文章
                                this.image.image_data
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
                this.$router.push("listblog"); // 跳转到博客列表
            },
	    }
    }
</script>

