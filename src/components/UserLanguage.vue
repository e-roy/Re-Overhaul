<template>
  <div class="py-2 font-bold text-gray-700">
    Convert to another language
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
export default {
  data: () => ({
    selectLangage: "",
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
    changeLanguage() {
      // this.$store.commit("setLanguage", this.selectLangage);
    },
  },

  components: {},
  created() {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
