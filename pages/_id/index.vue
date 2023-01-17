<template>
  <SlideView />
</template>

<script>
export default {
  name: 'SlideViewPage',
  async asyncData({ store, params }) {
    await store.dispatch('getOne', params.id)
  },
}
</script>
