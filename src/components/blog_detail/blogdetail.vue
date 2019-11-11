<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24">
			<Row style="padding-bottom: 16px">

				<Col span="3" offset="8">
					<Icon type="ios-contact" size="18" />
					<span>{{blog.http_data.username}}</span>
				</Col>
				<Col span="5">
					<Icon type="ios-time" size="18" />
					<span>{{blog.http_data.createdate}}</span>
				</Col>

			</Row>
			<Row>
				<Col span="24">
					<mavon-editor
						v-model="blog.http_data.content"
						:editable="false"
						:toolbarsFlag="false"
						:subfield="false"
						:boxShadow="false"
						defaultOpen="preview"
					>
					</mavon-editor>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "blogdetail",
	    props:["data",],
        components: {},
        data() {
            return {
                blog: { // 文章
                  http_data: { // 文章详细信息

                  }
                },
            }
        },
        created() { // html加载成功之前调用该函数
            let blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
	        if (blogid > 0){ // 正常点击查看文章详细信息
                this.$api.api_all.detail_article_list_api( // 发http请求, 获取id对应文章的详细信息
                    blogid
                ).then((response)=>{ // 成功获取博文详细信息
                    this.blog.http_data = response.data.results[0]; // 后端接口博文详细信息
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                })
	        }else { // 异常查看
                this.blog.http_data = {} // 返回空数据
	        }
        },
    }
</script>

