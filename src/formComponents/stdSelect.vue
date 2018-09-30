<template>
	<select @change="handleNewSelection" class="v-std-select" :class="{alt: alt}">
		<slot></slot>
	</select>
</template>
<script>
	export default {
		props: ['alt'],
		methods: {
			handleNewSelection(e) {
				this.$emit('input', e.target.value);
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../styles/_variables.scss';
	.v-std-select {
		@include intro-text;
		border-radius: 6px;
		background-color: $vest-white;
		box-shadow: 0 10px 25px 0 rgba(31, 32, 34, 0.2), 0 2px 5px 0 rgba(31, 32, 34, 0.1);
		min-width: 20rem;
		height: 6rem;
		outline: none;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		border: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-image: url('https://s3.us-east-2.amazonaws.com/vest-client-2-ohio/lrg-down-arrow.svg');
		background-size: auto 20%;
		background-position: calc(100% - 2rem) center;
		background-repeat: no-repeat;
		padding: 0 2rem;
		padding-right: 4.5rem;
		&.alt {
			box-shadow: 0 2px 4px 0 rgba(31, 32, 34, 0.14);
			@include text-body;
			height: 4rem;
			min-width: 13rem;
			padding-left: 1.5rem;
			padding-right: 3rem;
			border-radius: 0.4rem;
			background-position: calc(100% - 1.5rem) center;

		}
	}
</style>