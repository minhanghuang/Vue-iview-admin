<style lang="scss" scoped>
	.upload_avatar >>> .el-upload--picture-card{
		height: 100px;
		width: 100px;
		border-radius: 50px;
	}
	.upload_avatar >>> .el-upload-list__item-thumbnail{
		height: 100px;
		width: 100px;
		border-radius: 50px;
	}
	.upload_avatar >>> .el-upload-list__item{
		height: 100px;
		width: 100px;
		border-radius: 50px;
	}
</style>

<template>
	<div >
		<el-upload
			:action="upload_action"
			list-type="picture-card"
			:headers="headers_token"
			:on-success="upload_success"
			:on-error="upload_error"
			:auto-upload="is_auto_upload"
			ref="upload"
			class="upload_avatar"
		>
			<i class="el-icon-plus" style="position: relative; top: -15px;"></i>
		</el-upload>
	</div>
</template>

<script>
	import {get_upload_avatar_url} from '@/utils/common'

    export default {
        name: "avatar", // 头像
	    props:["is_auto_upload"],
        components: {},
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
            };
        },
	    watch:{
	    },
        computed:{
            headers_token:function () {
                var token = JSON.parse(localStorage.getItem('TOKEN'));
                token = "TOKEN " + token;
                return {"Authorization":token}
            },
            upload_action:function () {
                return get_upload_avatar_url()
            },
        },
	    methods:{
            upload_success:function (response, file, fileList) {
                this.$emit('get_upload_success_file', response.results.avatar); // 将更新后的头像返回到父组件
                this.$Message.success("上传成功");
            },
            upload_error:function (err, file, fileList) {
                this.$Message.error("上传失败");
            },

	    }
    }
</script>

