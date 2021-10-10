import { createStore } from "vuex";

export const store = createStore({
  modules: {},
  state() {
    return {
      userCode: "",
      codeResponse: [],
      userQuestion: "",
      userTranscript: "",
      returnData: [],
      positiveData: [],
      negativeData: [],
    };
  },

  getters: {
    userCode(state) {
      return state.userCode;
    },
    codeResponse(state) {
      return state.codeResponse;
    },
  },

  actions: {
    setUserCode({ commit }, payload) {
      commit("SET_USER_CODE", payload);
    },
    setCodeResponse({ commit }, payload) {
      commit("SET_CODE_RESPONSE", payload);
    },
  },

  mutations: {
    SET_USER_CODE: (state, payload) => {
      state.userCode = payload;
    },
    SET_CODE_RESPONSE: (state, payload) => {
      state.codeResponse = payload;
    },
  },
});
