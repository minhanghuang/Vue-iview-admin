<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%">
			<Row>
				<Col span="24" style="height:40px;margin-bottom: 24px">
					<Row style="height: 100%">

						<Col span="20" style="height: 100%;background-color: aquamarine">
							<Input size="large" prefix="ios-paper-outline" placeholder="输入文章标题" style="height: 100%;width: 100%;" />
						</Col>
						<Col span="3" style="height: 100%" offset="1">
							<Button type="error" size="large">发布文章</Button>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row style="height: 100%">
				<Col span="24" style="height: 100%">
					<mavon-editor
						v-model="msg.mdValue"
						style="height: 100%"
					>
					</mavon-editor>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: 'mdindex',
        data() {
            return {
                msg: {
                    mdValue:'## Vue-markdownEditor'
                }
            }
        },
        components: {},
        methods: {

        }
    }
</script>









<style lang="scss" scoped>
    .show{
        position: absolute;
        left: 0;
        top: 0;
    }
    .indexContainer {
        width: 100%;
        height: 100%;
        background: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .btnsContainer{
        position: absolute;
        z-index: 10;
        left: 65px;
        top: 5px;
        height: 25px;
        min-width: 300px;
        // background: pink;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .btn{
            display: inline-block;
            border:1px solid #ccc;
            margin-right: 10px;
            box-sizing: border-box;
            padding: 0 10px;
            background: #fff;
            font-size: 12px;
            height: 25px;
            line-height: 25px;
            cursor:pointer;
            moz-user-select: -moz-none;
            -moz-user-select: none;
            -o-user-select:none;
            -khtml-user-select:none; /* you could also put this in a class */
            -webkit-user-select:none;/* and add the CSS class here instead */
            -ms-user-select:none;
            user-select:none;/*禁止选中文字*/
            &:active{
                opacity: 0.8;
                background: lightblue;
            }
        }
    }
    .maskContainer{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        height: 100vh;
        width: 100vw;
        background: rgba(0,0,0,0.5);
        // z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        .contentContainer{
            width: 60%;
            height: 60%;
            background: #fefefe;
            padding: 20px;
            box-sizing: border-box;
            position: relative;
            .showAreaContainer{
                height: 100%;
                width: 100%;
                outline: none;
                background: #eee;
                display: block;
                resize: none;
                padding: 10px;
                box-sizing: border-box;
            }
            .closeBtnContainer{
                position: absolute;
                height: 30px;
                width: 30px;
                right: -40px;
                top: -40px;
                border:1px solid #fff;
                border-radius: 50%;
                &::before{
                    content: '';
                    position: absolute;
                    width: 70%;
                    height: 2px;
                    display: block;
                    background: #fff;
                    left: 15%;
                    top: calc(50% - 1px);
                    transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                }
                &::after{
                    content: '';
                    position: absolute;
                    width: 70%;
                    height: 2px;
                    display: block;
                    background: #fff;
                    left: 15%;
                    top: calc(50% - 1px);
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                }
            }

        }

    }

    .editorContainer {
        width: 90%;
        height: 90%;
        border: 1px solid #ddd;
    }
</style>
