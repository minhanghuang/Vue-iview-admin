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
    import ChildMarkdown from '@/components/child/markdown'

    export default {
        name: "blogcreate",
        components: {
            ChildMarkdown
        },
        data() {
            return {
                form:{
                    title:""
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
	            console.log(this.title);
	            console.log(this.$refs.md.get_htlmvalue());
                this.$refs.titleform.validate((valid) => {
                    // this.$refs.loginForm.validate : 获取表单校验结果; 校验正确-> valid为True; 校验失败-> valid为False;
                    if (valid) {

                    }
                })
            }
	    }
    }
</script>

