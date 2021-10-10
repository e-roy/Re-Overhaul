import { createStore } from "vuex";

export const store = createStore({
  modules: {},
  state() {
    return {
      userCode: "",
      codeResponse: [],
      codeResponseParsed: [],
      originalLang: "",
      convertLang: "",
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
    originalLang(state) {
      return state.originalLang;
    },
    convertLang(state) {
      return state.convertLang;
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
    setOriginalLang({ commit }, payload) {
      commit("SET_ORIGINAL_LANG", payload);
    },
    setConvertLang({ commit }, payload) {
      commit("SET_CONVERT_LANG", payload);
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
    SET_ORIGINAL_LANG: (state, payload) => {
      state.originalLang = payload;
    },
    SET_CONVERT_LANG: (state, payload) => {
      state.convertLang = payload;
    },
  },
});
