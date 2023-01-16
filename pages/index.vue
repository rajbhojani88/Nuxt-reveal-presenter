<template>
  <PresentationsList />
</template>

<script>
export default {
  name: "Presentations",
  async asyncData({ store }) {
    await store.dispatch("getAll");
  },
};
</script>
