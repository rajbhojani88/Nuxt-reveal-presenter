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
        <c-modal-header>Create New Presentation</c-modal-header>
        <c-modal-close-button />
        <validation-observer v-slot="{ handleSubmit, invalid }" ref="observer">
          <c-modal-body>
            <c-form-control>
              <c-form-label>Title</c-form-label>
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Title"
                vid="title"
              >
                <c-input
                  ref="initialRef"
                  v-model="form.title"
                  placeholder="Title"
                />
                <c-form-error v-if="errors[0]" class="c-form-error">{{
                  errors[0]
                }}</c-form-error>
              </validation-provider>
            </c-form-control>
          </c-modal-body>
          <c-modal-footer>
            <c-button variant-color="blue" mr="3" @click="close">
              Cancel
            </c-button>
            <c-button
              variant-color="blue"
              :is-loading="loading"
              :is-disabled="invalid"
              @click="handleSubmit(create)"
              >Save</c-button
            >
          </c-modal-footer>
        </validation-observer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </div>
</template>

<script>
import { CIconButton } from '@chakra-ui/vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    CIconButton,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      isOpen: false,
      form: {
        title: '',
      },
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
      this.form.title = ''
    },
    async create() {
      await this.$store.dispatch('crateNewPresentation', this.form).then(() => {
        this.$toaster({
          title: 'Success',
          description: 'Presentation created successfully',
          status: 'success',
        })
      })
      await this.$store.dispatch('getAll')

      this.isOpen = false
      this.form.title = ''
    },
  },
}
</script>
<style scoped>
.c-form-error {
  color: red;
}
</style>
