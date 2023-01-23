<template>
  <div ref="slide-data" class="container">
    <div class="reveal">
      <div class="slides">
        <section v-for="slide in slides" :key="slide.id">
          <section v-for="vslide in vslides(slide)" :key="vslide.id">
            <type-SlideCode v-if="vslide.type == 'code'" :slide="vslide" />
            <type-SlideDefault v-else :slide="vslide" />
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/reset.css'
import 'reveal.js/plugin/highlight/monokai.css'
import 'reveal.js/dist/theme/white.css'
import 'reveal.js/dist/theme/black.css'
import RevealZoom from 'reveal.js/plugin/zoom/zoom.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.js'
import RevealSearch from 'reveal.js/plugin/search/search.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'

export default {
  name: 'SlideView',

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
    Reveal(this.$refs.slide_data).initialize({
      history: true,
      transition: 'slide',
      width: '100%',
      height: '100%',
      margin: 0,
      minScale: 1,
      maxScale: 1,
      controls: true,
      progress: true,
      center: true,
      hash: true,

      // Learn about plugins: https://revealjs.com/plugins/
      plugins: [
        RevealZoom,
        RevealNotes,
        RevealSearch,
        RevealMarkdown,
        RevealHighlight,
      ],
    })
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
