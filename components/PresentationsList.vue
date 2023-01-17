<template>
  <c-box
    border="1px"
    max-width="700px"
    border-width="1px"
    rounded="lg"
    overflow="hidden"
    align-items="center"
    shadow="sm"
    p="6"
    m="6"
    w="100%"
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
            icon="eye"
            @click="(e) => showDetail(props.row, e)"
          />
          <c-icon-button
            variant-color="vue"
            aria-label="delete"
            size="lg"
            icon="add"
            @click="(e) => addItem(props.row, e)"
          />
          <c-icon-button
            variant-color="vue"
            aria-label="delete"
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
      window.alert('check out the console to see the logs')
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

.c-icon-button {
  margin: 0 5px;
}

.c-icon-button:hover {
  background-color: #e8e8e8;
}

.c-icon-button:active {
  background-color: #d8d8d8;
}

.c-icon-button:focus {
  background-color: #e8e8e8;
}
</style>
