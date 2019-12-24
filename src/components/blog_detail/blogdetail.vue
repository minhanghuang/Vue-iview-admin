<style lang="scss" scoped>
	.top-img{
		height: 401px;
		background-size: cover;
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" v-if="blog.blogid>0">
			<Row style="padding-bottom: 10px;height:auto; width: 100%;">
				<Col span="2" style="" >
					<Button type="error" @click="back_list_bt">返回</Button>
				</Col>
				<Col span="20" style="height: 100%;" >
					<detail-title
						:blog_detail="this.blog.http_data"
					></detail-title>
				</Col>
				<Col span="2" style="" >
					<Button type="info" ghost @click="open_img = true">查看图片</Button>
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
						style="height: 100%;zIndex:1000"
					>
					</mavon-editor>
				</Col>
			</Row>
		</Col>
		<Col span="24" v-else>
			<Button type="error" @click="back_list_bt">返回</Button>
		</Col>
		<Spin size="large" fix v-if="loadding" style="zIndex:2000"></Spin>
		<Modal v-model="open_img" fullscreen title="Fullscreen Modal" style="zIndex:2000">
			<Row>
				<Col span="24" class="top-img" :style="{backgroundImage: 'url(' + this.blog.http_data.image + ')'}">
				</Col>
			</Row>
			<Row style="height: 300px;width: 100%;margin-top: 20px">
				<Col span="8" offset="8">
					<Row style="height: 300px;width: 100%;background-color: #61aeee">
						<Col>

						</Col>
					</Row>
				</Col>
			</Row>
		</Modal>
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
	            open_img: false, // 打开图片弹框
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
            },
            read_image_bt:function () {
                // this.blog.blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id

            }
	    }
    }
</script>

