<style lang="scss" scoped>
	.top-pane{
		overflow: scroll;
		.time{
			font-size: 14px;
			font-weight: bold;
		}
		.content{
			padding-left: 5px;
		}
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
				<Row style="min-height: 350px;">
					<Col style="height: 100%;width: 100%">
						<div style="height: 500px" class="top-pane">
							<Timeline>
								<TimelineItem>
									<p class="time">1976年</p>
									<p class="content">Apple I 问世</p>
								</TimelineItem>
								<TimelineItem>
									<p class="time">1984年</p>
									<p class="content">发布 Macintosh</p>
								</TimelineItem>
								<TimelineItem>
									<p class="time">2007年</p>
									<p class="content">发布 iPhone</p>
								</TimelineItem>
								<TimelineItem>
									<p class="time">2010年</p>
									<p class="content">发布 iPad</p>
								</TimelineItem>
								<TimelineItem>
									<p class="time">2011年10月5日</p>
									<p class="content">史蒂夫·乔布斯去世</p>
								</TimelineItem>
							</Timeline>
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
															<FormItem prop="node" >
																<Input maxlength="30" v-model="item.node_name" placeholder="节点名" style="width: auto;display: block" />
															</FormItem>
														</Col>
													</Row>
												</div>
												<div slot="content" class="content-box">
													<Row>
														<Col span="2">
															<Button type="text">颜色: </Button>
														</Col>
														<Col span="10">
															<FormItem prop="color">
																<Select v-model="item.color" style="width:100%">
																	<Option v-for="item_color in bottom.right.colorlist" :value="item_color.value" :key="item_color.value">{{item_color.label}}</Option>
																</Select>
															</FormItem>
														</Col>
													</Row>
												</div>
												<div slot="content" class="content-box">
													<Row>
														<Col span="2">
															<Button type="text">Icon: </Button>
														</Col>
														<Col span="10">
															<FormItem prop="icon" >
																<Input maxlength="30" v-model="item.icon" placeholder="icon" style="width: auto;display: block" />
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
															<FormItem prop="content" >
																<div v-for="item_inner in item.content" >
																	<Row>
																		<Col span="20">
																			<Input :key="item_inner.id_inner"  maxlength="300" type="textarea" v-model="item_inner.col" placeholder="内容" style="width: auto;display: block;margin-bottom: 26px" >

																			</Input>
																		</Col>
																		<Col span="2" offset="1">
																			<Button icon="ios-trash" type="error" @click="del_content_bt(item.id, item_inner.id_inner)"></Button>
																		</Col>
																	</Row>
																</div>
																<Button type="dashed" long @click="add_inner_bt(item.id)">+添加内容</Button>
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
											<FormItem prop="limit_count">
												<div class="my-form-items">
													节点上限
													<InputNumber :max="limit.node.value" :min="1" v-model="limit.node.count" :disabled="limit.node.disabled"></InputNumber>
													<Button type="warning" @click="limit.node.disabled = !limit.node.disabled" v-if="limit.node.disabled">解锁</Button>
													<Button type="warning" @click="limit.node.disabled = !limit.node.disabled" v-else >锁定</Button>
												</div>
											</FormItem>
											<FormItem prop="limit_count_inner">
												<div class="my-form-items">
													内容上限
													<InputNumber :max="limit.inner.value" :min="1" v-model="limit.inner.count" :disabled="limit.inner.disabled"></InputNumber>
													<Button type="warning" @click="limit.inner.disabled = !limit.inner.disabled" v-if="limit.inner.disabled">解锁</Button>
													<Button type="warning" @click="limit.inner.disabled = !limit.inner.disabled" v-else >锁定</Button>
												</div>
											</FormItem>
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
	            limit:{
                    node:{
                        count: 20, // 数据
                        value: 100, // 上限
                        disabled: true, // 锁定/解锁
                    },
		            inner:{
                        count: 5,
                        value: 30,
                        disabled: true,
		            }
	            },
	            bottom:{
                    accordion: false, // 开启手风琴模式，每次只能打开一个面板。
                    right:{
                        pending: true, // 幽灵模式
                        sort: true, // 升序模式
                        count: 0, // 节点个数
	                    colorlist: [ // 颜色选择列表
                            {value: 'blue', label: 'blue'},
                            {value: 'red', label: 'red'},
                            {value: 'green', label: 'green'},
	                    ]
                    },
                    left:{
                        openpanellist: ["0"], // 打开的面板
                        value:[
							{
							    id: "0", // id只能是字符串
							    title:"节点",
                                color:"blue",
                                icon:"md-ionic",
                                count_inner: 0, // content列表的长度
                                content:[
	                                {id_inner: "0", col:"内容0"},
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
            change_collapse:function (key) { // 切换面板时触发，返回当前已展开的面板的 key，格式为数组
                this.bottom.left.openpanellist = key;
            },
            add_bt:function () { // 添加节点触发

                let count = this.bottom.right.count;
                let data = this.bottom.left.value;

                if (data.length >= this.limit.node.count){
                    this.$Message.error('禁止添加节点,已达上限');
                } else {
                    count ++; // 自增, 字符串自增会变成int类型
                    data.push({ // 将节点加到列表中
                        id: count + "", // 需要将id转成字符串
                        title:"节点"+count,
                        color:"blue",
                        icon:"md-ionic",
                        count_inner: 0,
                        content:[
                            {id_inner: "0", col:"内容0"},
                        ],
                        node_name: "节点"+count,
                    },);
                }
            },
            del_panel_bt:function (index) { // 删除节点触发
                let data = this.bottom.left.value;
                if (data.length === 1){ // 当只有一个节点时, 禁止删除
                    this.$Message.error('禁止删除');
                }
                else {
                    data.splice(data.findIndex(e => e.id == index), 1);
                }
            },
            add_inner_bt:function (id) { // 添加内容
                this.bottom.left.value.filter((item)=>{
                    if (item.id == id) { // 在整个数据中找到外层的数据

                        if (item.content.length >= this.limit.inner.count){
                            this.$Message.error('禁止添加内容,已达上限');
                        } else {
                            item.count_inner ++; // 内层id自增
                            item.content.push( // 添加内层数据
                                {id_inner: item.count_inner+"", col:"内容"+item.count_inner}
                            )
                        }
                    }
                })
            },
            del_content_bt:function (id, id_inner) { // 删除内容
                this.bottom.left.value.filter((item)=>{
                    if (item.id == id) { // 在整个数据中找到外层的数据
                        if (item.content.length === 1){ // 当内层只有一个数据时,禁止删除
                            this.$Message.error('禁止删除');
                        }
                        else { // 内层数据删除对应的id_inner
                            item.content.splice(item.content.findIndex(e => e.id_inner == id_inner), 1);
                        }
                    }else {
                        this.$Message.error('该内容不存在');
                    }
                })
            }
	    }
    }
</script>

