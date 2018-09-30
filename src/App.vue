<template>
	<div id="app">
	<div class="test-bg">
		<cta-btn>Click me</cta-btn>
	</div>
	<div class="test-bg">
		<hex-arrow-btn  strokeColor="#555"></hex-arrow-btn>
	</div>
	<div class="test-bg">
		<link-btn>Click me</link-btn>
	</div>	
	<div class="test-bg dark">
		<std-btn>Click me</std-btn>	
	</div>

	<div class="test-bg dark pg">
		<nav-bar
		:items="['test1', 'test222', 'test333333', 'test4444444', 'test53333', 'test622']"
		:active="active"
		navKey="testKey"
		@linkClick="linkClicked"
		></nav-bar>
	</div>

	<div class="test-bg dark pg">
		<nav-bar
		:items="['test1', 'test222', 'test333333', 'test4444444', 'test53333', 'test622']"
		:active="active2"
		navKey="otherTestKey"
		@linkClick="linkClicked2"
		></nav-bar>
	</div>

	<div class="test-bg">
		<std-select v-model="selectmod" alt="true"  >
			<option value="Test1">Foo Bar 1</option>
			<option selected value="Test2">alt = true</option>
			<option value="Test3">Foo Bar 3</option>
		</std-select>
	</div>
	
		{{selectmod}}

		<!-- <std-modal mKey="yo" :active="active3" @close="active3 = false;" >
		<div class="test-modal">
			<h3>This is a Test Modal</h3>
			<p class="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		</div>
			
		</std-modal> -->

		<div class="test-bg">
			Some text that needs clarification
			<question-bubble class="grr" :active="active3" @click="active3 = !active3" @close="active3 = false" pKey="trbl">
				<p>is this the bubble for me?</p>
				<link-btn>CLick me</link-btn>
				<p>is this the bubble for me?</p>
			</question-bubble>	
		</div>
		

	</div>



</template>
<script>
	import ctaBtn from './buttons/ctaBtn.vue';
	import hexArrowBtn from './buttons/hexArrowBtn.vue';
	import linkBtn from './buttons/linkBtn.vue';
	import stdBtn from './buttons/stdBtn.vue';
	import hrCapped from './accents/hrCapped.vue';
	import hrPlus from './accents/hrPlus.vue';
	import plusText from './accents/plusText.vue';
	import navBar from './navComponents/navBar.vue';
	import stdSelect from './formComponents/stdSelect.vue';
	import stdInput from './formComponents/stdInput.vue';
	import stdModal from './containers/stdModal.vue';
	import questionBubble from './accents/questionBubble.vue';
	export default {
		name: 'app',
		components: {
			ctaBtn,
			hexArrowBtn,
			linkBtn,
			stdBtn,
			hrCapped,
			hrPlus,
			plusText,
			navBar,
			stdSelect,
			stdModal,
			stdInput,
			questionBubble,
		},
		// directives: {money: VMoney},
		mounted() {
			this.active = 2;
			setTimeout(() => {
				this.testActive = true;
			}, 1000)
		},
		data() {
			return {
				 money: {
	        decimal: '.',
	        thousands: ',',
	        prefix: '$ ',
	        suffix: '',
	        precision: 0,
	        masked: false /* doesn't work with directive */
	      },
				active: 0,
				active2: 0,
				active3: false,
				selectmod: 'testing',
				form: {
					name: 0,
				},
				testActive: false,
			}
		},
		methods: {
			linkClicked(i, dir) {
				this.active = i;
			},
			linkClicked2(i, dir) {
				this.active2 = i;
			}
		}
	}
</script>
<style lang='scss'>
	@import '../styles/main.scss';
	@import '../styles/_variables.scss';
	.test-bg {
		padding: 3rem;
		position: relative;
		@include intro-text;
		&.dark {
			background-color: $vest-gun-metal;
		}
		&.pg {
			margin-left: 5rem;
			text-align: center;
			/*position: absolute;*/
			/*top: 2rem;*/
		}
	}
	.test-modal {
		text-align: center;
		padding-top: 5rem;
		h3 {
			text-align: center;
		}
		.h6 {
			@include intro-text;
			padding: 2rem;
			padding-bottom: 10rem;
		}
	}
	.grr {
		bottom: calc(-100% - 2rem;);
	}
</style>