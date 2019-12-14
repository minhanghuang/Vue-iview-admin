<style lang="scss" scoped>
	.el-tag + .el-tag {
		margin-left: 2px; // 标签的距离
	}
	.button-new-tag {
		margin-left: 2px; // 输入框的距离
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
</style>


<template>
	<div class="mytag">
		<el-tag
			:key="tag"
			v-for="tag in dynamicTags"
			:closable="closable"
			:disable-transitions="false"
			@close="handleClose(tag)"
			:size="tag_size"
			:type="type"
		>
			{{tag}}
		</el-tag>
		<el-input
			class="input-new-tag"
			v-if="inputVisible && !disable"
			v-model="inputValue"
			ref="saveTagInput"
			size="small"
			@keyup.enter.native="handleInputConfirm"
			@blur="handleInputConfirm"
		>
		</el-input>
		<el-button
			v-if="!inputVisible && !disable"
			class="button-new-tag"
			size="small"
			@click="showInput"
			v-show="dynamicTags.length < count"
		>+ 添加标签</el-button>
	</div>
</template>
<script>
    export default {
        // tag_data: 标签数据; count: 标签最大个数; disable: 标签是否可添加; tag_size: 标签大小; closable: 标签是佛可删除; type: 标签类型
        props:["tag_data","count","disable","tag_size","closable","type"],
	    name:"tagsindex",
        data() {
            return {
                dynamicTags: [], // 需要显示的标签
                inputVisible: false, // 是否可输入
                inputValue: '', // 双向数据绑定, 当前输入的数据
	            blog: { // 文章相关数据
                    tags: [],
	            }
            };
        },
	    watch:{
            tag_data(newval,oldval){ // 监听父组件传来的后端拿到的数据 tags
                console.log("监听父组件传来的后端拿到的数据:",newval)
	            this.dynamicTags = JSON.parse(newval); //
            },
            dynamicTags(newval, oldval){ // 当前组件标签被修改, 触发, 将修改后的数据传给父组件
                this.$emit('realtime', JSON.stringify(newval))
            }
	    },
        methods: {
            handleClose(tag) { // 关掉某个标签事件
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() { // 回车按键
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            get_tag_value:function () { // 父组件获取当前组件tags的数据
	            return this.dynamicTags
            }
        }
    }
</script>

