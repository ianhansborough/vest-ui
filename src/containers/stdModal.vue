<template>
	<div class="modal-mask" @click="$emit('close')" v-show="active" :id="mKey">
		<div class="modal-cont">
			<div class="modal-close-btn" @click="$emit('close')"></div>
			<slot></slot>
		</div>
	</div>
</template>
<script>
	import anime from 'animejs';
	export default {
		name:'stdModal',
		props: ['mKey', 'active'],
		methods: {
			toggleModalActive(state) {
				if (state) {
					anime({
						targets: '#' + this.mKey,
						duration: 500,
						opacity: 1.0,
						easing: 'easeInOutQuad',
						complete: () => {
							document.body.style.overflow = 'hidden';
						}
					})
				}
				else {
					anime({
						targets: '#' + this.mKey,
						duration: 500,
						opacity: 0,
						easing: 'easeInOutQuad',
						complete: () => {
							document.body.style.overflow = 'initial';
						}
					})
				}
			}
		},
		mounted() {

			this.toggleModalActive(this.active);
		},
		watch: {
			'active' (newState) {
				this.toggleModalActive(newState)
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../styles/_variables.scss';
	.modal-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0 1.5rem;
		-webkit-backdrop-filter: blur(6px);
		backdrop-filter: blur(6px);
		background-color: rgba(31, 32, 34, 0.85);
		z-index: 10000;
		opacity: 0;
		overflow-y: scroll;
	}
	.modal-close-btn {
		background-image: url('https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/close.svg');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		width: 2.4rem;
		height: 2.4rem;
		position: absolute;
		top: 2rem;
		right: 2rem;
		transition: 0.2s all linear;
		&:hover {
			opacity: 0.5;
			cursor: pointer;
		}
	}
	.modal-cont {
		position: relative;
		text-align: center;
		background: #FFFFFF ;
		box-shadow: 0 12px 14px 0 rgba(31, 32, 34, 0.54), 0 0 10px 0 rgba(31, 32, 34, 0.24);
		border-radius: 2px;
		min-height: 20rem;
		width: 66rem;
		margin: auto;
		margin-top: 13rem;
		@include respond-to(sm) {width: 100%; margin-top: 1.5rem;}
	}

</style>