const state = {
  presentations: [],
};

const getters = {
  getPresentations(state) {
    return state.presentations;
  },
};

const mutations = {
  setPresentations(state, data) {
    if (data) {
      state.presentations = data;
    } else {
      state.presentations = [];
    }
  },
};

const actions = {
  async getAll({ commit }) {
    await this.$axios
      .$get("https://testapi.io/api/gahole9342/resource/slidedata")
      .then(({ data }) => {
        commit("setPresentations", data);
      })
      .catch(({ response }) => {
        // eslint-disable-next-line no-console
        console.log("response errorr",response);
      });
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
