const state = {
  Search: ""
};

const mutations = {
  SearchTerm: (state, searchWrd) => (state.Search = searchWrd)
};

const actions = {
  searchTerm: ({ commit }, search) => {
    commit("SearchTerm", search);
    // eslint-disable-next-line
    console.log(search);
  }
};

const getters = {
  searchWord: state => {
    state.Search;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
