<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%">
			<router-view></router-view>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "main",
        components: {},
        data() {
            return {}
        },
    }
</script>

