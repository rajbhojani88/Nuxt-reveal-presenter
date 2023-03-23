<template>
  <c-box p="1rem" align-items="center">
    <validation-observer v-slot="{ handleSubmit, invalid }" ref="form">
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
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="Code"
        vid="code"
      >
        <c-form-control mt="4" is-required>
          <c-form-label for="code">Code</c-form-label>
          <c-textarea
            id="code"
            v-model="form.code"
            placeholder="code"
            :is-invalid="errors[0]"
          />
          <c-form-error v-if="errors[0]" class="c-form-error">{{
            errors[0]
          }}</c-form-error>
        </c-form-control>
      </validation-provider>

      <!-- <c-form-control mt="4" is-required>
        <c-form-label for="code">code</c-form-label>
        <c-textarea id="code" v-model="form.code" placeholder="code" />
      </c-form-control> -->
      <c-form-control mt="4" is-required>
        <c-form-label for="content">content</c-form-label>
        <c-input id="content" v-model="form.content" placeholder="content" />
      </c-form-control>
      <c-form-control mt="4" is-required>
        <c-form-label for="link">Link</c-form-label>
        <c-input id="link" v-model="form.link" placeholder="link" />
      </c-form-control>
      <c-form-control mt="4" is-required>
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
            <c-form-label for="title">Vertical Parent</c-form-label>
            <c-select
              id="slideID"
              v-model="slideID"
              placeholder="Select Parent"
              :is-invalid="errors[0]"
            >
              <c-option
                v-for="slide in parentSlides"
                :key="slide.id"
                :value="slide.id"
              >
                {{ slide.title }}
              </c-option>
            </c-select>
            <c-form-error v-if="errors[0]" class="c-form-error">{{
              errors[0]
            }}</c-form-error>
          </validation-provider>
        </c-form-control>
      </c-form-control>
      <c-form-control>
        <c-button
          m="2rem"
          style="float: right"
          variant-color="blue"
          variant="solid"
          :is-loading="loading"
          :is-disabled="invalid"
          @click="handleSubmit(create('code'))"
        >
          Submit
        </c-button>
      </c-form-control>
    </validation-observer>
  </c-box>
</template>

<script>
import { CBox, CTextarea, CFormControl, CFormLabel } from '@chakra-ui/vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import commonform from '~/mixins/commonform.js'
export default {
  name: 'CodeForm',
  components: {
    CBox,
    CFormControl,
    CFormLabel,
    CTextarea,
    ValidationObserver,
    ValidationProvider,
  },
  mixins: [commonform],
}
</script>
<style scoped>
.c-form-error {
  color: red;
}
</style>
