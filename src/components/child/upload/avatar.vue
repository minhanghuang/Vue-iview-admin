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
    export default {
        name: "avatar", // 头像
	    props:["is_auto_upload","is_save_submit"],
        components: {},
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
	            upload_avatar_success: false, // 头像上传成功后, 该变量翻转
            };
        },
	    watch:{
            is_save_submit(newval, oldval){
                if(newval){ // 父组件点击保存按钮后, 该条件成立
                    console.log("父组件点击保存按钮后:",newval);
                    this.$refs.upload.submit(); // 上传图片
                }
            },
            upload_avatar_success:function (newval, oldval) {
	            if (newval){
                    this.$emit('realuploadsuccess', newval)
                }
            }
	    },
        computed:{
            headers_token:function () {
                var token = JSON.parse(localStorage.getItem('TOKEN'));
                token = "TOKEN " + token;
                return {"Authorization":token}
            },
            upload_action:function () {
                return "http://127.0.0.1:19900/api/user/update-avataruser/"
            },
        },
	    methods:{
            upload_success:function (response, file, fileList) {
                this.$Message.success("上传成功");
                this.upload_avatar_success = true; // 头像上传成功标志位
            },
            upload_error:function (err, file, fileList) {
                this.$Message.error("上传失败");
            }
	    }
    }
</script>

