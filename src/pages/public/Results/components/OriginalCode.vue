<template>
  <div class="flex justify-between mb-2">
    <div class="">Original Code</div>
    <button
      @click="goToHome"
      class="mr-16 py-1 px-4 flex text-gray-800 font-semibold hover:bg-main-light rounded-xl"
    >
      Reset
      <img src="../../images/logo-sm.png" alt="logo" class="w-6 ml-4" />
    </button>
  </div>
  <div class="h-3/4 bg-main rounded-lg p-4 text-gray-100">
    <div>
      <textarea
        v-model="userCode"
        class="w-full h-full resize-none outline-none p-2 bg-main placeholder-gray-300"
        rows="16"
        :placeholder="userCode"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({}),
  components: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["setUserCode", "setCodeResponse", "setCodeResponseParsed"]),
    goToHome() {
      this.setUserCode("");
      this.setCodeResponse([]);
      this.setCodeResponseParsed([]);
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    ...mapGetters(["userCode"]),
  },
  watch: {},
};
</script>

<style scoped></style>
