<template>
  <div class="m-4 sm:px-8 md:px-12 lg:px-24">
    <Logo />
    <UserInput />
    <div className="ml-12 flex my-2">
      <button
        @click="goToResults"
        className="py-1 px-4 bg-main text-white rounded-xl"
      >
        Process Code
      </button>
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import UserInput from "./components/UserInput";

export default {
  data: () => ({}),
  components: { Logo, UserInput },
  created() {},
  mounted() {},
  methods: {
    goToResults() {
      this.$router.push({ name: "Results" });
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
