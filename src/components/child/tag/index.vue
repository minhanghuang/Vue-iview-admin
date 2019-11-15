<style lang="scss" scoped>
	.tag_input >>> .ivu-input{
		width: 55px;
		height: 16px;
		padding: 0;
		margin: 0;
	}
</style>


<template>
	<div>
		{{count}}
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
        props:["tag_data",],
        data () {
            return {
                count: [],
                input_data: {},
	            a:"aaa"
            }
        },
	    created(){
            var timestamp3 = new Date().getTime()
            console.log("new Date().get.Time(222):",timestamp3)
            console.log("this.tag_data:",this.tag_data)
            console.log("this.a:",this.a)
            let arr = new Array(0);
		    let obj_tag_data = JSON.parse(this.tag_data);
		    for (var key in obj_tag_data) {
                arr.push(key)
		    }
            this.count = arr;
		    this.input_data = obj_tag_data;
		    console.log("this.tag_data:",this.tag_data)
		    console.log("arr:",arr)
		    console.log("obj_tag_data:",obj_tag_data)
	    },
	    computed:{
            tag:function () { // tag数据
	            return this.tag_data
            },
		    aa:function () {
			    return this.tag_data
            }
	    },
        methods: {
            handleAdd () {
                console.log("this.zzzzzz:",this.tag_data)
                if (this.count.length) {
                    const indexadd = this.count[this.count.length - 1] + 1;
                    this.count.push(indexadd);
                    this.input_data[indexadd] = ''
                } else {
                    this.count.push(0);
                    this.input_data[0] = ''
                }
            },
            handleClose2 (event, name) {
                const indexclose = this.count.indexOf(name); // 找到name所在的位置
                this.count.splice(indexclose, 1); // 将index删除
                delete this.input_data[name]
            },
            get_tag_value:function () {
	            return this.input_data
            }
        }
    }
</script>

