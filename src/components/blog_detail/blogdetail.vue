<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24">
			<Row style="padding-bottom: 16px">

				<Col span="3" offset="8">
					<Icon type="ios-contact" size="18" />
					<span>{{data.username}}</span>
				</Col>
				<Col span="5">
					<Icon type="ios-time" size="18" />
					<span>{{data.createdate}}</span>
				</Col>

			</Row>
			<Row>
				<Col span="24">
					<mavon-editor
							v-model="data.content"
							:editable="false"
							:toolbarsFlag="false"
							:subfield="false"
							:boxShadow="false"
							defaultOpen="preview"
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
            return {
            }
        },
	    // computed:{
        //
	    // }
    }
</script>

