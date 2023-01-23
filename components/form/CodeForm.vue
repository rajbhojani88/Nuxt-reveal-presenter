<template>
  <c-box p="1rem" align-items="center">
    <c-form-control mt="4" is-required>
      <c-form-label for="title">Title</c-form-label>
      <c-input id="title" v-model="form.title" placeholder="title" />
    </c-form-control>
    <c-form-control mt="4" is-required>
      <c-form-label for="code">code</c-form-label>
      <c-textarea id="code" v-model="form.code" placeholder="code" />
    </c-form-control>
    <c-form-control mt="4" is-required>
      <c-form-label for="content">content</c-form-label>
      <c-input id="content" v-model="form.content" placeholder="content" />
    </c-form-control>
    <c-form-control mt="4" is-required>
      <c-form-label for="link">Link</c-form-label>
      <c-input id="link" v-model="form.link" placeholder="link" />
    </c-form-control>
    <c-form-control mt="4" is-required>
      <c-form-label for="linkText">Link Text</c-form-label>
      <c-input id="linkText" v-model="form.linkText" placeholder="linkText" />
    </c-form-control>
    <c-form-control mt="4" is-required>
      <c-checkbox v-model="form.vertical">Vertical</c-checkbox>
      <c-checkbox
        v-if="form.vertical"
        v-model="form.parent"
        :is-disabled="parentSlides.length == 0 && form.vertical"
        >Parent</c-checkbox
      >
      <c-form-control
        v-if="parentSlides.length != 0 && form.vertical && !form.parent"
        mt="4"
      >
        <c-form-label for="title">Vertical Parent</c-form-label>
        <c-select v-model="slideID" placeholder="Select Parent">
          <option
            v-for="slide in parentSlides"
            :key="slide.id"
            :value="slide.id"
          >
            {{ slide.title }}
          </option>
        </c-select>
      </c-form-control>
    </c-form-control>
  </c-box>
</template>

<script>
import { CBox, CTextarea, CFormControl, CFormLabel } from '@chakra-ui/vue'
import commonform from '~/mixins/commonform.js'
export default {
  name: 'CodeForm',
  components: {
    CBox,
    CFormControl,
    CFormLabel,
    CTextarea,
  },
  mixins: [commonform],
  watch: {
    form: {
      handler(newValue, oldValue) {
        this.$emit('updateData', newValue)
      },
      deep: true,
    },
    slideID: {
      handler(newValue, oldValue) {
        this.$emit('updateSlideID', newValue)
      },
    },
  },
}
</script>
