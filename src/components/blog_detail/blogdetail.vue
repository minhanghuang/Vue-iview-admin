<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" v-if="blog.blogid>0">
			<Row style="padding-bottom: 10px;height:auto; width: 100%;">
				<Col span="2" style="" >
					<Button type="error" @click="back_list_bt">返回</Button>
				</Col>
				<Col span="22" style="height: 100%;" >
					<detail-title
						:blog_detail="this.blog.http_data"
					></detail-title>
				</Col>
			</Row>
			<Row style="height: 700px;width: 100%" >
				<Col span="24" style="height: 100%;width: 100%">
					<mavon-editor
						v-model="blog.http_data.content"
						:editable="false"
						:toolbarsFlag="false"
						:subfield="false"
						:boxShadow="false"
						defaultOpen="preview"
						style="height: 100%"
					>
					</mavon-editor>
				</Col>
			</Row>
		</Col>
		<Col span="24" v-else>
			<Button type="error" @click="back_list_bt">返回</Button>
		</Col>
		<Spin size="large" fix v-if="loadding" style="zIndex:2000"></Spin>
	</Row>
</template>

<script>
	import DetailTitle from "@/components/blog_detail/title"
    export default {
        name: "blogdetail",
        components: {
            DetailTitle,
        },
        data() {
            return {
                blog: { // 文章
					http_data: { // 文章详细信息

					},
                    blogid: -1, // 当前文章id
                },
                loadding: true, // loadding
            }
        },
        created() { // html加载成功之前调用该函数
            this.blog.blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
	        if (this.blog.blogid > 0){ // 正常点击查看文章详细信息
                this.$api.api_all.detail_article_list_api( // 发http请求, 获取id对应文章的详细信息
                    this.blog.blogid
                ).then((response)=>{ // 成功获取博文详细信息
                    this.blog.http_data = response.data.results[0]; // 后端接口博文详细信息
                    this.loadding= false; // 关闭 loadding
                    this.$store.commit("update_current_blog_detail", this.blog.http_data);
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding= false; // 关闭 loadding
                })
	        }else { // 异常查看
                this.blog.http_data = {}; // 返回空数据
                this.loadding= false; // 关闭 loadding
            }
        },
	    beforeDestroy(){ // Vue组件销毁前 钩子
            this.$store.commit("clear_current_blog_id", -1); // 清空Vuex中当前文章的id, 将id设为-1
	    },
	    methods:{
            back_list_bt:function () { // 点击返回按钮, 返回文章列表
                this.$router.push("listblog");
            }
	    }
    }
</script>

