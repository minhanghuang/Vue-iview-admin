<style lang="scss" scoped>
	.el-tag + .el-tag {
		margin-left: 10px;
	}
	.button-new-tag {
		margin-left: 10px;
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
	<div>
		<el-tag
			:key="tag"
			v-for="tag in dynamicTags"
			closable
			:disable-transitions="false"
			@close="handleClose(tag)">
			{{tag}}
		</el-tag>
		<el-input
			class="input-new-tag"
			v-if="inputVisible"
			v-model="inputValue"
			ref="saveTagInput"
			size="small"
			@keyup.enter.native="handleInputConfirm"
			@blur="handleInputConfirm"
		>
		</el-input>
		<el-button v-else class="button-new-tag" size="small" @click="showInput" v-show="dynamicTags.length < count" >+ 添加标签</el-button>
	</div>
</template>
<script>
    export default {
        props:["tag_data","count"],
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
	            this.dynamicTags = JSON.parse(newval.tag); //
	            console.log("this.dynamicTags:",this.dynamicTags)
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

