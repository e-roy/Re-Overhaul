<template>
  <div class="py-2 font-bold text-gray-700">
    {{ textType }}
  </div>
  <div>
    <select
      v-model="selectLangage"
      @change="changeLanguage"
      class="border border-main bg-main-light rounded-xl p-2 w-56"
    >
      <option
        v-for="language in languages"
        :value="language.code"
        :key="language.code"
      >
        {{ language.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["type"],
  data: () => ({
    selectLangage: "",
    typeText: "",
    languages: [
      {
        code: "c",
        name: "C#",
      },
      {
        code: "go",
        name: "Go",
      },
      {
        code: "java",
        name: "Java",
      },
      {
        code: "javascript",
        name: "Javascript",
      },
      {
        code: "python",
        name: "Python",
      },
      {
        code: "ruby",
        name: "Ruby",
      },
      {
        code: "rust",
        name: "Rust",
      },
      {
        code: "typescript",
        name: "Typescript",
      },
    ],
  }),
  methods: {
    ...mapActions(["setConvertLang", "setOriginalLang"]),
    changeLanguage() {
      if (this.type === "original") this.setOriginalLang(this.selectLangage);
      if (this.type === "convert") this.setConvertLang(this.selectLangage);
    },
  },

  components: {},
  created() {
    console.log(this.type);
    if (this.type === "original") this.textType = "Input Language";
    if (this.type === "convert") this.textType = "Convert to Another Language";
  },
  mounted() {},
  computed: {
    ...mapGetters(["convertLang"]),
  },
  watch: {},
};
</script>

<style scoped></style>
