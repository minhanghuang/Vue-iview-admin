<style lang="scss" scoped>

</style>


<template>
	<Row style="height: 100%">
		<Col span="24" style="height: 100%">
			<mavon-editor
				v-model="mddefaultdata"
				style="height: 100%"
			>
			</mavon-editor>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: 'mdindex',
	    props:["mddefaultdata",],
        data() {
            return {

            }
        },
        components: {},
        methods: {
			get_htlmvalue:function () { // 获取md数据,提供给父组件接口
				return this.mddefaultdata
            }
        }
    }
</script>



