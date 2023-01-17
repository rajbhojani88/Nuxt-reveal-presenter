const state = {
  presentations: [],
  presentation: [],
}

const getters = {
  getPresentations(state) {
    return state.presentations
  },
  getPresentation(state) {
    return state.presentation
  },
}

const mutations = {
  setPresentations(state, data) {
    if (data) {
      state.presentations = data
    } else {
      state.presentations = []
    }
  },
  setPresentation(state, data) {
    if (data) {
      state.presentation = data
    } else {
      state.presentation = []
    }
  },
}

const actions = {
  async getAll({ commit }) {
    await this.$axios
      .$get('https://testapi.io/api/gahole9342/resource/slidedata')
      .then(({ data }) => {
        commit('setPresentations', data)
      })
      .catch(({ response }) => {
        // eslint-disable-next-line no-console
        console.log('response errorr', response)
      })
  },
  async getOne({ commit }, id) {
    await this.$axios
      .$get('https://testapi.io/api/gahole9342/resource/slidedata/' + id)
      .then((data) => {
        commit('setPresentation', data)
      })
      .catch(({ response }) => {
        // eslint-disable-next-line no-console
        console.log('response errorr', response)
      })
  },
  async crateNewPresentation({ commit }, data) {
    await this.$axios({
      method: 'Post',
      url: 'https://testapi.io/api/gahole9342/resource/slidedata',
      params: data,
    })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response)
      })
      .catch(({ response }) => {
        // eslint-disable-next-line no-console
        console.log('response errorr', response)
      })
  },
  async updateSlide({ commit }, data) {
    await this.$axios({
      method: 'put',
      url: 'https://testapi.io/api/gahole9342/resource/slidedata/' + data.id,
      params: data,
    })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response)
      })
      .catch(({ response }) => {
        // eslint-disable-next-line no-console
        console.log('response errorr', response)
      })
  },
  async deletePresentation({ commit }, id) {
    await this.$axios({
      method: 'delete',
      url: 'https://testapi.io/api/gahole9342/resource/slidedata/' + id
    })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response)
      })
      .catch(({ response }) => {
        // eslint-disable-next-line no-console
        console.log('response errorr', response)
      })
  },
}
export default {
  strict: false,
  state,
  getters,
  actions,
  mutations,
}
