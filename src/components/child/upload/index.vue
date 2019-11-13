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
			:data="file_data"
			multiple
			type="drag"
			action="http://127.0.0.1:19900/api/article/update-image/"
			:headers="headers_token"
			style="display: inline-block;width: 100%"
		>
			<div style="padding: 20px 0">
				<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
				<p>Click or drag files here to upload</p>
				<p>		{{file_data}}</p>
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
	            file_data:{
                    "blogid": this.image_data_child
	            },
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
            }
        },
	    computed:{
            headers_token:function () {
                var token = JSON.parse(localStorage.getItem('TOKEN'));
                token = "TOKEN " + token;
                this.headers.Authorization = token;
                return this.headers
            },
	    },
        methods: {
            uploadSuccess (response, file, fileList) { // 文件上传成功时的钩子，返回字段为 response, file, fileList
                console.log(response.results.image)
                this.$Message.success("图片上传成功");
            },
            uploadError(error, file, fileList){ // 文件上传失败时的钩子，返回字段为 error, file, fileList
                console.log(error)
                this.$Message.error("图片上传失败");
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

