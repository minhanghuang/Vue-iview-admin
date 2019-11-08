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
						<Submenu name="1">
							<template slot="title">
								<Icon type="ios-navigate"></Icon>
								文章
							</template>
							<MenuItem name="listblog">
								列表
							</MenuItem>
							<MenuItem name="createblog">
								创建
							</MenuItem>
						</Submenu>
						<Submenu name="2">
							<template slot="title">
								<Icon type="ios-keypad"></Icon>
								Item 2
							</template>
							<MenuItem name="2-1">Option 1</MenuItem>
							<MenuItem name="2-2">Option 2</MenuItem>
						</Submenu>
						<Submenu name="3">
							<template slot="title">
								<Icon type="ios-analytics"></Icon>
								Item 3
							</template>
							<MenuItem name="3-1">Option 1</MenuItem>
							<MenuItem name="3-2">Option 2</MenuItem>
						</Submenu>
					</Menu>
				</Sider>
				<Layout :style="{padding: '0 24px 24px'}">
					<Breadcrumb :style="{margin: '24px 0'}">
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem>Components</BreadcrumbItem>
						<BreadcrumbItem>Layout</BreadcrumbItem>
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
        components:{
            mycontent,
            myhead,
        },
        methods: {
            toroute(name) {
                this.$router.push(name);
            }
        }
    }
</script>
