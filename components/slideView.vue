<template>
  <div ref="slide-data" class="container">
    <div class="reveal">
      <div class="slides">
        <section v-for="slide in slides" :key="slide.id">
          <h1>{{ slide.title }}</h1>
          <h3>{{ slide.subtitle }}</h3>
          <p>{{ slide.content }}</p>
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
  data() {
    return {
      lesg: 3,
    }
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
