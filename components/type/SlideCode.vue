<template>
  <div>
    <h2 data-id="code-title">{{ slide.title }}</h2>
    <pre data-id="code-animation">
      <code class="hljs javascript" data-trim data-line-numbers>
        {{ slide.code }}
			</code>
    </pre>
    <p>
      {{ slide.content }}
    </p>
    <SlideNavButton :slide="slide" />
  </div>
</template>

<script>
export default {
  name: 'SlideCode',
  props: {
    slide: { type: Object, default: null },
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
