<template>
  <div class="mx-4 my-8 sm:px-8 md:px-12 lg:px-24">
    <div class="">
      <div class="sm:flex">
        <div class="w-full sm:w-1/2 mr-2 text-gray-700 font-semibold">
          <OriginalCode />
          <div class="my-4">
            <UserLanguage type="convert" />
          </div>
        </div>
        <div class="w-full sm:w-1/2 ml-2 text-gray-700 font-semibold">
          <ResultsCode />
          <div class="mx-4 my-6">
            <AdditionalChanges />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OriginalCode from "./components/OriginalCode.vue";
import ResultsCode from "./components/ResultsCode.vue";
import UserLanguage from "@/components/UserLanguage";
import AdditionalChanges from "./components/AdditionalChanges";

export default {
  data: () => ({}),
  components: { OriginalCode, ResultsCode, UserLanguage, AdditionalChanges },
  created() {},
  mounted() {},
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
