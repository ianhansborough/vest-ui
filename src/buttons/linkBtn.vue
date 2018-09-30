<template>
	<button 
	@click="buttonClicked" 
	class="v-std-link" 
	:class="{clicked: clicked, disabled: disabled}">
	<slot></slot>
	</button>
</template>
<script>
	export default {
		name: 'linkBtn',
		props: ['disabled'],
		data() {
			return {
				clicked: false,
			}
		},
		methods: {
			buttonClicked() {
				this.clicked = true;
				this.$emit('click');
				setTimeout(() => {
					this.clicked = false;
				}, 1000)
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../styles/_variables.scss';
	.v-std-link {
		@include text-body
		line-height: 2.14;
		outline: none;
		border: none;
		background: none;
		border-bottom: 1px solid $vest-dark;
		text-align: left;
		transition: 0.3s all linear;
		
		&:hover {
			padding: 0 0.8rem;
			margin-left: -0.8rem;
			color: $vest-dark;
			border-color: $vest-pale-grey;
			/*border-radius: 100px;*/
			cursor: pointer;	
			/*background-color: $vest-gun-metal;
			box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.24), 0 0 3px 0 rgba(0, 0, 0, 0.14);*/
			border-radius: 6px;
			background-color: $vest-pale-grey;
		}
		&.clicked {
			/*padding: 0 0.8rem;*/
			/*margin-left: -0.8rem;*/
			/*color: $vest-white;*/
			background-color: $vest-light-silver;
			/*box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.14);*/
		}
		&.disabled {
			padding: 0;
			color: $vest-cool-grey;
			border: none;
			box-shadow: none;
			background: none;
			box-shadow: none;
			border-radius: 0;
		}
		
	}
</style>