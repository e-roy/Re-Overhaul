<template>
  <div class="mx-4 my-8 sm:px-8 md:px-12 lg:px-24">
    <div class="">
      <div class="sm:flex">
        <div class="w-full sm:w-1/2 mr-2 text-gray-700 font-semibold">
          <OriginalCode />
          <div class="my-4 flex">
            <div>
              <UserLanguage type="convert" />
            </div>
            <div v-if="!submitted">
              <div v-if="userCode && convertLang" className="flex my-auto ml-8">
                <button
                  @click="goToResults"
                  className="py-1 px-4 flex text-gray-800 font-semibold hover:bg-main-light rounded-xl"
                >
                  Process Code
                  <img
                    src="../images/logo-sm.png"
                    alt="logo"
                    class="w-6 mx-2"
                  />
                </button>
              </div>
              <div v-else className="flex my-auto ml-8">
                <button
                  className="py-1 px-4 flex text-gray-800 font-semibold hover:bg-red-300 hover:text-red-800 rounded-xl"
                >
                  Select Language
                  <img
                    src="../images/logo-sm.png"
                    alt="logo"
                    class="w-6 mx-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 ml-2 text-gray-700 font-semibold">
          <ResultsCode />
          <!-- <div class="mx-4 my-6">
            <AdditionalChanges />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OriginalCode from "./components/OriginalCode.vue";
import ResultsCode from "./components/ResultsCode.vue";
import UserLanguage from "@/components/UserLanguage";
// import AdditionalChanges from "./components/AdditionalChanges";
import { getTranslation } from "@/lib/translation";

export default {
  data: () => ({
    submitted: false,
  }),
  // components: { OriginalCode, ResultsCode, UserLanguage, AdditionalChanges },
  components: { OriginalCode, ResultsCode, UserLanguage },

  created() {},
  mounted() {},
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    goToResults() {
      console.log("go to results");
      this.submitted = true;
      getTranslation();
    },
  },
  computed: {
    ...mapGetters(["userCode", "convertLang"]),
  },
  watch: {},
};
</script>

<style scoped></style>
