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

										<Collapse  v-model="bottom.left.openpanellist" @on-change="change_collapse" :accordion="bottom.accordion">
											<Panel v-for="item in bottom.left.value" :key="item.id" :name="item.id">

												{{item.node_name}}
												<div class="del-bt-box">
													<Button type="error" class="del-bt" @click="del_panel_bt(item.id)">删除</Button>
												</div>
												<div slot="content" class="content-box">
													<Row>
														<Col span="2">
															<Button type="text">节点: </Button>
														</Col>
														<Col span="10">
															<FormItem prop="" >
																<Input maxlength="30" v-model="item.node_name" placeholder="节点名" style="width: auto;display: block" />
															</FormItem>
														</Col>
													</Row>
												</div>
												<div slot="content" class="content-box">
													<Row>
														<Col span="2">
															<Button type="text" style="">内容: </Button>
														</Col>
														<Col span="16">
															<FormItem prop="a" >
																<div v-for="item_inner in item.content" >
																	<Row>
																		<Col span="20">
																			<Input :key="item_inner.id_inner"  maxlength="300" type="textarea" v-model="item_inner.col" placeholder="内容" style="width: auto;display: block;margin-bottom: 26px" >

																			</Input>
																		</Col>
																		<Col span="2" offset="1">
																			<Button icon="ios-trash" type="error"></Button>
																		</Col>
																	</Row>
																</div>
																<Button type="dashed" long @click="add_inner_bt">+添加内容</Button>
															</FormItem>
														</Col>
													</Row>
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
											<FormItem prop="accordion">
												<Tooltip content="开启风琴模式，每次只能打开一个面板。" placement="bottom-start">
													<div class="my-form-items">
														风琴模式
														<i-switch v-model="bottom.accordion" class="inner-item"></i-switch>
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
                    accordion: false, // 开启手风琴模式，每次只能打开一个面板。
                    right:{
                        pending: true, // 幽灵模式
                        sort: true, // 升序模式
                        count: 0, // 节点个数
                    },
                    left:{
                        openpanellist: [], // 打开的面板
                        value:[
							{
							    id: "0", // id只能是字符串
							    title:"节点",
                                content:[
	                                {
	                                    id_inner: "0",
		                                col:"内容1"
	                                },
                                    {
                                        id_inner: "1",
                                        col:"内容2"
                                    }
                                ],
								node_name: "节点",
							},
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
                this.bottom.right.count ++; // 自增, 字符串自增会变成int类型
                this.bottom.left.value.push({ // 将节点加到列表中
                    id: this.bottom.right.count + "", // 需要将id转成字符串
                    title:"节点"+this.bottom.right.count,
                    content:[
                        {
                            id_inner: "0",
                            col:"内容1"
                        },
                        {
                            id_inner: "1",
                            col:"内容2"
                        }
                    ],
                    node_name: "节点"+this.bottom.right.count,
                },);
            },
            change_collapse:function (key) { // 切换面板时触发，返回当前已展开的面板的 key，格式为数组
	            this.bottom.left.openpanellist = key;
            },
            del_panel_bt:function (index) { // 删除节点触发
                this.bottom.left.value.splice(this.bottom.left.value.findIndex(e => e.id == index), 1);
            }
	    }
    }
</script>

