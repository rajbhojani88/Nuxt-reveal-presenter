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
      <c-heading as="h2" size="xl"> {{ presentation.title }} </c-heading>
      <c-form-control mt="4" is-required>
        <c-form-label for="title">Title</c-form-label>
        <c-input id="title" v-model="form.title" placeholder="title" />
      </c-form-control>
      <c-form-control mt="4" is-required>
        <c-form-label for="subtitle">subtitle</c-form-label>
        <c-input id="subtitle" v-model="form.subtitle" placeholder="subtitle" />
      </c-form-control>
      <c-form-control mt="4" is-required>
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
import {
  CButton,
  CHeading,
  CFlex,
  CBox,
  CFormControl,
  CFormLabel,
} from '@chakra-ui/vue'

export default {
  name: 'CreatePresentations',
  components: {
    CFlex,
    CBox,
    CHeading,
    CFormControl,
    CFormLabel,
    CButton,
  },
  async asyncData({ store, params }) {
    await store.dispatch('getOne', params.id)
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
  computed: {
    presentation() {
      return this.$store.getters.getPresentation
    },
  },
  methods: {
    async update() {
      if (this.presentation.slide === null) {
        this.presentation.slide = JSON.stringify({ slides: [this.form] })
      } else {
        const slidesData = JSON.parse(this.presentation.slide)
        slidesData.slides.push(this.form)
        this.presentation.slide = JSON.stringify(slidesData)
      }
      await this.$store.dispatch('updateSlide', this.presentation)
    },
  },
}
</script>
