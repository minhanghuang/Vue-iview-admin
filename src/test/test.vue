<!--<style lang="scss" scoped>-->

<!--</style>-->

<!--<template>-->
<!--	<div>-->
<!--		<input value="text" v-model="input_value">-->
<!--		<p>{{input_value}}</p>-->
<!--		<button @click="buttonCilck">-->
<!--			点我-->
<!--		</button>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "test",-->
<!--        components: {},-->
<!--        data() {-->
<!--            return {-->
<!--                input_value:"aaa"-->
<!--            }-->
<!--        },-->
<!--	    methods:{-->
<!--            buttonCilck(){-->
<!--                console.log("pppp");-->
<!--                console.log(this.$store.state.bankInf.name)-->
<!--	            this.$store.commit("update","kkk")-->
<!--                console.log(this.$store.state.bankInf.name)-->
<!--            }-->
<!--	    }-->
<!--    }-->
<!--</script>-->


<template>
	<div>
		<button>父组件</button>
		<!-- hello引用父元素的hello，它也可以引用message,greet，world等 -->
		<child :hello='hello'></child>
	</div>
</template>

<script>
    import Vue from 'vue'

    var com1 = Vue.component('child',{
        // 声明在prop中的变量可以引用父元素的数据
        props:['hello'],
        // 这里渲染props中声明的那个hello
        template:'<div><p>{{ hello }}</p></div>',
    })
    export default {
        name: "test",
        data() {
            return {
                greet: {
                    hello:'hello,',
                    world: 'world',
                },
                message: 'message1',
                hello: 'hello',
            }
        }
    }
</script>
