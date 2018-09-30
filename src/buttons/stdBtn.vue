<template>
	<button class="v-std-btn" 
	:class="{disabled: disabled, clicked: clicked, alt: alt}" 
	:disabled="disabled" 
	@click="buttonClicked">
	<slot></slot>
	</button>
</template>
<script>
	export default {
		name: 'stdBtn',
		props: ['disabled', 'alt'],
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
	.v-std-btn {
		border-radius: 100px;
		border: solid 1px $vest-teal;
		height: 4rem;
		min-width: 12rem;
		background: none;
		outline: none;
		@include text-button;
		color: $vest-teal;
		font-size: 14px;
		transition: 0.25s all ease-out;
		&.alt {
			border-color: $vest-white;
			color: $vest-white;
			background-color: transparent;
		}
		&.disabled {
			background-color: $vest-silver !important;
			color: $vest-cool-grey !important;
			border: none !important;
			box-shadow: none !important;
		}
		&:hover {
			background-color: $vest-teal;
			color: $vest-white;
			cursor: pointer;
			box-shadow: 0 20px 25px 0 rgba(31, 32, 34, 0.2), 0 0 5px 0 rgba(31, 32, 34, 0.1);
			&.alt {
				color: $vest-teal;
				background-color: $vest-white;
			}
		}
		&.clicked {
			box-shadow: 0 5px 5px 0 rgba(31, 32, 34, 0.2), 0 0 4px 0 rgba(31, 32, 34, 0.1);
			&.alt {
				background-color: $vest-egg-blue;
			}
		}
	}
</style>