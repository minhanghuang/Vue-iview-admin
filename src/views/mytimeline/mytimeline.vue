<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="height: 100%;width: 100%;">
			<Timeline>
				<TimelineItem color="green">
					<Icon type="ios-trophy" slot="dot"></Icon>
					<span>发布里程碑版本</span>
				</TimelineItem>
				<TimelineItem>发布1.0版本</TimelineItem>
				<TimelineItem>发布2.0版本</TimelineItem>
				<TimelineItem>发布3.0版本</TimelineItem>
			</Timeline>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "mytimeline",
        components: {},
        data() {
            return {}
        },
    }
</script>

