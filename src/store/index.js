import { createStore } from "vuex";
// import router from "../router";
// import firebase from "@/services/_firebase";

export const store = createStore({
  modules: {},
  state() {
    return {
      userQuestion: "",
      userTranscript: "",
      returnData: [],
      positiveData: [],
      negativeData: [],
    };
  },

  getters: {
    userQuestion(state) {
      return state.userQuestion;
    },
    userTranscript(state) {
      return state.userTranscript;
    },
    returnData(state) {
      return state.returnData;
    },
    positiveData(state) {
      return state.positiveData;
    },
    negativeData(state) {
      return state.negativeData;
    },
  },

  actions: {
    setUserQuestion({ commit }, payload) {
      commit("SET_USER_QUESTION", payload);
    },
    setUserTranscript({ commit }, payload) {
      commit("SET_USER_TRANSCRIPT", payload);
    },
    setReturnData({ commit }, payload) {
      commit("SET_RETURN_DATA", payload);
    },
    setPositiveData({ commit }, payload) {
      commit("SET_POSITIVE_DATA", payload);
    },
    setNegativeData({ commit }, payload) {
      commit("SET_NEGATIVE_DATA", payload);
    },
  },

  mutations: {
    SET_USER_QUESTION: (state, payload) => {
      state.userQuestion = payload;
    },
    SET_USER_TRANSCRIPT: (state, payload) => {
      state.userTranscript = payload;
    },
    SET_RETURN_DATA: (state, payload) => {
      state.returnData = payload;
    },
    SET_POSITIVE_DATA: (state, payload) => {
      state.positiveData = payload;
    },
    SET_NEGATIVE_DATA: (state, payload) => {
      state.negativeData = payload;
    },
  },
});
