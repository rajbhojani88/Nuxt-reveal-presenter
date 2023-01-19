<template>
  <div>
    <button class="navigate-left">
      <img
        class="r-frame"
        style="background: rgba(255, 255, 255, 0.1)"
        width="50"
        height="50"
        data-src="/arrows/chevron-left.png"
        alt="Left"
      />
    </button>
    <button class="navigate-right">
      <img
        class="r-frame"
        style="background: rgba(255, 255, 255, 0.1)"
        width="50"
        height="50"
        data-src="/arrows/chevron-right.png"
        alt="Right"
      />
    </button>
    <button class="navigate-up">
      <img
        class="r-frame"
        style="background: rgba(255, 255, 255, 0.1)"
        width="50"
        height="50"
        data-src="/arrows/chevron-up.png"
        alt="Up"
      />
    </button>
    <button class="navigate-down">
      <img
        class="r-frame"
        style="background: rgba(255, 255, 255, 0.1)"
        width="50"
        height="50"
        data-src="/arrows/chevron-down.png"
        alt="Down"
      />
    </button>

    <!-- Previous vertical OR horizontal slide -->
    <button class="navigate-prev">
      <img
        class="r-frame"
        style="background: rgba(255, 255, 255, 0.1)"
        width="50"
        height="50"
        data-src="/arrows/chevron-left.png"
        alt="Left"
      />
    </button>

    <!-- Next vertical OR horizontal slide -->
    <button class="navigate-next">
      <img
        class="r-frame"
        style="background: rgba(255, 255, 255, 0.1)"
        width="50"
        height="50"
        data-src="/arrows/chevron-right.png"
        alt="Right"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SlideNavButton',
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
