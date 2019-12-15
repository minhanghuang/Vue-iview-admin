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
								<Collapse v-model="bottom.left">
									<Panel v-if="bottom.left.value!==undefined" :name="index" v-for="(item,index) in bottom.left.value" :key="index">
										{{item.title}}
										<p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
									</Panel>
								</Collapse>
							</div>
							<div slot="right" class="bottom-split-pane">
								<div style="margin: 15px;height: 100%" class="my-form">
									<Form ref="rulesright" :model="bottom.right" :rules="rulesright">
										<FormItem prop="pending">
											<div class="my-form-items">
												添加节点
												<Button type="error" class="inner-item" @click="add_bt">+</Button>
												{{bottom.right.count}}
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
                        count: 1, // 节点个数
                    },
                    left:{
						value:[
							{
							    title:"节点1",
                                content:"content",
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

