# 1. Setup

## 1.1 Installation

```bash
yarn add vest-ui
npm install vest-ui
```

## 1.2 Usage

Import all components.

```js
import Vue from "vue";
import Vest from "vest-ui";

Vue.use(Vest);
```

Or import specific components as needed.

```js
import { ctaBtn, stdInput } from "vest-ui";

// global
Vue.component("ctaBtn", ctaBtn);
Vue.component("stdInput", stdInput);

// scoped
export default {
	name: "anyVueComponent",
	components: {
		ctaBtn,
		stdInput
	}
};
```

# 2. Components

## 2.1 buttons

### 2.1.1 ctaBtn

![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/ctaBtn1.gif)
![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/ctaBtn2.gif)

#### setup

No additional setup is reuqired to use this component.

#### props

| Name             | Description                              | Type   | Values | Notes      | Optional |
| :--------------- | :--------------------------------------- | :----- | :----- | :--------- | :------- |
| disabled         | if true, button is disabled              | bool   | --     | --         | yes      |
| btnStyle         | integer that renders button color scheme | number | 1,2,3  | default: 1 | yes      |
| alt (deprecated) | if true, renders alternate color scheme  | bool   | --     | --         | yes      |

#### events

| Name   | Trigger                 | Notes |
| :----- | :---------------------- | :---- |
| @click | button has been clicked | --    |

### 2.1.2 stdBtn

![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/stdBtn1.gif)
![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/stdBtn2.gif)

#### setup

No additional setup is reuqired to use this component.

#### props

| Name     | Description                             | Type | Values | Notes | Optional |
| :------- | :-------------------------------------- | :--- | :----- | :---- | :------- |
| disabled | if true, button is disabled             | bool | --     | --    | yes      |
| alt      | if true, renders alternate color scheme | bool | --     | --    | yes      |

#### events

| Name   | Trigger                 | Notes |
| :----- | :---------------------- | :---- |
| @click | button has been clicked | --    |

### 2.1.3 linkBtn

![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/linkBtn.gif)

#### setup

No additional setup is reuqired to use this component.

#### props

| Name     | Description                 | Type | Values | Notes | Optional |
| :------- | :-------------------------- | :--- | :----- | :---- | :------- |
| disabled | if true, button is disabled | bool | --     | --    | yes      |

#### events

| Name   | Trigger                 | Notes |
| :----- | :---------------------- | :---- |
| @click | button has been clicked | --    |

### 2.1.4 hexArrowBtn

![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/hexArrowBtn.gif)

#### setup

No additional setup is reuqired to use this component.

#### props

| Name        | Description                         | Type   | Values                  | Notes            | Optional |
| :---------- | :---------------------------------- | :----- | :---------------------- | :--------------- | :------- |
| direction   | the direction of the button's arrow | string | 'right', 'left', 'down' | default: 'right' | yes      |
| strokeColor | button's outline/arrow color        | string | css hex color           | default: '#fff'  | yes      |
| fillColor   | button's color on hover/click       | string | css hex color           | default: '#fff'  | yes      |

#### events

| Name   | Trigger                 | Notes |
| :----- | :---------------------- | :---- |
| @click | button has been clicked | --    |

## 2.2 accents

### 2.2.1 plusText

![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/plus-text.png)

#### setup

This component is absolutely positioned. Be sure to have a positioned element as the desired parent.

#### props

| Name        | Description     | Type   | Values        | Notes           | Optional |
| :---------- | :-------------- | :----- | :------------ | :-------------- | :------- |
| strokeColor | accents's color | string | css hex color | default: '#fff' | yes      |

#### events

There are no events for this component.

### 2.2.2 hrPlus

![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/hr-plus.png)

#### setup

No additional setup is reuqired to use this component.

#### props

| Name        | Description     | Type   | Values        | Notes           | Optional |
| :---------- | :-------------- | :----- | :------------ | :-------------- | :------- |
| strokeColor | accents's color | string | css hex color | default: '#fff' | yes      |

