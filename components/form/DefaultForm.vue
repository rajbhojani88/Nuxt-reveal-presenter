<template>
  <validation-observer v-slot="{ handleSubmit, invalid }">
    <c-box p="1rem" align-items="center">
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="Title"
        vid="title"
      >
        <c-form-control mt="4" is-required>
          <c-form-label for="title">Title</c-form-label>
          <c-input
            id="title"
            v-model="form.title"
            placeholder="title"
            :is-invalid="errors[0]"
          />
          <c-form-error v-if="errors[0]" class="c-form-error">{{
            errors[0]
          }}</c-form-error>
        </c-form-control>
      </validation-provider>
      <c-form-control mt="4">
        <c-form-label for="subtitle">subtitle</c-form-label>
        <c-input id="subtitle" v-model="form.subtitle" placeholder="subtitle" />
      </c-form-control>
      <c-form-control mt="4">
        <c-form-label for="content">content</c-form-label>
        <c-input id="content" v-model="form.content" placeholder="content" />
      </c-form-control>
      <c-form-control mt="4">
        <c-form-label for="link">Link</c-form-label>
        <c-input id="link" v-model="form.link" placeholder="link" />
      </c-form-control>
      <c-form-control mt="4">
        <c-form-label for="linkText">Link Text</c-form-label>
        <c-input id="linkText" v-model="form.linkText" placeholder="linkText" />
      </c-form-control>
      <c-form-control mt="4" is-required>
        <c-checkbox v-model="form.vertical">Vertical</c-checkbox>
        <c-checkbox
          v-if="form.vertical"
          v-model="form.parent"
          :is-disabled="parentSlides.length == 0 && form.vertical"
          >Parent</c-checkbox
        >
        <c-form-control
          v-if="parentSlides.length != 0 && form.vertical && !form.parent"
          mt="4"
        >
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="Vertical Parent"
            vid="slideID"
          >
            <c-form-control mt="4" is-required>
              <c-form-label for="title">Vertical Parent</c-form-label>
              <c-select v-model="slideID" placeholder="Select Parent">
                <option
                  v-for="slide in parentSlides"
                  :key="slide.id"
                  :value="slide.id"
                >
                  {{ slide.title }}
                </option>
              </c-select>
              <c-form-error v-if="errors[0]" class="c-form-error">{{
                errors[0]
              }}</c-form-error>
            </c-form-control>
          </validation-provider>
        </c-form-control>
      </c-form-control>
      <c-form-control>
        <c-button
          m="2rem"
          style="float: right"
          variant-color="blue"
          variant="solid"
          :is-disabled="invalid"
          @click="handleSubmit(create)"
        >
          Submit
        </c-button>
      </c-form-control>
    </c-box>
  </validation-observer>
</template>

<script>
import { CBox, CFormControl, CFormLabel, CButton } from '@chakra-ui/vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import commonform from '~/mixins/commonform.js'
export default {
  name: 'DefaultForm',
  components: {
    CBox,
    CFormControl,
    CFormLabel,
    CButton,
    ValidationObserver,
    ValidationProvider,
  },
  mixins: [commonform],
  watch: {
    form: {
      handler(newValue, oldValue) {
        this.$emit('updateData', newValue)
      },
      deep: true,
    },
    slideID: {
      handler(newValue, oldValue) {
        this.$emit('updateSlideID', newValue)
      },
    },
  },
}
</script>
<style scoped>
.c-form-error {
  margin-top: 0.65rem;
  color: red;
}
</style>
