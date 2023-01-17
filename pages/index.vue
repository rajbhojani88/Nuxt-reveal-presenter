<template>
  <c-flex align="center" pt="5rem" justify="center">
    <PresentationsList />
  </c-flex>
</template>

<script>
import { CFlex } from '@chakra-ui/vue'
export default {
  name: 'Presentations',
  components: {
    CFlex,
  },
  async asyncData({ store }) {
    await store.dispatch('getAll')
  },
}
</script>
