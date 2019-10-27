<style lang="scss" scoped>

</style>

<template>
	<div>
		<input value="text" v-model="input_value">
		<p>{{input_value}}</p>
		<button @click="buttonCilck">
			点我
		</button>
	</div>
</template>

<script>
    export default {
        name: "test",
        components: {},
        data() {
            return {
                input_value:"aaa"
            }
        },
	    methods:{
            buttonCilck(){
                console.log("pppp");
                console.log(this.$store.state.bankInf.name)
	            this.$store.commit("update","kkk")
                console.log(this.$store.state.bankInf.name)
            }
	    }
    }
</script>

