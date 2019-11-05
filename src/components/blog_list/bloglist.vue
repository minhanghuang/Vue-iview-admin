<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%">
			<Row>
				<Col span="24">
					<Table stripe border :loading="table_loading" ref="selection" :columns="columns_table" :data="data_table">
						<template slot-scope="{ row, index }" slot="action">
							<ButtonGroup size="small">
								<Button type="info" @click="handleInfo(row, index)">查看</Button>
								<Button type="success" @click="handleEdit(row, index)">编辑</Button>
								<Button type="error" @click="handleDelete(row, index)">删除</Button>
								<Modal
									v-model="modal.modalinfo"
									title="Common Modal dialog box title"
									@on-ok="okInfo()"
									@on-cancel="cancelInfo()"
								>
									<blogdetail
										:data = "blog_detail_data"
									>

									</blogdetail>
								</Modal>
							</ButtonGroup>
						</template>
					</Table>
				</Col>
			</Row>
			<Row style="margin-top: 30px" type="flex" justify="center">
				<Col span="20">
					<Page
						:total="page_total"
						:page-size="page_size"
						@on-change="on_change_page"
						show-elevator show-total
					></Page>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    import blogdetail from '@/components/blog_detail/blogdetail'

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
                        type: 'index',
                        width: 70,
                        align: 'center',
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
                        slot: 'action'
                    }
                ],
                data_table: [ // 获取博文列表之后, 不止以下几个字段,会被整个博文列表返回值给替代
                    {
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
                    size : 0, // 单页条数
                },
                modal:{
                    modalinfo:false, // 查看消息按钮弹框
                },
                modal_data:{
                    id:"",
                    title:"",
                },
	            child_blog_detail:{ // 子组件数据
                    data:{ // 内容
						"a":"A"
                    }
	            },
            }
        },
        components: {
            blogdetail, // 子组件 - 博文详细信息
        },
        created() {
            this.$api.api_all.get_article_list_api().then((response)=>{
	            this.data_table = response.data.results; // 后端接口博文列表
                this.page_prop.total = response.data.count; // 总页数
                this.page_prop.size = response.data.size; // 单页条数
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
            },
            page_size: function () { // 单页条数
                return this.page_prop.size
            },
            blog_detail_data:function () {
	            return this.child_blog_detail.data
            }
        },
	    methods:{
            on_change_page:function (callback_page) { // 点击页码, 回调参数
                this.$api.api_all.get_article_list_api(
	                {"page":callback_page} // get请求url携带参数
                ).then((response)=>{
                    this.data_table = response.data.results; // 后端接口博文列表
                    this.page_prop.total = response.data.count; // 总页数
                    this.page_prop.size = response.data.size; // 单页条数
                    this.table_prop.loading = false; // 表格是否加载中
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
            },
            handleInfo:function (row, index) {
                this.modal.modalinfo = true; // 查看消息按钮弹框, 设置为true, 则弹框
                this.$store.commit("update_blog_modalinfo",row.id); // 设置当前的id到vuex
                this.child_blog_detail.data = row; // 将对应行的博文信息传给子组件(博文详细信息)
            },
            handleEdit:function (row, index) {
                console.log(row)
            },
            handleDelete:function (row, index) {
                this.$api.api_all.delete_article_list_api(
                    row.id
                ).then((response)=>{
	                    this.$Message.success(response.data.msg);
                    this.$api.api_all.get_article_list_api().then((response)=>{ // 删除成功后再次请求列表数据
                        this.data_table = response.data.results; // 后端接口博文列表
                        this.page_prop.total = response.data.count; // 总页数
                        this.page_prop.size = response.data.size; // 单页条数
                        this.table_prop.loading = false; // 表格是否加载中
                    }).catch((error)=>{
                        this.$Message.error(error.response.data.msg);
                    })
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
            },
            okInfo:function () { // 查看-ok
                let id = this.$store.getters.get_blog_modalinfo;
	            console.log(this.data_table[id].content)
            },
            cancelInfo:function () { // 查看-cancel
                let id = this.$store.getters.get_blog_modalinfo;
                console.log(id)
            }
	    }
    }
</script>

