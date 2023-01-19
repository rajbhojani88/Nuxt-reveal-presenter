<template>
  <c-box
    max-w="max-content"
    border-width="1px"
    rounded="lg"
    overflow="hidden"
    align-items="center"
    shadow="sm"
  >
    <datatable
      title="Presentations List"
      :columns="tableColumns1"
      :rows="tableRows5"
      :per-page="[3, 5, 10]"
      ><th slot="thead-tr">ACTIONS</th>
      <template slot="tbody-tr" scope="props">
        <td>
          <c-icon-button
            v-if="props.row.slide != null"
            variant-color="vue"
            aria-label="show"
            size="lg"
            icon="eye"
            @click="(e) => showDetail(props.row, e)"
          />
          <c-icon-button
            variant-color="vue"
            aria-label="add"
            size="lg"
            icon="add"
            @click="(e) => addItem(props.row, e)"
          />
          <c-icon-button
            v-if="props.row.slide != null"
            variant-color="vue"
            aria-label="edit"
            size="lg"
            icon="pencil"
            @click="(e) => editItem(props.row, e)"
          />
          <c-icon-button
            variant-color="vue"
            aria-label="delete"
            size="lg"
            icon="trash"
            @click="(e) => deleteItem(props.row, e)"
          />
        </td>
      </template>
    </datatable>
  </c-box>
</template>
<script>
import DataTable from 'vue-materialize-datatable'
import { CIconButton, CBox } from '@chakra-ui/vue'

export default {
  components: {
    datatable: DataTable,
    CIconButton,
    CBox,
  },
  data() {
    return {
      tableColumns1: [
        {
          label: 'ID',
          field: 'id',
          numeric: false,
          html: false,
        },
        {
          label: 'TITLE',
          field: 'title',
          numeric: false,
          html: false,
        },
      ],
    }
  },
  computed: {
    tableRows5() {
      return this.$store.getters.getPresentations
    },
  },
  methods: {
    showDetail(data, event) {
      // eslint-disable-next-line no-console
      console.log(event, data)
      this.$router.push('/' + data.id)
    },
    addItem(data, event) {
      // eslint-disable-next-line no-console
      console.log(event, data)
      this.$router.push('/' + data.id + '/create')
    },
    editItem(data, event) {
      // eslint-disable-next-line no-console
      console.log(event, data)
      this.$router.push('/' + data.id + '/edit')
    },
    async deleteItem(data, event) {
      // eslint-disable-next-line no-console
      console.log(event, data)
      await this.$store.dispatch('deletePresentation', data.id).then(() => {
        this.$toastPlgin({
          title: 'Success',
          message: 'Presentation deleted successfully',
          type: 'success',
          position: 'top-right',
        })
      })
    },
  },
}
</script>
