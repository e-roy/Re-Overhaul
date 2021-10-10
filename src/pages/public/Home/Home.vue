<template>
  <div class="m-4 sm:px-8 md:px-12 lg:px-24">
    <Logo />
    <UserInput />
    <div class="my-4">
      <UserLanguage />
    </div>
    <UserExplain />
    <div className="flex my-2 mt-4">
      <button
        @click="goToResults"
        className="py-1 px-4 flex text-gray-800 font-semibold hover:bg-main-light rounded-xl"
      >
        Process Code
        <img src="../images/logo-sm.png" alt="logo" class="w-6 mx-2" />
      </button>
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import UserInput from "./components/UserInput";
import UserExplain from "./components/UserExplain";
import UserLanguage from "@/components/UserLanguage";
// import {getTranslation} from "@/lib/translation";
import {getExplanation} from "@/lib/explanation";


export default {
  data: () => ({}),
  components: { Logo, UserInput, UserLanguage, UserExplain },
  created() {getExplanation()},
  mounted() {},
  methods: {
    testGPT() {
      // getGPTdata();
    },
    goToResults() {
      // getGPTdata();
      this.$router.push({ name: "Results" });
    },
  },
  watch: {},
};
</script>

<style scoped></style>
