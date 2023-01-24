export default {
  data() {
    return {
      slideID: null,
      form: {
        id: 1,
        type: 'default',
        title: '',
        subtitle: '',
        code: '',
        content: '',
        under: '',
        link: null,
        linkText: null,
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
    tabchange(e) {
      // eslint-disable-next-line no-console
      console.log('tabev', e)
    },
    async create(type) {
      this.form.type = type
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
