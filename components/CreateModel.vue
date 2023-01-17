<template>
  <div>
    <c-icon-button
          variant-color="blue"
          variant="outline"
          aria-label="create new"
          icon="add"
          @click="open"
        />
    <c-modal
      :initial-focus-ref="() => $refs.initialRef"
      :is-open="isOpen"
      :on-close="close"
    >
      <c-modal-content ref="content">
        <c-modal-header>Create your account</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
          <c-form-control>
            <c-form-label>Title</c-form-label>
            <c-input ref="initialRef" placeholder="Title" />
          </c-form-control>
        </c-modal-body>
        <c-modal-footer>
          <c-button variant-color="blue" mr="3" @click="close">
            Cancel
          </c-button>
          <c-button @click="close">Save</c-button>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </div>
</template>

<script>
import { CIconButton } from '@chakra-ui/vue'
export default {
  components: {
    CIconButton,
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    create() {
      this.isOpen = false
    }
  }
}
</script>
