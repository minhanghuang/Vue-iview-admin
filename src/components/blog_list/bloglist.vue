<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%">
			<Row>
				<Col span="24">
					<Table stripe border :loading="table_loading" ref="selection" :columns="columns_table" :data="data_table"></Table>
				</Col>
			</Row>
			<Row style="margin-top: 30px" type="flex" justify="center">
				<Col span="20">
					<Page :total="page_total" @on-change="on_change_page" show-elevator show-total ></Page>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "bloglist",
        data () {
            return {
                columns_table: [
                    {
	                    // 多选标签
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'id',
                        key: 'id',
                        width:70, // 列宽
                        sortable: true // 排序
                    },
                    {
                        title: '标题',
                        key: 'title',
                        width:300,
                    },
                    {
                        title: '内容',
                        key: 'content',
                        ellipsis: true,
                    },
                    {
                        title: '更新时间',
                        key: 'updatedate',
                        sortable: true // 排序
                    },
                    {
                        title: '操作',
                        key: 'operating'
                    }
                ],
                data_table: [
                    {
                        id: '0',
                        title: "title",
                        content: 'New York No. 1 Lake Park',
                        updatedate: '2016-10-03',
                        operating: '2016-10-03',
                    }
                ],
	            table_prop:{ // 表格
                    loading : true, // 默认加载中 loading
	            },
                page_prop:{ // 分页
                    total : 0, // 总页数
                }
            }
        },
        created() {
            this.$api.api_all.get_article_list().then((response)=>{
	            this.data_table = response.data.results; // 后端接口博文列表
                this.page_prop.total = response.data.count; // 总页数
	            this.table_prop.loading = false; // 表格是否加载中
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
            })
        },
        computed: {
            table_loading: function () { // 表格是否加载中
                return this.table_prop.loading
            },
            page_total: function () { // 分页总页数
                return this.page_prop.total
            }
        },
	    methods:{
            on_change_page:function (callback_page) { // 点击页码, 回调参数
                this.$api.api_all.get_article_list(
	                {"page":callback_page} // get请求url携带参数
                ).then((response)=>{
                    this.data_table = response.data.results; // 后端接口博文列表
                    this.page_prop.total = response.data.count; // 总页数
                    this.table_prop.loading = false; // 表格是否加载中
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
            }
	    }
    }
</script>

