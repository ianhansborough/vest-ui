<template>
	<svg viewBox="0 0 300 28" preserveAspectRatio="xMinYMin meet" class="">
		<line x1="0" x2="300" y1="14" y2="14" :stroke="strokeColor ? strokeColor : 'white'" stroke-width="2"></line>
		<line x1="136" x2="164" y1="14" y2="14" :stroke="strokeColor ? strokeColor : 'white'" stroke-width="4"></line>
		<line x1="150" x2="150" y1="0" y2="28" :stroke="strokeColor ? strokeColor : 'white'" stroke-width="4"></line>
	</svg>
</template>
<script>
	export default {
		name: 'hrPlus',
		props: ['strokeColor'],
	}
</script>
<style lang='scss'>
	
</style>