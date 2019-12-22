<style lang="scss" scoped>
	.top-pane{
		overflow: scroll;
		.title{
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
							<Timeline :pending="bottom.right.pending">
								<TimelineItem :color="bottom.left.value[index].color" v-for="(item, index) in bottom.left.value" :key="item.id">
									<Icon :type="bottom.left.value[index].icon" slot="dot"></Icon>
									<p class="title">{{bottom.left.value[index].node_name}}</p>
									<p class="content" v-for="(item_inner, index_inner) in bottom.left.value[index].content">
										{{bottom.left.value[index].content[index_inner].col}}
									</p>
								</TimelineItem>
							</Timeline>
						</div>
					</Col>
				</Row>

				<Divider />

				<Row style="min-height: 350px;">
					<Col style="height: 100%;width: 100%">
						<div style="height: 500px" class="bottom-pane">
							<Split v-model="splitvalue_bottom">
								<div slot="left" class="bottom-split-pane">
									<Form ref="rulesleft" :model="bottom.left" :rules="rulesleft">

										<Collapse  v-model="bottom.left.openpanellist" @on-change="change_collapse" :accordion="bottom.accordion">
											<Panel v-for="(item, index) in bottom.left.value" :key="item.id" :name="item.id">

												{{bottom.left.value[index].node_name}}
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
																<Input maxlength="30" v-model="bottom.left.value[index].node_name" placeholder="节点名" style="width: auto;display: block" />
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
																<Select v-model="bottom.left.value[index].color" style="width:100%">
																	<Option
																		v-for="(item_color, index_color) in bottom.right.colorlist"
																        :value="bottom.right.colorlist[index_color].value"
																        :key="item_color.value"
																		:style={color:item_color.value,fontSize:14,fontWeight:bold}
																	>
																		{{item_color.label}}
																	</Option>
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
																<Select v-model="bottom.left.value[index].icon" style="width:100%">
																	<Option
																		v-for="(item_icon, index_icon) in bottom.right.iconlist"
																		:value="bottom.right.iconlist[index_icon].value"
																		:key="item_icon.value"
																	>
																		{{item_icon.label}}
																		<Icon :type="item_icon.value"></Icon>
																	</Option>
																</Select>
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
																<div v-for="(item_inner, index_inner) in bottom.left.value[index].content" >
																	<Row>
																		<Col span="20">
																			<Input
																				:key="item_inner.id_inner"
																				maxlength="300"
																				type="textarea"
																				v-model="bottom.left.value[index].content[index_inner].col"
																				placeholder="内容"
																				style="width: auto;display: block;margin-bottom: 26px"
																			>
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
									<div style="margin: 0 15px 15px 15px;height: 100%" class="my-form">
										<Form ref="rulesright" :model="bottom.right" :rules="rulesright">
											<FormItem prop="update" style="padding-bottom: 0">
												<Button @click="update_timeline_bt" type="success" long ghost style="margin-bottom: 25px">更新时光轴</Button>
											</FormItem>
											<FormItem prop="reset" style="padding-bottom: 0">
												<Button @click="reset_timeline_bt" type="warning" long ghost style="margin-bottom: 25px">重置时光轴</Button>
											</FormItem>
											<FormItem prop="pending" style="padding-bottom: 0">
												<Tooltip content="开启后,标记最后一个为幽灵节点" placement="bottom-start">
													<div class="my-form-items">
														<Button type="text" style="">幽灵模式: </Button>
														<i-switch v-model="bottom.right.pending" class="inner-item"></i-switch>
													</div>
												</Tooltip>
											</FormItem>

											<Divider />

											<FormItem prop="limit_count">
												<div class="my-form-items">
													<Button type="text" style="">节点上限: </Button>
													<InputNumber class="inner-item" :max="limit.node.value" :min="1" v-model="limit.node.count" :disabled="limit.node.disabled"></InputNumber>
													<Button type="warning" @click="limit.node.disabled = !limit.node.disabled" v-if="limit.node.disabled">解锁</Button>
													<Button type="warning" ghost @click="limit.node.disabled = !limit.node.disabled" v-else >锁定</Button>
												</div>
											</FormItem>
											<FormItem prop="limit_count_inner">
												<div class="my-form-items">
													<Button type="text" style="">内容上限: </Button>
													<InputNumber class="inner-item" :max="limit.inner.value" :min="1" v-model="limit.inner.count" :disabled="limit.inner.disabled"></InputNumber>
													<Button type="warning" @click="limit.inner.disabled = !limit.inner.disabled" v-if="limit.inner.disabled">解锁</Button>
													<Button type="warning" ghost @click="limit.inner.disabled = !limit.inner.disabled" v-else >锁定</Button>
												</div>
											</FormItem>
											<FormItem prop="sort">
												<div class="my-form-items">
													<Button type="text" style="">升序模式: </Button>
													<i-switch v-model="bottom.right.sort" class="inner-item"></i-switch>
												</div>
											</FormItem>
											<FormItem prop="accordion">
												<Tooltip content="开启风琴模式，每次只能打开一个面板。" placement="bottom-start">
													<div class="my-form-items">
														<Button type="text" style="">风琴模式: </Button>
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
				<Spin size="large" fix v-if="loadding"></Spin>
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
                splitvalue_bottom: 0.7,
                loadding: true,
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
                            {value: 'yellow', label: 'yellow'},
                            {value: 'black', label: 'black'},
	                    ],
	                    iconlist: [ // icon选择列表
                            {value: 'md-ionic', label: '涡卷饰'},
                            {value: 'md-cloud-upload', label: '更新'},
                            {value: 'md-cog', label: '工具'},
                            {value: 'ios-navigate', label: '导航'},
                            {value: 'md-pin', label: '定位'},
                            {value: 'md-pricetags', label: '标签'},
                            {value: 'md-refresh-circle', label: '刷新'},
                            {value: 'md-snow', label: '雪花'},
                            {value: 'md-time', label: '时间'},
                            {value: 'md-trophy', label: '里程碑'},
                            {value: 'md-warning', label: '警告'},
                            {value: 'ios-analytics', label: '逻辑分析'},
                            {value: 'ios-baseball', label: '棒球'},
                            {value: 'md-basketball', label: '篮球'},
                            {value: 'md-battery-charging', label: '满电'},
                            {value: 'md-battery-dead', label: '没电'},
                            {value: 'md-beer', label: '啤酒'},
                            {value: 'md-bicycle', label: '自行车'},
                            {value: 'md-boat', label: '游艇'},
                            {value: 'md-bookmark', label: '书签'},
                            {value: 'md-brush', label: '毛笔'},
                            {value: 'md-bulb', label: '灯泡'},
                            {value: 'md-bus', label: '巴士'},
	                    ]
                    },
                    left:{
                        openpanellist: ["0"], // 打开的面板
                        value:[
							{
							    id: "0", // id只能是字符串
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
                // rulesleft:{ // 校验表单规则
                //     node: [ // 节点名 FormItem标签中的 prop 属性预期值
                //         { required: true, message: '节点名不能为空', trigger: 'blur' }, // trigger: blur,change
                //     ],
                // }
            }
        },
	    watch:{
            splitvalue_bottom:function (newval, oldval) {
	            if (newval > 0.7){
	                this.splitvalue_bottom = 0.7; // 面板分割不能太右
	            }
                if (newval < 0.5){
                    this.splitvalue_bottom = 0.5 // 面板分割不能太左
                }
            }
	    },
	    created(){
            let username = JSON.parse(localStorage.getItem('username')); // 获取用户名
            this.$api.api_all.get_data_detail_api( // 发http请求, 获取用户data
                username
            ).then((response)=>{ // 成功获取博文详细信息
                this.$Message.success(response.data.msg);
                this.bottom.left.value = JSON.parse(response.data.results[0].timeline); // 更新用户资料, 更新后的数据, 同步到data中
                this.loadding = false;
            }).catch((error)=>{
                this.$Message.error(error.response.data.msg);
                this.loadding = false;
            });
	    },
	    methods:{
            change_collapse:function (key) { // 切换面板时触发，返回当前已展开的面板的 key，格式为数组
                this.bottom.left.openpanellist = key;
            },
            add_bt:function () { // 添加节点触发
				let data_length = this.bottom.left.value.length;
                if (data_length >= this.limit.node.count){
                    this.$Message.error('禁止添加节点,已达上限');
                } else {
	                if (this.bottom.left.value[data_length-1].node_name === ""){
                        this.$Message.error('上一个节点为空,禁止添加');
	                }
	                else {
                        this.bottom.right.count ++; // 自增, 字符串自增会变成int类型
                        this.bottom.left.value.push({ // 将节点加到列表中
                            id: this.bottom.right.count + "", // 需要将id转成字符串
                            color:"blue",
                            icon:"md-ionic",
                            count_inner: 0,
                            content:[
                                {id_inner: "0", col:"内容0"},
                            ],
                            node_name: "节点"+this.bottom.right.count,
                        },);
	                }
                }
            },
            del_panel_bt:function (index) { // 删除节点触发
                let data = this.bottom.left.value;
                if (data.length === 1){ // 当只有一个节点时, 禁止删除
                    this.$Message.error('禁止删除');
                }
                else {
                    this.bottom.left.value.splice(data.findIndex(e => e.id == index), 1);
                }
            },
            add_inner_bt:function (id) { // 添加内容
                this.bottom.left.value.filter((item)=>{
                    if (item.id == id) { // 在整个数据中找到外层的数据
                        let content_length = item.content.length;
                        if (content_length >= this.limit.inner.count){
                            this.$Message.error('禁止添加内容,已达上限');
                        } else {
                            if (item.content[content_length-1].col === ""){
                                this.$Message.error('上一个内容为空,禁止添加');
                            }
                            else {
                                item.count_inner ++; // 内层id自增
                                item.content.push( // 添加内层数据
                                    {id_inner: item.count_inner+"", col:"内容"+item.count_inner}
                                )
                            }
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
            },
            update_timeline_bt:function () {
                // this.loadding= true;
                var username = JSON.parse(localStorage.getItem('username')); // 获取用户名
                this.$api.api_all.put_timeline_update_api( // 更新用户时光轴
                    username, this.bottom.left.value
                ).then((response)=>{
                    this.$Message.success(response.data.msg);
                    this.bottom.left.value = JSON.parse(response.data.results.timeline); // 更新用户资料, 更新后的数据, 同步到data中
                    this.loadding= false;
                }).catch((error)=>{
                    this.$Message.error(error.response.data.msg);
                    this.loadding= false;
                });
            }
	    }
    }
</script>

