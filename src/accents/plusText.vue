<template>
	<svg viewBox="0 0 28 28" preserveAspectRatio="xMinYMin meet" class="plus-text">
		<line x1="0" x2="28" y1="14" y2="14" :stroke="strokeColor ? strokeColor : 'white'" stroke-width="3"></line>
		<line x1="14" x2="14" y1="0" y2="28" :stroke="strokeColor ? strokeColor : 'white'" stroke-width="3"></line>
	</svg>
</template>
<script>
	export default {
		name: 'plusText',
		props: ['strokeColor'],
	}
</script>
<style lang='scss'>
	.plus-text {
		width: 1.4rem;
		height: 1.4rem;
		position: absolute;
		top: 0;
		left: 0;
		&.ul {
			top: -1rem;
			left: -3.4rem;
		}
		&.ll {
			bottom: -2.4rem;
			left: -3.4rem;
		}
		&.ur {
			top: -1rem;
			right: -3.4rem;
		}
		&.lr {
			bottom: -2.4rem;
			right: -3.4rem;
		}
	}
</style>