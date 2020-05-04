Vue 中实现对输入框的值进行检索功能时，需要注意输入中文的问题。Vue 的 input 事件对输入中文进行了处理,当在键盘上确认选择中文后才会触发 input 事件。对于 keyup、change 等事件都会在用户输入时就会触发，包括当在键盘上拼写中文还未确认选择中文文字时。

```vue
<InputItem
  key="enterprise"
  :value="model.title_name"
  @input="handleTitleName"
  v-bind="{ placeholder: ' ' }"
  @blur="e => handleBlur(e, 'title_name')"
/>
```

```vue
<template>
  <input
    class="input-field"
    ref="input"
    v-bind="$props"
    v-model="inputValue"
    :type="type"
    @keyup="handleKeyUp"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="changeHander"
  />
</template>

<script>
const COMPONENT_NAME = 'enroll-input'
const EVENT_INPUT = 'input'
const EVENT_BLUR = 'blur'
const EVENT_FOCUS = 'focus'
const EVENT_CHANGE = 'change'
const EVENT_KEYUP = 'keyup'
const EVENT_INPUT_CHANGE = 'inputChange'

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      isOnComposition: false,
      emittedInput: false
    }
  },

  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    }
  },

  watch: {
    value(newValue) {
      this.inputValue = newValue
    },

    inputValue(newValue) {
      this.$emit(EVENT_INPUT, newValue)
    }
  },

  mounted() {},

  beforeDestroy() {},

  methods: {
    handleInputChange(e) {
      this.$emit(EVENT_INPUT_CHANGE, e)
    },

    handleKeyUp(e) {
      this.$emit(EVENT_KEYUP, e)
    },

    changeHander(e) {
      this.$emit(EVENT_CHANGE, e)
    },

    handleFocus(e) {
      this.$emit(EVENT_FOCUS, e)
    },

    handleBlur(e) {
      this.$emit(EVENT_BLUR, e)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-field {
  width: 100%;
}

input {
  border: none;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  height: 44px;
}

input:-ms-input-placeholder {
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c3c1c1;
}
</style>
```
