<template>
  <div @click="expandLine" class="flex cursor-pointer">
    <textarea
      rows="1"
      class="w-full h-full resize-none outline-none bg-main placeholder-gray-200 cursor-pointer"
      :placeholder="line"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="mt-1"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
  <div v-if="expand">
    <textarea
      rows="3"
      class="w-full h-full resize-none outline-none bg-main placeholder-gray-50 font-semibold"
      :placeholder="explain"
    />
  </div>
</template>

<script>
export default {
  props: ["line", "explain"],
  data: () => ({
    expand: "",
  }),
  components: {},
  created() {},
  mounted() {},
  methods: {
    expandLine() {
      this.expand = !this.expand;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
