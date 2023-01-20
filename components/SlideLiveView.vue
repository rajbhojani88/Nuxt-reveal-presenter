<template>
  <div ref="slide-data" class="container">
    <div class="reveal">
      <div class="slides">
        <section>
          <h2 data-id="code-title">{{ slides.title }}</h2>
          <pre
            data-id="code-animation"
          ><code class="hljs javascript" data-trim data-line-numbers>
{{ slides.code }}
					</code></pre>
          <p>
            {{ slides.content }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js'

export default {
  name: 'SlideLiveView',
  props: {
    slides: { type: Object, default: null },
  },
  // eslint-disable-next-line space-before-function-paren
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
  methods: {},
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
