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
          <c-select v-model="slideID">
            <option v-for="slide in parentSlides" :key="slide.id" :value="slide.id">
              {{ slide.title }}
            </option>
          </c-select>
        </c-form-control>
      </c-form-control>
      <c-button
        m="2rem"
        style="float: right"
        variant-color="blue"
        variant="solid"
        @click="create"
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
      slideID: 1,
      form: {
        id: 1,
        title: '',
        subtitle: '',
        content: '',
        under: '',
        parent: false,
        verlicalList: [],
        vertical: false,
      },
    }
  },
  computed: {
    presentation() {
      return this.$store.getters.getPresentation
    },
    slides() {
      if (this.presentation.slide != null) {
        const slidedata = JSON.parse(this.presentation.slide)
        return slidedata.slides
      } else {
        return []
      }
    },
    parentSlides() {
      return this.slides.filter((slide) => slide.parent === true)
    },
  },
  watch: {
    // whenever question changes, this function will run
    'form.vertical': function (newVal, oldVal) {
      if (this.parentSlides.length === 0) {
        this.form.parent = newVal
      }
    },
  },
  methods: {
    // eslint-disable-next-line require-await
    async create() {
      if (this.presentation.slide === null) {
        this.presentation.slide = JSON.stringify({ slides: [this.form] })
      } else {
        const slidesData = JSON.parse(this.presentation.slide)

        if (this.form.vertical && !this.form.parent) {
          this.form.id =
            slidesData.slides[this.slideID - 1].verlicalList.length + 1
          slidesData.slides[this.slideID - 1].verlicalList.push(this.form)
        } else {
          this.form.id = this.slides.length + 1
          slidesData.slides.push(this.form)
        }

        this.presentation.slide = JSON.stringify(slidesData)
      }
      await this.$store.dispatch('updateSlide', this.presentation)
    },
  },
}
</script>