#### events

There are no events for this component.

### 2.2.3 hrCapped

![alt text](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/vest-ui/hr-capped.png)

#### setup

No additional setup is reuqired to use this component.

#### props

| Name        | Description     | Type   | Values        | Notes           | Optional |
| :---------- | :-------------- | :----- | :------------ | :-------------- | :------- |
| strokeColor | accents's color | string | css hex color | default: '#fff' | yes      |

#### events

There are no events for this component.

## 2.3 form components

### 2.3.1 stdInput

![alt text](https://s3.us-east-2.amazonaws.com/vest-client-2-ohio/readme-screenshots/stdInput.jpg "stdInput")

#### setup

Must have `vee-validate` plugin installed and imported in `main.js`
For currency masking, must have `v-money` plugin installed and imported in `main.js`

```js
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

// only need this if you are using the iMoney prop for currency masking
import Money from "v-money";
Vue.use(Money, { precision: 2 });
```

#### props

| Name         | Description                                                       | Type   | Values                                                                                      | Notes                                                      | Optional |
| :----------- | :---------------------------------------------------------------- | :----- | :------------------------------------------------------------------------------------------ | :--------------------------------------------------------- | :------- |
| iName        | input's name                                                      | string | --                                                                                          | --                                                         | no       |
| v-model      | input's modeled value                                             | string | --                                                                                          | --                                                         | no       |
| iValue       | input's initial value                                             | string | --                                                                                          | this must be the same property that is assigned to v-model | no       |
| iType        | input's type                                                      | string | html input type                                                                             | default: 'text'                                            | yes      |
| iValidate    | validation rules                                                  | string | [valid validation rule syntax](http://vee-validate.logaretm.com/rules.html#available-rules) | --                                                         | yes      |
| iPlaceholder | input's placeholder text                                          | string | --                                                                                          | --                                                         | yes      |
| iClass       | class(es) to be applied directly to the input element             | string | css class string                                                                            | --                                                         | yes      |
| iMask        | input mask                                                        | string | [valid vue-the-mask string](https://vuejs-tips.github.io/vue-the-mask/)                     | --                                                         | yes      |
| iMoney       | input mask for currency                                           | object | [valid v-money object](https://github.com/vuejs-tips/v-money#properties)                    | --                                                         | yes      |
| iMin         | number input's min value                                          | number | --                                                                                          | only used when iType="number"                              | yes      |
| iMax         | number input's max value                                          | number | --                                                                                          | only used when iType="number"                              | yes      |
| iStep        | number input's legal intervals                                    | number | --                                                                                          | only used when iType="number" default: 1                   | yes      |
| labelClass   | class(es) to be applied directly to the input's label/placeholder | string | css class string                                                                            | --                                                         | yes      |
| iOptional    | indicate whether input should display 'optional'                  | bool   | --                                                                                          | default: false                                             | yes      |

#### events

There are no events for this component.

### 2.3.2 stdSelect

![alt text](https://s3.us-east-2.amazonaws.com/vest-client-2-ohio/readme-screenshots/stdSelect.png "stdSelect")
![alt text](https://s3.us-east-2.amazonaws.com/vest-client-2-ohio/readme-screenshots/stdSelectAlt.jpg "stdSelectAlt")

#### setup

This element uses a single `<slot></slot>` tag to render `<option>` tags inside of it. See [the docs](https://vuejs.org/v2/guide/components.html#Single-Slot) for more info on Slots.

```html
<std-select>
	<option value="foo">foo</option>
	<option value="bar">bar</option>
	<option value="too">too</option>
</std-select>
```

#### props

| Name    | Description                           | Type   | Values | Notes          | Optional |
| :------ | :------------------------------------ | :----- | :----- | :------------- | :------- |
| v-model | field's modeled value                 | string | --     | --             | yes      |
| alt     | if true, render's alternate size/font | bool   | --     | default: false | yes      |

#### events

There are no events for this component.

## 2.4 nav components

### 2.4.1 navBar

![alt text](https://s3.us-east-2.amazonaws.com/vest-client-2-ohio/readme-screenshots/navBar.jpg "navBar")

#### setup

the `@linkClick` event must be listened for and it's corresponding function must update the `active` prop to match the new active Index.

```html
<!-- vue template -->
<nav-bar @linkClick="handleLinkClick" active="active"></nav-bar>
```

```js
// vue script

methods: {
	handleLinkClick(newActiveIndex, direction) {
		this.active = newActiveIndex;
		// do anything else
	}
}
```

#### props

| Name           | Description                        | Type     | Values                     | Notes                   | Optional |
| :------------- | :--------------------------------- | :------- | :------------------------- | :---------------------- | :------- |
| items          | array of labels for nav items      | [string] | --                         | --                      | no       |
| active         | which nav Item is currently active | number   | 0 <= active < items.length | --                      | no       |
| navKey         | unique string for the navBar       | string   | --                         | --                      | no       |
| activeBarColor | color of the active bar            | string   | css hex color              | deafult: $vest-sky-blue | yes      |
| dur            | duration of navBar animation (ms)  | Number   | --                         | deafult: 400            | yes      |

#### events

| Name       | Trigger                  | Notes                                                                                                                                                   |
| :--------- | :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @linkClick | navItem has been clicked | passes two props: linkClick(newActiveIndex, direction) where direction is only used to animate other elements in conjunction with the navBar animation. |

## 2.5 containers

### 2.5.1 stdModal

![alt text](https://s3.us-east-2.amazonaws.com/vest-client-2-ohio/readme-screenshots/stdModal.png "stdModal")

#### setup

This element uses a single `<slot></slot>` tag to render content inside of the modal. See [the docs](https://vuejs.org/v2/guide/components.html#Single-Slot) for more info

#### props

| Name   | Description                         | Type   | Values | Notes | Optional |
| :----- | :---------------------------------- | :----- | :----- | :---- | :------- |
| mkey   | unique string for the modal's ID    | string | --     | --    | no       |
| active | whether or not the modal is visible | bool   | --     | --    | no       |

#### events

| Name   | Trigger                           | Notes                                                            |
| :----- | :-------------------------------- | :--------------------------------------------------------------- |
| @close | user is trying to close the modal | should set whatever value is bound to `:active` prop to `false`. |

# 3. Styles

## 3.1 Import

To access the lastest Vest-ui styles, simply import `main.scss` and `_variables.scss` into `App.vue`.

```html
<!-- App.vue -->
<style lang='scss'>
	@import 'node_modules/vest-ui/styles/main.scss';
	@import 'node_modules/vest-ui/styles/_variables.scss';
</style>
```

In addition, you will have to include the `_variables.scss` import in any component styles. I know this sucks,
searching for a better way but I don't think Vue offers one currently.

```html
<!-- someComponent.vue -->
<style lang='scss'>
	@import 'node_modules/vest-ui/styles/_variables.scss';
	/*your components scss*/
</style>
```

## 3.2 Colors + Fonts

All colors and fonts found in the [zeplin styleguide](zpl://project?pid=59a047033c096f8f7b46d18a) are available
in `_variables.scss`.

* colors are referenced as scss variables: (ex. $vest-teal)
* fonts are referenced as scss mixins: (ex. @include text-body) see zeplin comments for exact mixin names.

## 3.3 Extras

Other helpful extras

#### Responsive Mixin:

```scss
// lg: under 1440px
// md: under 1024px
// sm: under 768px
// 2x: 2x displays (retina)
// 3x: 3x displays (super-retina?)

@include respond-to($media) {
	// conditional styles here
}
```

#### Background + Text Opacity Mixin:

```scss
@include background-opacity($color, $opacity) @include text-opacity($color, $opacity);
```
