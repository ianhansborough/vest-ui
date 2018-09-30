<template>
	<button 
	class="v-cta-btn" 
	:class="{disabled: disabled, clicked: clicked, alt: (alt || (btnStyle === '2')), alt2:  (btnStyle === '3')}" 
	:disabled="disabled" 
	@click="buttonClicked">
		<span><slot></slot></span>
	</button>
</template>

<script>
	export default {
		name: 'ctaBtn',
		props: ['disabled', 'alt', 'btnStyle'],
		data() {
			return {
				clicked: false,
			}
		},
		methods: {
			buttonClicked() {
				this.clicked = true;
				setTimeout(() => {
					this.clicked = false;
				}, 1000)
				this.$emit('click');
			},
		}
	}
</script>
<style lang='scss'>
	@import '../../styles/_variables.scss';

	.v-cta-btn {
		display: inline-block;
		color: #fff;
		outline: none;
		border: none;
		border-radius: 5000px;
		text-decoration: none;
		position: relative;
		-webkit-backface-visibility: hidden;
		z-index: 1;
		min-width: 20rem;
		padding: 0 3rem;
		height: 6rem;
		background-image: linear-gradient(287deg, $vest-red, $vest-blue);
		box-shadow: 0 20px 25px 0 rgba(31, 32, 34, 0.2), 0 0 5px 0 rgba(31, 32, 34, 0.1);
		&.alt {
			background-image: linear-gradient(287deg, $vest-deep-purple, $vest-teal);
			box-shadow: 0 20px 25px 0 rgba(31, 32, 34, 0.2), 0 0 5px 0 rgba(31, 32, 34, 0.1);
		}
		&.alt2 {
			background-image: linear-gradient(107deg, $vest-egg-blue, #e7f2f6);
			box-shadow: 0 20px 25px 0 rgba(31, 32, 34, 0.2), 0 0 5px 0 rgba(31, 32, 34, 0.1);
			span {color: $vest-dark;}
		}
		&.disabled {
			background: none !important;
			background-color: $vest-silver !important;
			color: $vest-cool-grey !important;
			border: none !important;
			box-shadow: none !important;
		}
	}
	.v-cta-btn:after {
		position: absolute;
		content: '';
		border-radius: 5000px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: opacity 0.15s ease-out;
		z-index: 2;
		opacity: 0;
		background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(287deg, $vest-red, $vest-blue);
		box-shadow: 0 5px 10px 0 rgba(31, 32, 34, 0.3), 0 0 5px 0 rgba(31, 32, 34, 0.1);
	}
	.v-cta-btn.disabled:after {
		background: none !important;
		background-color: $vest-silver !important;
		color: $vest-cool-grey !important;
		border: none !important;
		box-shadow: none !important;
	}
	.v-cta-btn.alt:after {
		background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(287deg, $vest-deep-purple, $vest-teal);
		box-shadow: 0 5px 10px 0 rgba(31, 32, 34, 0.3), 0 0 5px 0 rgba(31, 32, 34, 0.1);
	}
	.v-cta-btn.alt2:after {
		background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(107deg, $vest-egg-blue, #e7f2f6);
		box-shadow: 0 5px 10px 0 rgba(31, 32, 34, 0.3), 0 0 5px 0 rgba(31, 32, 34, 0.1);
		span {color: $vest-dark;}
	}
	.v-cta-btn.clicked {
		background-image: linear-gradient(rgba(31, 32, 34, 0.2), rgba(31, 32, 34, 0.2)), linear-gradient(287deg, $vest-red, $vest-blue);
		box-shadow: 0 5px 5px 0 rgba(31, 32, 34, 0.2), 0 0 4px 0 rgba(31, 32, 34, 0.1);
		&.alt {
			background-image: linear-gradient(rgba(31, 32, 34, 0.2), rgba(31, 32, 34, 0.2)), linear-gradient(287deg, $vest-deep-purple, $vest-teal);
			box-shadow: 0 5px 5px 0 rgba(31, 32, 34, 0.2), 0 0 4px 0 rgba(31, 32, 34, 0.1);
		}
		&.alt2 {
			background-image: linear-gradient(rgba(236, 243, 246, 0.3), rgba(236, 243, 246, 0.3)), linear-gradient(107deg, $vest-egg-blue, #e7f2f6);
			box-shadow: 0 5px 5px 0 rgba(31, 32, 34, 0.2), 0 0 4px 0 rgba(31, 32, 34, 0.1);
		}
		&:after {
			opacity: 0 !important;
		}
	}
	.v-cta-btn:hover {
		cursor: pointer;
	}
	.v-cta-btn:hover:after {
		opacity: 1;
		cursor: pointer;
	}

	.v-cta-btn span {
		@include text-button;
		position: relative;
		z-index: 3;
		/*text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);*/
		&:hover {
			cursor: pointer;
		}  
	}
</style>