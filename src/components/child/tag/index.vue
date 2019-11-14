<style lang="scss" scoped>
	.tag_input >>> .ivu-input{
		width: 55px;
		height: 16px;
		padding: 0;
		margin: 0;
	}
</style>

<!--<template>-->
<!--	<Row style="height: 100%;width: 100%;">-->
<!--		<Col style="height: 100%;width: 100%;">-->
<!--			<Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose">-->
<!--				<Input v-model="input_data[item]" placeholder="iview" style="height: 19px;width: auto" class="tag_input">-->

<!--				</Input>-->
<!--			</Tag>-->
<!--			<Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>-->
<!--		</Col>-->
<!--	</Row>-->

<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "tag",-->
<!--        components: {},-->
<!--        data() {-->
<!--            return {-->
<!--                count: [],-->
<!--	            input_data: {}, // 标签数据-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            handleAdd () {-->
<!--                if (this.count.length) {-->
<!--                    let index = this.count[this.count.length - 1] + 1;-->
<!--                    this.count.push(this.count[this.count.length - 1] + 1);-->
<!--                    this.input_data[index] = '';-->
<!--	                console.log(this.input_data)-->
<!--                } else {-->
<!--                    this.count.push(0);-->
<!--                    this.input_data[0] = ''-->
<!--                }-->
<!--            },-->
<!--            handleClose (event, name) {-->
<!--                const index = this.count.indexOf(name);-->
<!--                this.count.splice(index, 1);-->
<!--                console.log("index:",index);-->
<!--                delete this.input_data.index;-->
<!--            },-->
<!--            get_tag_value:function () { // 获取tag数据,提供给父组件接口-->
<!--                return this.input_data-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<template>
	<div>
		<Form ref="tagform" :model="input_data">
			<FormItem prop="tag">
				<Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">
					<Input v-model="input_data[item]" placeholder="iview" style="height: 19px;width: auto" class="tag_input">

					</Input>
				</Tag>
				<Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>
			</FormItem>
		</Form>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                count: [],
                input_data: {},
            }
        },
        methods: {
            handleAdd () {
                if (this.count.length) {
                    const indexadd = this.count[this.count.length - 1] + 1;
                    this.count.push(indexadd);
                    this.input_data[indexadd] = ''
                } else {
                    this.count.push(0);
                    this.input_data[0] = ''
                }
                // console.log(this.input_data)
                // console.log(this.count)
            },
            handleClose2 (event, name) {
                // console.log("name:",name)
                const indexclose = this.count.indexOf(name); // 找到name所在的位置
                this.count.splice(indexclose, 1); // 将index删除
                delete this.input_data[name]
                // console.log(this.input_data)
                // console.log(this.count)
            },
            get_tag_value:function () {
	            return this.input_data
            }
        }
    }
</script>

