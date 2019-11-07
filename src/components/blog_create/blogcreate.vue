<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%">
			<Row>
				<Col span="24" style="height:40px;margin-bottom: 24px">
					<Row style="height: 100%">

						<Col span="20" style="height: 100%;background-color: aquamarine">
							<Input size="large" prefix="ios-paper-outline" placeholder="输入文章标题" style="height: 100%;width: 100%;" />
						</Col>
						<Col span="3" style="height: 100%" offset="1">
							<Button type="error" size="large">发布文章</Button>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row style="height: 700px;width: 100%">
				<Col span="24" style="height: 100%;width: 100%">
					<child-markdown>

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
            return {}
        },
    }
</script>

