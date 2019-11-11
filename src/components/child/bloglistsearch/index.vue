<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100px;width: 100%;">
		<Col style="height: auto;width: 100%;">
			<Row>
				<Col span="24">
					<Tabs value="name1">
						<TabPane :label="label" name="name1"></TabPane>
						<TabPane label="公开" name="name2"></TabPane>
						<TabPane label="私密" name="name3"></TabPane>
						<TabPane label="草稿箱" name="name4"></TabPane>
					</Tabs>
				</Col>
			</Row>
			<Row style="height: 50px;width: 100%;">
				<Col span="24" style="height: inherit;width: inherit">
					<Row>
						<Col span="5" offset="10">
							<Input v-model="value1"  placeholder="输入关键字" />
						</Col>
						<Col span="5" offset="1">
							<DatePicker
								type="daterange"
								:options="options2"
								placement="bottom-end"
								placeholder="Select date"
								style="width: 200px"
							>
							</DatePicker>
						</Col>
						<Col span="2">
							<Button type="error">搜索</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "bloglistsearch",
        components: {},
        data() {
            return {
                label: (h) => {
                    return h('div', [
                        h('span', '全部'),
                        h('span', '(7)'),
                    ])
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        },
    }
</script>

