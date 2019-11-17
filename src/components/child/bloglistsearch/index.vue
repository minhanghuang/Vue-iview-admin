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
					<Tabs value="name1" @on-click="click_tabpane">
						<TabPane :label="tabpane.label.all" name="all"></TabPane>
						<TabPane :label="tabpane.label.public" name="public"></TabPane>
						<TabPane :label="tabpane.label.private" name="private"></TabPane>
						<TabPane :label="tabpane.label.draft" name="draft"></TabPane>
						<TabPane :label="tabpane.label.delete" name="delete"></TabPane>
					</Tabs>
				</Col>
			</Row>
			<Row style="height: 62px;width: 100%;background-color: #f5f7f9">
				<Col span="24" style="height: 100%;width: 100%">
					<Row>
						<div class="div_inline_block search_len" style="height: 62px;padding: 15px 0;">
							<div class="div_inline_block">
								<Button type="text" >内容:</Button>
							</div>
							<div class="div_inline_block" style="width: 170px">
								<Input v-model="input_value" @on-enter="search_bt" @on-clear="search_bt" clearable placeholder="输入关键字" />
							</div>
							<div class="div_inline_block">
								<Button type="text">创建时间:</Button>
							</div>
							<div class="div_inline_block">
								<DatePicker
									type="daterange"
									:value="this.time.create.time_value"
									@on-change="create_time_change"
									:options="this.time.create.options"
									placement="bottom-end"
									placeholder="Select date"
									style="width: 200px"
								>
								</DatePicker>
							</div>
							<div class="div_inline_block">
								<Button type="text">更新时间:</Button>
							</div>
							<div class="div_inline_block">
								<DatePicker
										type="daterange"
										:value="this.time.update.time_value"
										@on-change="update_time_change"
										:options="this.time.update.options"
										placement="bottom-end"
										placeholder="Select date"
										style="width: 200px"
								>
								</DatePicker>
							</div>
							<div class="div_inline_block" style="margin-left: 35px ">
								<Button type="error" @click="search_bt">搜索</Button>
							</div>
						</div>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>

    function get_article_state(self, params) { // 获取文章状态
        self.$api.api_all.get_article_state_api(
            params
        ).then((response)=>{
            self.tabpane.label.response_data = response.data; // 完成的后端请求数据
        }).catch((error)=>{
            self.$Message.error(error.response.data.msg);
        })
    }
    function get_article_list(self,params) { // 获取文章列表 (函数包含获取文章状态api)
        self.$api.api_all.get_article_list_api(
            params
        ).then((response)=>{
            self.blog.response_data = response.data; // 完成的后端请求数据
            self.$emit("get_list",self.blog.response_data) // 将后端返回的数据全部传给父组件
        }).catch((error)=>{
            self.$Message.error(error.response.data.msg);
        });
        get_article_state(self, params); // 获取文章状态 api
    }

    export default {
        name: "bloglistsearch",
        components: {},
        data() {
            return {
                tabpane:{
                    label:{
                        response_data:{},
                        all: (h) => {
				            return h('div', [
				                h('span', '全部'),
				                h('span', this.tagpane_all),
				            ])
                        },
                        public: (h) => {
				            return h('div', [
				                h('span', '公开'),
				                h('span', this.tagpane_public),
				            ])
                        },
                        private: (h) => {
				            return h('div', [
				                h('span', '私密'),
				                h('span', this.tagpane_private),
				            ])
                        },
                        draft: (h) => {
				            return h('div', [
				                h('span', '草稿箱'),
				                h('span', this.tagpane_draft),
				            ])
                        },
                        delete: (h) => {
                            return h('div', [
                                h('span', '已删除'),
                                h('span', this.tagpane_delete),
                            ])
                        },
                    }
                },
                input_value:'',
	            blog:{
                    response_data:{}
	            },
	            time: {
                    create:{
                        time_value: ['',''],
                        options: {
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
                        },
                    },
		            update:{
                        time_value: ['',''],
                        options: {
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
                        },
                    }
	            }
            }
        },
	    computed:{
            tagpane_all:function () {
                let count_all = 0;
                try{
                    count_all = this.tabpane.label.response_data.results.all;
                }catch(err){
                    count_all = 0;
                }
	            return "("+count_all+")"
            },
            tagpane_public:function () {
                let count_public = 0;
                try{
                    count_public = this.tabpane.label.response_data.results.public;
                }catch(err){
                    count_public = 0;
                }
                return "("+count_public+")"
            },
            tagpane_private:function () {
                let count_private = 0;
                try{
                    count_private = this.tabpane.label.response_data.results.private;
                }catch(err){
                    count_private = 0;
                }
                return "("+count_private+")"
            },
            tagpane_draft:function () {
                let count_draft = 0;
                try{
                    count_draft = this.tabpane.label.response_data.results.draft;
                }catch(err){
                    count_draft = 0;
                }
                return "("+count_draft+")"
            },
            tagpane_delete:function () {
                let count_delete = 0;
                try{
                    count_delete = this.tabpane.label.response_data.results.delete;
                }catch(err){
                    count_delete = 0;
                }
                return "("+count_delete+")"
            }
	    },
        created() { // html加载成功之前调用该函数
            get_article_list(this); // 获取文章列表 api
        },
	    methods:{
            click_tabpane:function (name) { // 点击tabpane标签页
                let article_state = "";
	            if (name==="all"){
                    article_state = ""
	            } else if (name==="public") {
                    article_state = 1
	            } else if (name==="private") {
                    article_state = 2
                }else if (name==="draft") {
                    article_state = 0
                }else if (name==="delete") {
                    article_state = 3
                }else {
                    this.$Message.error("非法操作");
	            }
                this.$api.api_all.get_article_list_api({
	                "state":article_state,
                    "search":this.input_value, // 搜索输入框内容
                    "createdate_after":this.time.create.time_value[0], // 搜索输入框内容
                    "createdate_before":this.time.create.time_value[1], // 搜索输入框内容
                    "updatedate_after":this.time.update.time_value[0], // 搜索输入框内容
                    "updatedate_before":this.time.update.time_value[1],
                }).then((response)=>{
                    this.blog.response_data = response.data; // 完成的后端请求数据
                    this.$emit("get_list",this.blog.response_data) // 将后端返回的数据全部传给父组件
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                });
            },
            search_bt:function () { // 搜索-按钮
                get_article_list(this,{
                    "search":this.input_value, // 搜索输入框内容
                    "createdate_after":this.time.create.time_value[0], // 搜索输入框内容
                    "createdate_before":this.time.create.time_value[1], // 搜索输入框内容
                    "updatedate_after":this.time.update.time_value[0], // 搜索输入框内容
                    "updatedate_before":this.time.update.time_value[1], // 搜索输入框内容
                }); // 获取文章列表 api
            },
            create_time_change:function (time_value) { // 文章创建时间-日期选择器
                this.time.create.time_value = time_value;
                get_article_list(this,{
                    "search":this.input_value, // 搜索输入框内容
                    "createdate_after":time_value[0], // 起始时间
                    "createdate_before":time_value[1], // 终止时间
                    "updatedate_after":this.time.update.time_value[0], // 起始时间
                    "updatedate_before":this.time.update.time_value[1], // 终止时间
                }); // 获取文章列表 api
            },
            update_time_change:function (time_value) { // 文章更新时间-日期选择器
                this.time.update.time_value = time_value;
                get_article_list(this,{
                    "search":this.input_value, // 搜索输入框内容
                    "updatedate_after":time_value[0], // 起始时间
                    "updatedate_before":time_value[1], // 终止时间
                    "createdate_after":this.time.create.time_value[0], // 起始时间
                    "createdate_before":this.time.create.time_value[1], // 终止时间
                }); // 获取文章列表 api
            },
	    }
    }
</script>

