<style scoped lang="scss">
	.layout{
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
		height: 100%;
		.ivu-layout{
			height: inherit;
		}
	}
	.header-con{
		height: 60px;
		width: 100%;
		background-color: white;
		margin: 0;
		padding: 0;
	}
</style>
<template>
	<div class="layout">
		<Layout>
			<Sider hide-trigger style="background-color: white;border-top: 1px solid #d7dde4">
				<Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="toroute">
					<MenuItem name="" style="height: 60px;">
						<Row>
							<Col span="18" offset="3">
								<span style="color: #409EFF;font-size: 20px;vertical-align:center">ADMIN</span>
							</Col>
						</Row>
					</MenuItem>
					<MenuItem name="dashboard">
						<Icon type="ios-stats" :size="icon_size" ></Icon>
						<span>Dashboard</span>
					</MenuItem>
					<Submenu name="1">
						<template slot="title">
							<Icon type="ios-book" :size="icon_size" ></Icon>
							文章
						</template>
						<MenuItem name="listblog">
							列表
						</MenuItem>
						<MenuItem name="createblog">
							创建
						</MenuItem>
					</Submenu>
					<Submenu name="system">
						<template slot="title">
							<Icon type="ios-cog" :size="icon_size" ></Icon>
							系统
						</template>
						<MenuItem name="tools">
							工具
						</MenuItem>
						<MenuItem name="task">
							代办任务
						</MenuItem>
						<MenuItem name="help">
							帮助文档
						</MenuItem>
						<MenuItem name="logs">
							系统更新日志
						</MenuItem>
					</Submenu>

					<Submenu name="person">
						<template slot="title">
							<Icon type="ios-contact" :size="icon_size" ></Icon>
							个人中心
						</template>
						<MenuItem name="cloudword">
							云词图
						</MenuItem>
						<MenuItem name="timeline">
							时光轴
						</MenuItem>
						<MenuItem name="about">
							关于
						</MenuItem>
					</Submenu>
				</Menu>
			</Sider>
			<Layout>
				<div class="header-con" style="height: 60px;width: 100%;background-color: white;">
					<myhead></myhead>
				</div>
				<Layout  style="padding: 0 24px 24px;box-shadow:inset 0 15px 1px -15px #000;">
					<Breadcrumb :style="{margin: '24px 0'}">
						<div v-for="item in breadcrumb_item.count" style="display: inline-block">
							<BreadcrumbItem :to="breadcrumb_item.data[item-1].path" >
								<Icon :type="breadcrumb_item.data[item-1].icon"></Icon>
								{{breadcrumb_item.data[item-1].name}}
							</BreadcrumbItem>
						</div>
						<BreadcrumbItem>{{current_blog}}</BreadcrumbItem>
					</Breadcrumb>
					<Content :style="{padding: '24px', Height: 'auto', background: '#fff'}">
						<mycontent>

						</mycontent>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	</div>
</template>
<script>
    import mycontent from '@/views/mycontent/mycontent'
    import myhead from '@/views/myhead/myhead'
    import { getBreadcrumbPath } from '@/utils/tools' // 配置面包屑 函数

    export default {
        data(){
          return {
              blog:{
                  blogid: -1, // 文章当前的id
              },
              icon_size: 20,
              breadcrumb_item: {
                  count: 2,
                  data:[
                      {
                          name: "Home",
                          path: "/",
	                      icon:"ios-home-outline"
                      },
                      {
                          name: "Dashboard",
                          path: "/dashboard",
                          icon:"ios-stats-outline"
                      },
                      {
                          name: "文章列表",
                          path: "/listblog",
                          icon:"ios-home-outline"
                      }
                  ],
              }
          }
        },
        components:{
            mycontent,
            myhead,
        },
	    watch:{
            "$route":function (newval, oldval) {
                var current_path = this.$route.path;
                this.breadcrumb_item = getBreadcrumbPath(current_path);
            }
	    },
        methods: {
            toroute(name) {
                if (name==="createblog"){
                    this.$store.commit("clear_current_blog_id", -1); // 清空Vuex中当前文章的id, 将id设为-1
                }
                this.$router.push(name);
            }
        },
	    computed:{
            current_blog:function () {
                this.blog.blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
	            return this.blog.blogid
            }
        }
    }
</script>
