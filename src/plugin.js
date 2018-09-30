import ctaBtn from './buttons/ctaBtn.vue';
import hexArrowBtn from './buttons/hexArrowBtn.vue';
import linkBtn from './buttons/linkBtn.vue';
import stdBtn from './buttons/stdBtn.vue';
import hrCapped from './accents/hrCapped.vue';
import hrPlus from './accents/hrPlus.vue';
import plusText from './accents/plusText.vue';
import stdInput from './formComponents/stdInput.vue';
import stdSelect from './formComponents/stdSelect.vue';
import navItem from './navComponents/navItem.vue';
import navBar from './navComponents/navBar.vue';
import stdModal from './containers/stdModal.vue';
import questionBubble from './accents/questionBubble.vue';

module.exports = {
	install: function (Vue, options) {
		Vue.component('ctaBtn', ctaBtn);
		Vue.component('hexArrowBtn', hexArrowBtn);
		Vue.component('linkBtn', linkBtn);
		Vue.component('stdBtn', stdBtn);
		Vue.component('hrCapped', hrCapped);
		Vue.component('hrPlus', hrPlus);
		Vue.component('plusText', plusText);
		Vue.component('stdInput', stdInput);
		Vue.component('stdSelect', stdSelect);
		Vue.component('navItem', navItem);
		Vue.component('navBar', navBar);
		Vue.component('stdModal', stdModal);
		Vue.component('questionBubble', questionBubble);
	}
}