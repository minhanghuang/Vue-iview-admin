<style lang="scss" scoped>
	.demo-upload-list{
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0,0,0,.2);
		margin-right: 4px;
	}
	.demo-upload-list img{
		width: 100%;
		height: 100%;
	}
	.demo-upload-list-cover{
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.6);
	}
	.demo-upload-list:hover .demo-upload-list-cover{
		display: block;
	}
	.demo-upload-list-cover i{
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
</style>

<template>
	<div>
		<Upload
			:format="['jpg','jpeg','png']"
			:max-size="2048"
			:on-success="uploadSuccess"
			:on-error="uploadError"
			:on-format-error="handleFormatError"
			:on-exceeded-size="handleMaxSize"
			:before-upload="handleBeforeUpload"
			:data="image_data_child"
			multiple
			type="drag"
			action="http://127.0.0.1:19900/api/article/create-image/"
			:headers="headers_token"
			style="display: inline-block;width: 100%"
		>
			<div style="padding: 20px 0">
				<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
				<p>Click or drag files here to upload</p>
				<p>		{{image_data_child}}</p>
				<p>Click or drag files here to upload</p>
			</div>
		</Upload>
	</div>
</template>

<script>
    export default {
        name: "upload",
	    props:["image_data_child"],
        components: {},
        data() {
            return {
                headers:{
                    "Authorization":""
                },
                xxxx:{
                    "id":"a"
                }
            }
        },
	    computed:{
            headers_token:function () {
                var token = JSON.parse(localStorage.getItem('TOKEN'));
                token = "TOKEN " + token;
                this.headers.Authorization = token;
                return this.headers
            },
            data_image:function () {
	            return this.xxxx
            }
	    },
        methods: {
            uploadSuccess (response, file, fileList) { // 文件上传成功时的钩子，返回字段为 response, file, fileList
                this.$Message.success("上传成功");
            },
            uploadError(error, file, fileList){ // 文件上传失败时的钩子，返回字段为 error, file, fileList
                console.log("image_data_child:")
                this.$Message.error("上传失败");

            },
            handleFormatError(file, fileList){ // 文件格式验证失败时的钩子，返回字段为 file, fileList

            },
            handleMaxSize(file, fileList){ // 文件超出指定大小限制时的钩子，返回字段为 file, fileList

            },
            handleBeforeUpload(response){ // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传

            }
        },
    }
</script>

