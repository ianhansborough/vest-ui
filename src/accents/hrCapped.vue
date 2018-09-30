<template>
	<svg viewBox="0 0 200 10" preserveAspectRatio="xMinYMin meet" class="">
		<line x1="0" x2="200" y1="5" y2="5" :stroke="strokeColor ? strokeColor : 'white'" stroke-width="1"></line>
		<line x1="199.5" x2="199.5" y1="0" y2="10" :stroke="strokeColor ? strokeColor : 'white'" stroke-width="1"></line>
	</svg>
</template>
<script>
	export default {
		name: 'hrCapped',
		props: ['strokeColor'],
	}
</script>
<style lang='scss'>
	
</style>