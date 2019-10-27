<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	#app {
		box-sizing: border-box;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #ffffff;
	}
</style>
