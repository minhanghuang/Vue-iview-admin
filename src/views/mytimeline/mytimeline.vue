<style lang="scss" scoped>
	.top-pane{
		overflow: scroll
	}
	.bottom-pane{
		border: 1px solid #dcdee2;
		overflow: scroll
	}
	.bottom-split-pane{
		padding: 10px;
		.inner-item{
			margin-left: 15px ;
		}
		.del-bt-box{
			display: inline-block;
			height: 38px;
			width:auto;
			float: right;
			margin-right: 1px;
			.del-bt{
				margin: auto 0
			}
		}
	}

	.my-form >>> .ivu-form-item{
		height: auto;
		width: auto;
		margin: 0;
		padding-bottom: 26px;
	}

	.my-form{
		.my-form-items{
			.inner-item{
				margin-left: 15px ;
			}
			.my-input{
				width: 372px;
			}
		}
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="">
			<Row style="min-height: 350px;background-color: yellow">
				<Col style="height: 100%;width: 100%">
					<div style="height: 500px" class="top-pane">

					</div>
				</Col>
			</Row>

			<Divider />
			
			<Row style="min-height: 350px;">
				<Col style="height: 100%;width: 100%">
					<div style="height: 500px" class="bottom-pane">
						<Split v-model="splitvalue">
							<div slot="left" class="bottom-split-pane">
								<Collapse>
									<Panel v-for="item in bottom.left.value" :key="item.id">
										{{item.title}}
										<div class="del-bt-box">
											<Button type="error" class="del-bt">删除</Button>
										</div>
										<p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
									</Panel>
								</Collapse>
								<Button type="dashed" long @click="add_bt">+添加节点{{bottom.right.count}}</Button>
							</div>
							<div slot="right" class="bottom-split-pane">
								<div style="margin: 15px;height: 100%" class="my-form">
									<Form ref="rulesright" :model="bottom.right" :rules="rulesright">
										<FormItem prop="sort">
											<div class="my-form-items">
												升序模式
												<i-switch v-model="bottom.right.sort" class="inner-item"></i-switch>
											</div>
										</FormItem>
										<FormItem prop="pending">
											<Tooltip content="开启后,标记最后一个为幽灵节点" placement="bottom-start">
												<div class="my-form-items">
													幽灵模式
													<i-switch v-model="bottom.right.pending" class="inner-item"></i-switch>
												</div>
											</Tooltip>
										</FormItem>
									</Form>
								</div>
							</div>
						</Split>
					</div>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "mytimeline",
        components: {},
        data() {
            return {
                splitvalue: 0.7,
	            bottom:{
                    right:{
                        pending: true, // 幽灵模式
                        sort: true, // 升序模式
                        count: 1, // 节点个数
                    },
                    left:{
						value:[
							{
							    id: 0,
							    title:"节点1",
                                content:"content1",
							},
                            {
                                id: 1,
                                title:"节点2",
                                content:"content2",
                            }
						]
                    }
	            }
            }
        },
	    watch:{
            splitvalue:function (newval, oldval) {
	            if (newval > 0.7){
	                this.splitvalue = 0.7; // 面板分割不能太右
	            }
                if (newval < 0.5){
                    this.splitvalue = 0.5 // 面板分割不能太左
                }
            }
	    },
	    methods:{
            add_bt:function () { // 添加节点触发
	            this.bottom.right.count ++; // 自增
            }
	    }
    }
</script>

