import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobile: '110',
  },
  mutations: {
    changeMobile(state, { mobile }) {
      state.mobile = mobile;
    },
  },
  actions: {
    loadMobile({ commit }, name: string) {
      setTimeout(() => {
        commit('changeMobile', { mobile: `${name} 的 mobile` });
      }, 1000);
    },
  },
});

export interface IState {
  mobile: string
}
