<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%">
			<Row>
				<Col span="24" style="height:40px;margin-bottom: 24px">
					<Row style="height: 100%">

						<Col span="20" style="height: 100%;background-color: aquamarine">
							<Input v-model="title" type="text" clearable size="large" prefix="ios-paper-outline" placeholder="输入文章标题" style="height: 100%;width: 100%;" />
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
                title:"",
            }
        },
	    methods:{
            create_blog_bt:function () { // 发布文章-按钮
	            console.log(this.title);
	            console.log(this.$refs.md.get_htlmvalue());
            }
	    }
    }
</script>

