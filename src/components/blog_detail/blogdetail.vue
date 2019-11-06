<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24">
			<Row>
				<Col span="6">
					<Icon type="ios-contact"></Icon>
				</Col>
				<Col span="6">
					<Icon type="ios-contact"></Icon>
				</Col>
				<Col span="6">
					<Icon type="ios-contact"></Icon>
				</Col>
				<Col span="6">
					<Icon type="ios-contact"></Icon>
				</Col>
			</Row>
			<Row>
				<Col span="24">
					<mavon-editor
							:value="data.content"
							:editable="false"
							:toolbarsFlag="false"
							:subfield="false"
							:boxShadow="false"
					>
					</mavon-editor>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "blogdetail",
	    props:["data",],
        components: {},
        data() {
            return {}
        },
    }
</script>

