<template>
<a @click="$emit('click')" class="hex-arrow-cont">


	<svg class="hex-arrow hover" v-if="direction === 'down'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29" height="33" viewBox="0 0 29 33">

    <path class="ha ha-hover" :fill="fillColor ? fillColor : '#fff'" fill-opacity="1" fill-rule="nonzero" d="M29 8.248v16.504L14.5 33 0 24.752V8.248L14.5 0 29 8.248zM15 23.212V7.79h-1v15.424l-2.858-3.061-.732.679 4.09 4.377 4.09-4.377-.734-.68L15 23.213z"/>

    <path class="ha ha-initial" :fill="strokeColor ? strokeColor : '#fff'" fill-rule="nonzero" d="M29 8.248v16.504L14.5 33 0 24.752V8.248L14.5 0 29 8.248zM1 8.825v15.35l13.5 7.679 13.5-7.68V8.826L14.5 1.146 1 8.826zm14 14.387l2.856-3.06.733.68-4.09 4.377-4.089-4.377.732-.68L14 23.215V7.79h1v15.422z"/>
	</svg>

	<svg v-else class="hex-arrow" xmlns="http://www.w3.org/2000/svg" width="33" height="29" viewBox="0 0 33 29">


		<g v-if="direction === 'left'">
			<path class="ha ha-hover" :fill="fillColor ? fillColor : '#fff'" fill-opacity="1" fill-rule="nonzero" d="M24.752 29H8.248L0 14.5 8.248 0h16.504L33 14.5 24.752 29zM9.788 15H25.21v-1H9.786l3.061-2.858-.679-.732-4.377 4.09 4.377 4.09.68-.734L9.787 15z"/>

			<path class="ha ha-initial" :fill="strokeColor ? strokeColor : '#fff'" fill-rule="nonzero" d="M24.752 29H8.248L0 14.5 8.248 0h16.504L33 14.5 24.752 29zm-.577-28H8.825L1.146 14.5 8.826 28h15.349l7.679-13.5L24.174 1zM9.788 15l3.06 2.856-.68.733-4.377-4.09 4.377-4.089.68.732L9.785 14H25.21v1H9.788z"/>
		</g>
		
		<g v-if="direction === 'right' || !direction">
			<path class="ha ha-hover" :fill="fillColor ? fillColor : '#fff'" fill-opacity="1" fill-rule="nonzero" d="M8.248 29h16.504L33 14.5 24.752 0H8.248L0 14.5 8.248 29zm14.964-14H7.79v-1h15.424l-3.061-2.858.679-.732 4.377 4.09-4.377 4.09-.68-.734L23.213 15z"/>

			<path class="ha ha-initial" :fill="strokeColor ? strokeColor : '#fff'" fill-rule="nonzero" d="M8.248 29h16.504L33 14.5 24.752 0H8.248L0 14.5 8.248 29zm.577-28h15.35l7.679 13.5-7.68 13.5H8.826L1.146 14.5 8.826 1zm14.387 14l-3.06 2.856.68.733 4.377-4.09-4.377-4.089-.68.732L23.215 14H7.79v1h15.422z"/>
		</g>
		
	</svg>
</a>	    
	
</template>
<script>
	export default {
		name: 'hexArrowBtn',
		props: ['direction', 'strokeColor', 'fillColor']
	}
</script>
<style lang='scss'>
	.hex-arrow-cont {
		position: relative;
		display: block;
		transition: 0.3s all linear;
		transform: initial;
	}
	.ha {
		transition: 0.3s all linear;
	}
	.hex-arrow .ha-initial {
		opacity: 1.0;
	}
	.hex-arrow .ha-hover {
		opacity: 0;
	}
	.hex-arrow:hover {
		cursor: pointer;
		transform: translateY(2px);
		.ha-initial {
			opacity: 0;
		}
		.ha-hover {
			opacity: 1;
		}
	}
</style>
