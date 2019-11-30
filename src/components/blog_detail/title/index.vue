<style lang="scss" scoped>
	.title{
		box-sizing: border-box;
		display: block;
		height: 100%;
		margin: 6px 0;
		font-size: 23px;
		width: 100%;
		font-weight:400;
		font-family:lato-regular, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
		line-height:27.6px;
		text-align:center;
		text-size-adjust:100%;
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="height: 100%;width: 100%;">
			<Row style="height: 100%;width: 100%">
				<Col span="18" offset="2" style="height: 100%;padding: 30px 0 30px 0;text-align: center;">
					<Row style="width: 100%;">
						<Col span="24" style="height: 27px;margin: 6px 0;">
							<h4 class="title">
								{{this.blog.blog_detail.title}}
							</h4>
						</Col>
					</Row>
					<Row style="width: 100%;">
						<Col span="24" style="height: 22px;margin: 13px 0 18px 0;">
							<h4 class="subtitle">
								{{this.blog.blog_detail.subtitle}}
							</h4>
						</Col>
					</Row>
					<Row style="width: 100%;">
						<Col span="24" style="height: 27px;margin: 5px 0;">
							<span>
								<Icon type="md-person" />
								{{this.blog.username}},
							</span>
							<span>
								<Icon type="md-pricetags" />
								{{this.blog.tags}}
							</span>
							<span>
								<Icon type="ios-time" />
								    <Time :time="blog.createdate" :interval="1" />
							</span>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>

</template>

<script>
    export default {
        props:["blog_detail"],
        name: "blogdetailtitle",
        components: {},
        data() {
            return {
                blog:{
                    blog_detail:{

                    },
                    tags:"",
                    createdate: new Date(),
                    username:"",
                },

            }
        },
	    watch:{
            blog_detail:function (newvalue,oldvalue) { // 监听父组件 文章详细信息
                let tags = '';
                let time = "1979-01-01 00:00:00";
                let username = 'Cox';
				this.blog.blog_detail = newvalue; // 同步更新父组件文章详细信息
	            try {
	                let data = this.blog.blog_detail;
                    let blog_tags = JSON.parse(data.tag);
                    for (var key in blog_tags) {
                        tags += blog_tags[key] + ", "
                    }
                    time = data.createdate;
                    username = data.username;
                }catch (e) {

                }
				this.blog.tags = tags;
				this.blog.createdate = time;
				this.blog.username = username;
            },
		    deep:true
	    },
	    computed:{

	    },
	    methods:{

	    }
    }
</script>

