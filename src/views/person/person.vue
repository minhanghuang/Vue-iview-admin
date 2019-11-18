<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="height: 100%;width: 100%;">
			<Row style="height: 100%;width: 100%;">
				<Col style="height: 100%;width: 100%;">
					<Row style="padding: 30px;" >
						<Col span="8" style="height: auto">
							<Row style="padding: 15px;height: auto;background-color: #f5f7f9" >
								<Col span="24" style="height: auto">
									<Row style="padding: 25px;height: auto" >
										<Col span="24" style="height: auto">
											<div style="margin: 8px 0;text-align: center">
												<div style="margin: 0 auto;width: auto;height: auto">
													<img src="../../../src/assets/logo.png" style="height: 100px;width: 100px;border-radius:50px">
												</div>
											</div>
											<div style="text-align: center;margin: 10px 0">
												<p style="color: rgba(0, 0, 0, 0.85);font-size: 20px;font-weight:500; ">Cox</p>
											</div>
											<div style="text-align: center;width:auto;margin: 0 auto">
												<p>到了最后,我们都活成曾经最讨厌的样子</p>
											</div>
											<div style="text-align: center;width:auto;height: auto; margin-top: 40px">
												<Row style="margin: 5px 0" >
													<Col span="2">
														<Icon type="ios-mail-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="10">
														<div style="float: top; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">job@minhung.me</div>
													</Col>
												</Row>
												<Row style="margin: 5px 0">
													<Col span="2">
														<Icon type="ios-briefcase-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="21" style="float: left">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">某某公司 · 某某部门 · 后端开发工程师</div>
													</Col>
												</Row>
												<Row style="margin: 5px 0">
													<Col span="2">
														<Icon type="ios-pin-outline" size="20" style="" ></Icon>
													</Col>
													<Col span="4">
														<div style="float: left; display: inline-block; margin-left: 10px;font-size: 14px;font-weight: 400;color: #2f2f2f;">深圳</div>
													</Col>
												</Row>
											</div>
											<Divider dashed />
											<div style="margin: 9px 0 ">
												<p>标签</p>
											</div>
											<div>
												aaa
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
						<Col span="16" style="height: auto">
							<div style="height: auto;width: 100%">
								<div style="padding: 15px 15px 15px 0;margin-left: 30px; background-color: #f5f7f9">
									<div style="padding-left: 20px">
										<Tabs value="name1">
											<TabPane label="基本设置" name="name1"></TabPane>
										</Tabs>
									</div>
									<div style="padding-left: 30px">
										<div style="padding-bottom: 26px">
											姓名
											<Input v-model="value2" placeholder="Cox" style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											描述
											<Input v-model="value2" placeholder="到了最后,我们都活成曾经最讨厌的样子" type="textarea" :autosize="true" style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											邮箱
											<Input v-model="value2" placeholder="job@minhung.me"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											公司
											<Input v-model="value2" placeholder="某某公司"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											部门
											<Input v-model="value2" placeholder="某某部门"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											职位
											<Input v-model="value2" placeholder="后端开发工程师"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
										<div style="padding-bottom: 26px">
											地址
											<Input v-model="value2" placeholder="深圳"  style="margin-left: 15px ;width: 300px"></Input>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "person",
        components: {},
        data() {
            return {}
        },
    }
</script>

