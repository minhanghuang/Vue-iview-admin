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

</style>
<template>
	<div class="layout">
		<Layout>
			<Header style="background-color: #363436">
				<Menu mode="horizontal" theme="dark" active-name="1">
					<myhead></myhead>
				</Menu>
			</Header>
			<Layout>
				<Sider hide-trigger :style="{background: '#fff'}">
						<Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="toroute">
						<MenuItem name="">
							<Icon type="ios-stats"></Icon>
							<span>Dashboard</span>
						</MenuItem>
						<Submenu name="1">
							<template slot="title">
								<Icon type="ios-paper"></Icon>
								文章
							</template>
							<MenuItem name="listblog">
								列表
							</MenuItem>
							<MenuItem name="createblog">
								创建
							</MenuItem>
						</Submenu>
						<MenuItem name="person">
							<Icon type="ios-contact"></Icon>
							<span>个人中心</span>
						</MenuItem>
					</Menu>
				</Sider>
				<Layout :style="{padding: '0 24px 24px'}">
					<Breadcrumb :style="{margin: '24px 0'}">
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem>Components</BreadcrumbItem>
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

    export default {
        data(){
          return {
              blog:{
                  blogid: -1, // 文章当前的id
              }
          }
        },
        components:{
            mycontent,
            myhead,
        },
        methods: {
            toroute(name) {
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
