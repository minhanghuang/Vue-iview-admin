<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%">
			<Row>
				<Col span="24" style="height:40px;margin-bottom: 24px">
					<Row style="height: 100%">

						<Col span="20" style="height: 100%;background-color: aquamarine">
							<Form ref="titleform" :model="form" :rules="rulestitle">
								<FormItem prop="title">
									<Input v-model="form.title" type="text" clearable size="large" prefix="ios-paper-outline" placeholder="输入文章标题" style="height: 100%;width: 100%;" />
								</FormItem>
							</Form>
						</Col>
						<Col span="3" style="height: 100%" offset="1">
							<Button type="error" size="large" @click="create_blog_bt">发布文章</Button>
							<Modal
									v-model="modal.create_blog"
									:title="form.title"
									:mask-closable="false"
									:z-index=5000
									@on-ok="on_ok_create_blog"
									@on-cancel="on_cancel_create_blog"
							>
								<p>Content of dialog</p>
								<p>Content of dialog</p>
								<p>Content of dialog</p>
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

    export default {
        name: "blogcreate",
        components: {
            ChildMarkdown
        },
        data() {
            return {
                form:{
                    title: "", // 文章标题,input框
                },
                modal:{
                    create_blog: false, // 发布文章按钮弹框
                },
                rulestitle:{ // 校验表单规则
                    title: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '标题不能为空', trigger: 'change' }
                    ],
                }
            }
        },
	    methods:{
            create_blog_bt:function () { // 发布文章-按钮
                this.modal.create_blog = true; // 弹框
            },
            on_ok_create_blog:function () { // 确定发布文章
                let value = this.$refs.md.get_htlmvalue(); // 获取md数据
                this.$refs.titleform.validate((valid) => {
                    // this.$refs.loginForm.validate : 获取表单校验结果; 校验正确-> valid为True; 校验失败-> valid为False;
                    if (valid) {
                        if (value){
                            this.$api.api_all.post_article_create_api(
                                this.form.title,value
                            ).then((response)=>{
                                this.$Message.success(response.data.msg);
                            }).catch((error)=>{
                                this.$Message.error(error.response.data.msg);
                            })
                        }else {
                            this.$Message.error("内容不能为空");
                        }
                    }
                })
            },
            on_cancel_create_blog:function () { // 取消按钮

            },
	    }
    }
</script>

