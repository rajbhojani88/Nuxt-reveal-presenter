<template>
  <div>
    <h1>{{ slide.title }}</h1>
    <h3>{{ slide.subtitle }}</h3>
    <p>{{ slide.content }}</p>
    <a v-if="slide.link !== null" :href="slide.link">{{ slide.linkText }}</a>
    <SlideNavButton :slide="slide" />
  </div>
</template>

<script>
export default {
  name: 'SlideDefault',
  props: {
    slide: { type: Object, default: null },
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
.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.slide section h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
}
.slide section h3 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}
.slide section p {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
}
</style>
