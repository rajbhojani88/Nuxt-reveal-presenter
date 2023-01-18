<template>
  <div ref="slide-data" class="container">
    <div class="reveal">
      <div class="slides">
        <section v-for="slide in slides" :key="slide.id">
          <section v-for="vslide in vslides(slide)" :key="vslide.id">
            <h1>{{ vslide.title }}</h1>
            <h3>{{ vslide.subtitle }}</h3>
            <p>{{ vslide.content }}</p>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
import 'reveal.js/dist/theme/black.css'
export default {
  name: 'NuxtTutorial',
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  computed: {
    presentation() {
      return this.$store.getters.getPresentation
    },
    slides() {
      const slidedata = JSON.parse(this.presentation.slide)
      return slidedata.slides
    },
  },
  mounted() {
    Reveal(this.$refs.slide_data).initialize(
      {
        controls: true,
        progress: true,
        history: true,
        center: true,
        transition: 'slide',
        width: '100%',
        height: '100%',
        margin: 0,
        minScale: 1,
        maxScale: 1,
      },
      { controlsTutorial: false }
    )
  },
  methods: {
    vslides(data) {
      if (data.parent === true) {
        return [data, ...data.verlicalList]
      } else {
        return [data]
      }
    },
  },
}
</script>
<style scoped>
.container {
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
}
h3 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}
p {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
}
.reveal {
  width: 100%;
  height: 100%;
  position: relative;
}
.slides {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.slides section h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
}
.slides section h3 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}
.slides section p {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
}
</style>
