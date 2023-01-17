<template>
  <c-flex align="center" pt="5rem" justify="center">
    <c-box
      w="75%"
      p="2rem"
      border-width="1px"
      rounded="lg"
      overflow="hidden"
      align-items="center"
      shadow="sm"
    >
      <c-form-control is-required>
        <c-form-label for="title">First name</c-form-label>
        <c-input id="title" v-model="form.title" placeholder="title" />
      </c-form-control>
      <c-form-control is-required>
        <c-form-label for="subtitle">subtitle</c-form-label>
        <c-input id="subtitle" v-model="form.subtitle" placeholder="subtitle" />
      </c-form-control>
      <c-form-control is-required>
        <c-form-label for="content">content</c-form-label>
        <c-input id="content" v-model="form.content" placeholder="content" />
      </c-form-control>
      <c-button
        m="2rem"
        style="float: right"
        variant-color="blue"
        variant="solid"
        @click="update"
      >
        Submit
      </c-button>
    </c-box>
  </c-flex>
</template>

<script>
import { CButton, CFlex, CBox, CFormControl, CFormLabel } from '@chakra-ui/vue'

export default {
  name: 'CreatePresentations',
  components: {
    CFlex,
    CBox,
    CFormControl,
    CFormLabel,
    CButton,
  },
  data() {
    return {
      form: {
        title: '',
        subtitle: '',
        content: '',
      },
    }
  },
  methods: {
    async update() {
      // eslint-disable-next-line no-console
      console.log(this.form)
      await this.$store.dispatch('updateSlide', this.form)
    },
  },
}
</script>
