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
								<Collapse v-model="value1">
									<Panel name="1">
										史蒂夫·乔布斯
										<p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
									</Panel>
									<Panel name="2">
										斯蒂夫·盖瑞·沃兹尼亚克
										<p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
									</Panel>
									<Panel name="3">
										乔纳森·伊夫
										<p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
									</Panel>
								</Collapse>
							</div>
							<div slot="right" class="bottom-split-pane">
								<div style="margin: 15px;height: 100%" class="my-form">
									<Form ref="rulesright" :model="bottom.right" :rules="rulesright">
										<FormItem prop="pending">
											<div class="my-form-items">
												添加节点
												<Button type="error" class="inner-item">+</Button>
											</div>
										</FormItem>
										<FormItem prop="pending">
											<Tooltip content="开启后,标记最后一个为幽灵节点" placement="bottom-start">
												<div class="my-form-items">
													幽灵模式
													<i-switch v-model="bottom.right.pending" @on-change="change" class="inner-item"></i-switch>
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
                        pending:true
                    }
	            }
            }
        },
    }
</script>

