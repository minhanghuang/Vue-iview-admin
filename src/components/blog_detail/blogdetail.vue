<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24">
			<span>{{data}}</span>
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

