<template>
  <div className="flex place-content-center -mt-8">
    <img
      src="../../images/logo.png"
      alt="logo"
      class="w-48 cursor-pointer"
      @click="returnHome"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({}),
  components: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions([
      "setUserQuestion",
      "setUserTranscript",
      "setPositiveData",
      "setNegativeData",
    ]),
    returnHome() {
      this.$router.push({ name: "Home" });
      this.setUserQuestion("");
      this.setUserTranscript("");
      this.setPositiveData([]);
      this.setNegativeData([]);
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
