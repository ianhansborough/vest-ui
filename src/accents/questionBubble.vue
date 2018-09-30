<template>
<div class="question-bubble-cont" :class="{alt: alt}">
	<div class="question-icon-cont" @click="$emit('click')">?</div>
	<div class="question-icon-popover" v-show="active" :id="pKey">
		<div class="question-icon-mask" v-show="active" :id="pKey + 'm'" @click="$emit('close')"></div>
		<slot></slot>
	</div>
</div>

</template>
<script>
	import anime from 'animejs';
	export default {
		name: 'QuestionIcon',
		props: ['pKey', 'active', 'alt'],
		data() {
			return {
				questionIconActive: false,
			}
		},
		methods: {
			toggleQuestionPopover(questionIconActive) {
				const dur = 300;
				const timeline = anime.timeline();
				if (questionIconActive) {
					// document.getElementById(this.pKey).style.display = 'block';
					// document.getElementById(this.pKey + 'm').style.display = 'block';
					timeline.add({
						targets: ['#' + this.pKey, '#' + this.pKey + 'm'],
						duration: dur,
						opacity: 1.0,
						easing: 'linear',
						offset: 0,
					})
				}
				else {
					timeline.add({
						targets: ['#' + this.pKey, '#' + this.pKey + 'm'],
						duration: dur,
						opacity: 0,
						easing: 'linear',
						offset: 0,
						complete: () => {
							// document.getElementById(this.pKey).style.display = 'none';
							// document.getElementById(this.pKey + 'm').style.display = 'none';
						}
					})
				}
			}
		},
		watch: {
			'active' (newState) {
				this.toggleQuestionPopover(newState);
			}
		}

	}
</script>
<style lang='scss'>
	@import '../../styles/_variables.scss';
	.question-icon-mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
		z-index: -1;
	}
	.question-icon-popover {
		opacity: 0;
		position: absolute;
		text-align: left;
		bottom: inherit;
		left: inherit;
		right: inherit;
		top: inherit;
		z-index: 4;
		margin: auto;
		display: inline-block;
		width: 29rem;
		border-radius: 4px;
		background-color: rgba(31, 32, 34, 0.95);
		box-shadow: 0 12px 14px 0 rgba(31, 32, 34, 0.24), 0 0 10px 0 rgba(31, 32, 34, 0.04);
		padding: 2rem;
		p {
			color: $vest-white;
			text-align: left;
		}
	}
	.question-bubble-cont {
		display: inline-block;
		&.alt .question-icon-cont {
			font-size: 1.2rem;
			width: 1.8rem;
			height: 1.8rem;
			background-color: transparent;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
			border: solid 1px $vest-white;
			color: $vest-white;
		}

	}
	.question-icon-cont {
		display: inline-block;
		@include text-body;
		font-weight: bold;
		width: 24px;
		height: 24px;
		border-radius: 100px;
		background-color: $vest-white;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
		border: solid 1px $vest-light-grey;
		margin: 0 0.5rem;
		transition: 0.2s all linear;
		position: relative;
		text-align: center;
		&::after {
				box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
				opacity: 0;
				content: '';
				transition: opacity 0.2s ease-in-out;
				position: absolute;
				left: 0;
				top: 0;
				border-radius: 100px;
				width: 100%;
				height: 100%;
		}
		&:hover::after {
				opacity: 1.0 !important;
				cursor: pointer;
		}
	}
</style>