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
						<TabPane :label="label" name="all"></TabPane>
						<TabPane label="公开" name="public"></TabPane>
						<TabPane label="私密" name="private"></TabPane>
						<TabPane label="草稿箱" name="draft"></TabPane>
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
                },
                input_value:'',
	            blog:{
                    http_data:{}
	            }
            }
        },
	    methods:{
            get_blog_list:function (){
				return this.blog.http_data
            },
            click_tabpane:function (name) {
                let article_state = ""
	            if (name=="all"){
	                console.log("all")
                    article_state = ""
	            } else if (name=="public") {
                    console.log("public")
                    article_state = 1
	            } else if (name=="private") {
                    console.log("private")
                    article_state = 2
                }else if (name=="draft") {
                    console.log("draft")
                    article_state = 0
                }else {
                    console.log("xxx")
	            }
                this.$api.api_all.get_article_list_api(
	                {state: article_state}
                ).then((response)=>{
					console.log(response.data.results)
	                this.blog.http_data = response.data.results;
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
            }
	    }
    }
</script>

