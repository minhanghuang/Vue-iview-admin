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
		.content-box{
			margin-bottom: 5px;
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
	<div>
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
									<Form ref="rulesleft" :model="bottom.left" :rules="rulesleft">
										<Collapse>
											<Panel v-for="item in bottom.left.value" :key="item.id">
												{{item.node_name}}
												<div class="del-bt-box">
													<Button type="error" class="del-bt">删除</Button>
												</div>
												<div slot="content" class="content-box">
													<Button type="text">节点: </Button>
													<FormItem prop="nodename" style="display: inline-block;margin: 0">
														<Input maxlength="30" v-model="item.node_name" placeholder="节点名" style="width: 300px" />
													</FormItem>
												</div>
												<div slot="content" class="content-box">
													<Button type="text">内容: </Button>
													<FormItem prop="content" style="display: inline-block;margin: 0">
														<Input maxlength="300" type="textarea" v-model="item.content" placeholder="内容" style="width: 300px" />
													</FormItem>
												</div>
											</Panel>
										</Collapse>
										<Button type="dashed" long @click="add_bt">+添加节点{{bottom.right.count}}</Button>
									</Form>
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
	</div>
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
								node_name: "节点1",
							},
                            {
                                id: 1,
                                title:"节点2",
                                content:"content2",
                                node_name: "节点2",
                            }
						]
                    }
	            },
                rulesleft:{ // 校验表单规则
                    nodename: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '节点名不能为空', trigger: 'blur' }, // trigger: blur,change
                    ],
	                content: [ // FormItem标签中的 prop 属性预期值
                        { required: true, message: '内容不能为空', trigger: 'blur' }, // trigger: blur,change
                    ],
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

