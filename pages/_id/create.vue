<template>
  <c-grid w="100%" h="inherit" template-columns="repeat(8, 1fr)" gap="1">
    <c-grid-item col-span="4" h="inherit"
      ><c-flex align="center" pt="2rem" justify="center">
        <c-box
          w="90%"
          p="1rem"
          border-width="1px"
          rounded="lg"
          overflow="hidden"
          align-items="center"
          shadow="sm"
        >
          <c-heading as="h2" size="xl"> {{ presentation.title }} </c-heading>

          <c-tabs variant="enclosed-colored" is-fitted>
            <c-tab-list>
              <c-tab>Default</c-tab>
              <c-tab>code</c-tab>
              <c-tab>Three</c-tab>
            </c-tab-list>

            <c-tab-panels>
              <c-tab-panel>
                <form-DefaultForm
                  @updateData="updateData"
                  @updateSlideID="updateSlideID"
                />
              </c-tab-panel>
              <c-tab-panel>
                <form-CodeForm
                  @updateData="updateData"
                  @updateSlideID="updateSlideID"
                />
              </c-tab-panel>
              <c-tab-panel>
                <p>three!</p>
              </c-tab-panel>
            </c-tab-panels>
          </c-tabs>

          <c-button
            m="2rem"
            style="float: right"
            variant-color="blue"
            variant="solid"
            @click="create"
          >
            Submit
          </c-button>
        </c-box>
      </c-flex></c-grid-item
    >
    <c-grid-item col-span="4" h="inherit">
      <c-flex align="center" pt="2rem" justify="center">
        <c-box
          w="90%"
          border-width="1px"
          rounded="lg"
          overflow="hidden"
          align-items="center"
          shadow="sm"
        >
          <SlideLiveView :slides="form" />
        </c-box>
      </c-flex>
    </c-grid-item>
  </c-grid>
</template>

<script>
import {
  CTabs,
  CTabList,
  CTabPanels,
  CTab,
  CButton,
  CHeading,
  CBox,
} from '@chakra-ui/vue'
import commonform from '~/mixins/commonform.js'
export default {
  name: 'CreatePresentations',
  components: {
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CBox,
    CHeading,
    CButton,
  },
  mixins: [commonform],
  async asyncData({ store, params }) {
    await store.dispatch('getOne', params.id)
  },
  methods: {
    updateData(value) {
      this.form = value
    },
    updateSlideID(value) {
      this.slideID = value
    },
  },
}
</script>
