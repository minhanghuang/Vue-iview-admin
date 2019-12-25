<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%;">
			<Row>
				<Col span="24">
					<Table stripe border ref="selection" :columns="columns_table" :data="data_table">
						<template slot-scope="{ row, index }" slot="action">
							<div size="small" style="width: 100%">
								<Button size="small" class="button_action success" type="error" ghost @click="handleInfo(row, index)" >拉黑</Button>
							</div>
						</template>
					</Table>
				</Col>
			</Row>
			<Row style="margin-top: 30px" type="flex" justify="center">
				<Col span="20">
					<Page
						total="100"
						page-size="10"
						@on-change="on_change_page"
						show-elevator show-total
					></Page>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "myvisitors",
        components: {},
        data() {
            return {
                columns_table: [
                    {
                        type: 'index',
                        width: 70,
                        align: 'center',
                        fixed: 'left', // 固定在左边
                        sortable: true // 排序
                    },
                    {
                        title: 'ip地址',
                        key: 'ip',
                        width:200,
                        fixed: 'left',
                        align: 'center',
                    },
                    {
                        title: '地点',
                        key: 'city',
                        // width:200,
                        align: 'center',
                    },
                    {
                        title: '经纬度',
                        key: 'positioning',
                        // width: 250,
                        align: 'center',
                        // sortable: true // 排序
                    },
                    {
                        title: '状态',
                        key: 'state',
                        align: 'center',
                        width: 100,
                    },
                    {
                        title: '接口访问次数',
                        key: 'countapi',
                        align: 'center',
                        width: 100,
                    },
                    {
                        title: '时间',
                        key: 'time',
                        align: 'center',
                        width: 200,
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        align: 'center',
                        width: 230,
                        fixed: 'right',
                    }
                ],
                data_table: [ // 获取博文列表之后, 不止以下几个字段,会被整个博文列表返回值给替代
                    {
                        ip: "192.169.0.1",
                        city: '中国 深圳',
                        positioning: '北纬23.4 东经184.9',
                        state: '正常',
                        countapi: '100',
                        time: '2019-12-25 00:00:00',
                        operating: '2016-10-03',
                    }
                ],
            }
        },
	    methods:{
	    }
    }
</script>

