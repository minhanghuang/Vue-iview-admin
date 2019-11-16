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
								<Input v-model="input_value"  placeholder="输入关键字" />
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

                    }
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
                },
                input_value:'',
	            blog:{
                    response_data:{}
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
            }
	    },
        created() { // html加载成功之前调用该函数
            this.$api.api_all.get_article_list_api(

            ).then((response)=>{
                this.blog.response_data = response.data; // 完成的后端请求数据
                this.$emit("get_list",this.blog.response_data) // 将后端返回的数据全部传给父组件
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
            });

            this.$api.api_all.get_article_state_api().then((response)=>{
                this.tabpane.label.response_data = response.data; // 完成的后端请求数据
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
            })
        },
	    methods:{
            click_tabpane:function (name) { // 点击事件
                let article_state = "";
	            if (name==="all"){
                    article_state = ""
	            } else if (name==="public") {
                    article_state = 1
	            } else if (name==="private") {
                    article_state = 2
                }else if (name==="draft") {
                    article_state = 0
                }else {
                    this.$Message.error("非法操作");
	            }
                this.$api.api_all.get_article_list_api(
	                {state: article_state}
                ).then((response)=>{
	                this.blog.response_data = response.data; // 完成的后端请求数据
					this.$emit("get_list",this.blog.response_data) // 将后端返回的数据全部传给父组件
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
            }
	    }
    }
</script>

