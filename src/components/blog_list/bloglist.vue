<style lang="scss" scoped>
	.button_action{

	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%">
			<bloglist-search
				ref="search"
				@get_list="update_list"
				@get_loadding_state="update_child_loadding_state"
			>
			</bloglist-search>
			<Row>
				<Col span="24">
					<Table stripe border :loading="table_loading" ref="selection" :columns="columns_table" :data="data_table">
						<template slot-scope="{ row, index }" slot="action">
							<div size="small" style="width: 100%">
								<Button size="small" class="button_action success" type="success" @click="handleInfo(row, index)" >查看</Button>
								<Button size="small" class="button_action info" type="info" @click="handleEdit(row, index)" >编辑</Button>
								<Button size="small" class="button_action error" type="error" @click="handleDelete(row, index,{'state':3,'title':'删除'})" v-if="row.state!='已删除'" >删除</Button>
								<Button size="small" class="button_action dashed" type="dashed" @click="handleDelete(row, index,{'state':0,'title':'恢复'})" v-if="row.state=='已删除'" >恢复</Button>
							</div>
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
    import BloglistSearch from '@/components/child/bloglistsearch' // md子组件

    export default {
        name: "bloglist",
	    components:{
            BloglistSearch,
	    },
        data () {
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
                        title: '标题',
                        key: 'title',
                        width:200,
                        fixed: 'left',
                    },
                    {
                        title: '内容',
                        key: 'subtitle',
                        ellipsis: true,
                    },
                    {
                        title: '创建时间',
                        key: 'createdate',
                        width: 200,
                        sortable: true // 排序
                    },
	                {
                        title: '状态',
                        key: 'state',
                        align: 'center',
                        width: 100,
                    },
                    {
                        title: '阅读量',
                        key: 'readcount',
                        align: 'center',
                        width: 80,
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
                        title: "title",
                        content: 'New York No. 1 Lake Park',
                        createdate: '2016-10-03',
                        state: '公开',
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
	                title:"title", // 弹框标题
                },
	            child_blog_detail:{ // 子组件数据
                    data:{ // 内容

                    }
	            },
            }
        },
        computed: { // 计算属性,不需要再data中定义,因为他就是监控data里面的数据
            table_loading: function () { // 表格是否加载中
                return this.table_prop.loading
            },
            page_total: function () { // 分页总页数
                return this.page_prop.total
            },
            page_size: function () { // 单页条数
                return this.page_prop.size
            },
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
            handleInfo:function (row, index) { // 点击查看按钮
                this.$store.commit("update_current_blog_id",row.id); // 将当前被查看的文章对应的id存到vuex中
                this.$router.push("detailblog");
            },
            handleEdit:function (row, index) { // 点击编辑按钮
                this.$store.commit("update_current_blog_id",row.id); // 将当前被查看的文章对应的id存到vuex中
                this.$router.push("createblog");
            },
            handleDelete:function (row, index, data) { // 点击删除按钮
                this.$Modal.confirm({
                    title: data.title+'文章'+row.title,
                    okText: data.title,
                    cancelText: '取消',
                    onOk: () => {
                        this.$api.api_all.delete_article_list_api( // 删除博文api
                            row.id, data.state
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
                    onCancel: () => {
                    }
                });
            },
		    update_list:function (response_data) {
                this.data_table = response_data.results; // 后端接口博文列表
                this.page_prop.total = response_data.count; // 总页数
                this.page_prop.size = response_data.size; // 单页条数
                this.table_prop.loading = false; // 表格是否加载中
            },
            update_child_loadding_state:function (loadding_state) {
	            this.table_prop.loading = loadding_state
            },
	    }
    }
</script>

