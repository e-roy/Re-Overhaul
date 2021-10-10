import { createStore } from "vuex";

export const store = createStore({
  modules: {},
  state() {
    return {
      userCode: "",
      codeResponse: [],
      codeResponseParsed: [],
    };
  },

  getters: {
    userCode(state) {
      return state.userCode;
    },
    codeResponse(state) {
      return state.codeResponse;
    },
    codeResponseParsed(state) {
      return state.codeResponseParsed;
    },
  },

  actions: {
    setUserCode({ commit }, payload) {
      commit("SET_USER_CODE", payload);
    },
    setCodeResponse({ commit }, payload) {
      commit("SET_CODE_RESPONSE", payload);
    },
    setCodeResponseParsed({ commit }, payload) {
      commit("SET_CODE_RESPONSE_PARSED", payload);
    },
  },

  mutations: {
    SET_USER_CODE: (state, payload) => {
      state.userCode = payload;
    },
    SET_CODE_RESPONSE: (state, payload) => {
      state.codeResponse = payload;
    },
    SET_CODE_RESPONSE_PARSED: (state, payload) => {
      state.codeResponseParsed = payload;
    },
  },
});
