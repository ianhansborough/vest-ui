<template>
  <div class="field-cont">

    <input
    v-if="iValidate && iMoney"
    v-validate="iValidate"
    v-money="iMoney"
    :value="iValue"
    @input="updateModelValue"
    :type="iType || 'text'"
    :name="iName"
    :min="iMin || 0"
    :max="iMax || 10000000000000000000"
    :step="iStep || 1"
    class="std-input reg-text"
    :class="[{'is-danger': errors.has(iName), blank: !localValue}, iClass]"
    >

    <input
    v-else-if="iValidate && iMask"
    v-validate="iValidate"
    v-mask="iMask"
    :value="iValue"
    @input="updateModelValue"
    :type="iType || 'text'"
    :name="iName"
    :min="iMin || 0"
    :max="iMax || 10000000000000000000"
    :step="iStep || 1"
    class="std-input reg-text"
    :class="[{'is-danger': errors.has(iName), blank: !localValue}, iClass]"
    >

    <input
    v-else-if="iValidate"
    v-validate="iValidate"
    :value="iValue"
    @input="updateModelValue"
    :type="iType || 'text'"
    :min="iMin || 0"
    :max="iMax || 10000000000000000000"
    :step="iStep || 1"
    :name="iName"
    class="std-input reg-text"
    :class="[{'is-danger': errors.has(iName), blank: !localValue}, iClass]"
    >

    <input
    v-else-if="iMask"
    v-mask="iMask"
    :value="iValue"
    @input="updateModelValue"
    :type="iType || 'text'"
    :min="iMin || 0"
    :max="iMax || 10000000000000000000"
    :step="iStep || 1"
    :name="iName"
    class="std-input reg-text"
    :class="[{'is-danger': errors.has(iName), blank: !localValue}, iClass]"
    >

    <input
    v-else-if="iMoney"
    v-money="iMoney"
    :value="iValue"
    @input="updateModelValue"
    :type="iType || 'text'"
    :name="iName"
    :min="iMin || 0"
    :max="iMax || 10000000000000000000"
    :step="iStep || 1"
    class="std-input reg-text"
    :class="[{'is-danger': errors.has(iName), blank: !localValue}, iClass]"
    >

    <input
    v-else
    :value="iValue"
    @input="updateModelValue"
    :type="iType || 'text'"
    :min="iMin || 0"
    :max="iMax || 10000000000000000000"
    :step="iStep || 1"
    :name="iName"
    class="std-input reg-text"
    :class="[{'is-danger': errors.has(iName), blank: !localValue}, iClass]"
    >
    <label class="std-input-label" :class="[labelClass, {blank: !localValue, error: errors.first(iName)}]" for="">{{iPlaceholder || ''}} <span v-if="iOptional">Optional</span></label>
    <span v-show="errors.has(iName)" class="std-error is-danger">{{ errors.first(iName) ? errors.first(iName).split(' ').slice(2).join(' ') : '' }} </span>
    <i class="ex" v-if="errors.first(iName)"></i>
    <i class="check" v-if="localValue && !errors.first(iName)"></i>

  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
	name: "StdInput",
	inject: ["$validator"],
	props: [
		"iName",
		"iType",
		"iValidate",
		"iPlaceholder",
		"iClass",
		"iMask",
		"iValue",
		"iMin",
		"iMax",
		"iStep",
		"labelClass",
		"iOptional",
		"iMoney"
	],
	data() {
		return {
			localValue: null
		};
	},
	directives: { mask },
	methods: {
		updateModelValue: function(e) {
			this.localValue = e.target.value;
			this.$emit("input", e.target.value);
		}
	}
};
</script>

<style lang='scss'>
@import "../../styles/_variables.scss";
input::-webkit-calendar-picker-indicator {
	display: none;
}
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	display: none;
}
.std-input-label {
	@include text-link position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
	text-transform: initial;
	color: $vest-blue;
	&.blank {
		transform: translateY(2.2rem);
		color: $vest-gun-metal;
	}
	&.error {
		color: $vest-red !important;
		font-weight: bold;
	}
	span {
		@include text-small color: $vest-light-grey;
		margin-left: 1rem;
	}
}
.std-input {
	padding: 1rem 0;
	outline: none;
	border: none;
	border-bottom: 1px solid $vest-gun-metal;
	border-radius: 0 !important;
	margin: 1.3rem 0 0.9rem 0;
	display: inline-block;
	transition: 0.1s all ease;
	width: 100%;
	@include text-link text-transform: initial;
	&:focus {
		border-color: $vest-sky-blue;
		& + label {
			transform: translateY(0);
			transition: 0.1s all ease;
			color: $vest-blue;
		}
	}
	&[aria-invalid="false"] {
		border-color: $vest-success-green;
		&.blank {
			border-color: $vest-gun-metal;
		}
	}
	&::placeholder {
		color: $vest-gun-metal;
	}
}
.field-cont {
	float: left;
	position: relative;
	.check {
		pointer-events: none;
		display: block;
		position: absolute;
		top: 2.8rem;
		right: 2rem;
		background-image: url("https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/sm-checkmark-green.svg");
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		width: 1.4rem;
		height: 1rem;
	}
	.ex {
		pointer-events: none;
		display: block;
		position: absolute;
		top: 2.8rem;
		right: 2rem;
		background-image: url("https://s3-us-east-2.amazonaws.com/vest-client-2-ohio/sm-x.svg");
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		width: 1rem;
		height: 1rem;
	}
}
.std-error {
	position: absolute;
	top: 2.2rem;
	right: 5rem;
	pointer-events: none;
	@include text-small;
}
.is-danger {
	border-color: $vest-red !important;
	color: $vest-red !important;
}
</style>
