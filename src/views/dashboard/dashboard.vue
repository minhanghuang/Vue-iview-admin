<style lang="scss">
	.count-style{
		font-size: 50px;
	}
</style>

<template>
	<div>
		<Row :gutter="20">
			<i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
				<infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
					<count-to :end="infor.count" count-class="count-style"/>
					<p>{{ infor.title }}</p>
				</infor-card>
			</i-col>
		</Row>
		<Row :gutter="20" style="margin-top: 10px;">
			<i-col :md="24" :lg="8" style="margin-bottom: 20px;">
				<Card shadow>
					<chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>
				</Card>
			</i-col>
			<i-col :md="24" :lg="16" style="margin-bottom: 20px;">
				<Card shadow>
					<chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量"/>
				</Card>
			</i-col>
		</Row>
		<Row>
			<Card shadow>
				<example style="height: 310px;"/>
			</Card>
		</Row>
	</div>
</template>

<script>
    import InforCard from '@/components/child/dashboard/info-card'
    import CountTo from '@/components/child/dashboard/count-to'
    import { ChartPie, ChartBar } from '@/components/child/dashboard/charts'
    import Example from '@/components/child/dashboard/example/example.vue'
	import { check_token_fn } from "../../utils/tools"

    export default {
        name: 'mydashboard',
        components: {
            InforCard,
            CountTo,
            ChartPie,
            ChartBar,
            Example
        },
        data () {
            return {
                inforCardData: [
                    { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
                    { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
                    { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
                    { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
                    { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
                    { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
                ],
                pieData: [
                    { value: 335, name: '直接访问' },
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                    { value: 1548, name: '搜索引擎' }
                ],
                barData: {
                    Mon: 13253,
                    Tue: 34235,
                    Wed: 26321,
                    Thu: 12340,
                    Fri: 24643,
                    Sat: 1322,
                    Sun: 1324
                }
            }
        },
        created:function(){
            var token = JSON.parse(localStorage.getItem('TOKEN')); // 从本地获取token
            if (!token){ // token 为空
                this.$router.push("/login") // 跳转到login
            }else { // token 不为空
                this.$api.api_all.post_user_checktoken_api(token).then((response)=>{
                }).catch((error)=>{
                    this.$Message.error("Cookie过期,请重新登录");
                    localStorage.clear(); // 清空TOKEN
                    this.$router.push("/login") // 跳转到login
                })
            }
	    },
    }
</script>



