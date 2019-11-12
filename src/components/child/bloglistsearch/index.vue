<style lang="scss" scoped>
	.div_inline_block{
		display: inline-block;
	}
	.search_len{
		width: 950px;
	}
</style>

<template>
	<Row style="height: 135px;width: 100%;">
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
			<Row style="height: 62px;width: 100%;background-color: #f5f7f9">
				<Col span="24" style="height: 100%;width: 100%">
					<Row>
						<div class="div_inline_block search_len" style="height: 62px;padding: 15px 0;">
							<div class="div_inline_block">
								<Button type="text">内容:</Button>
							</div>
							<div class="div_inline_block" style="width: 170px">
								<Input v-model="value1"  placeholder="输入关键字" />
							</div>
							<div class="div_inline_block">
								<Button type="text">创建时间:</Button>
							</div>
							<div class="div_inline_block">
								<DatePicker
									type="daterange"
									:options="options2"
									placement="bottom-end"
									placeholder="Select date"
									style="width: 200px"
								>
								</DatePicker>
							</div>
							<div class="div_inline_block">
								<Button type="text">创建时间:</Button>
							</div>
							<div class="div_inline_block">
								<DatePicker
										type="daterange"
										:options="options2"
										placement="bottom-end"
										placeholder="Select date"
										style="width: 200px"
								>
								</DatePicker>
							</div>
							<div class="div_inline_block" style="margin-left: 35px ">
								<Button type="error">搜索</Button>
							</div>
						</div>
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

