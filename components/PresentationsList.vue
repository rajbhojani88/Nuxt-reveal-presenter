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
      ><th slot="thead-tr">ACTIONS</th>
      <template slot="tbody-tr" scope="props">
        <td>
          <c-icon-button
            variant-color="vue"
            aria-label="delete"
            size="lg"
            icon="arrow-forward"
            @click="(e) => showDetail(props.row, e)"
          />
          <c-icon-button
            variant-color="vue"
            aria-label="Call Jonathan"
            size="lg"
            icon="Edit"
            @click="(e) => editItem(props.row, e)"
          />
          <c-icon-button
            variant-color="vue"
            aria-label="Call Jonathan"
            size="lg"
            icon="Delete"
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
      this.$router.push("/"+data.id)
    },
    editItem(data, event) {
      // eslint-disable-next-line no-console
      console.log(event, data)
      window.alert('check out the console to see the logs')
    },
    deleteItem(data, event) {
      // eslint-disable-next-line no-console
      console.log(event, data)
      window.alert('check out the console to see the logs')
    },
  },
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/icon?family=Material+Icons);
</style>
