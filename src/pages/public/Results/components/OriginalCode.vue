<template>
  <div class="flex justify-between mb-2">
    <div class="">Original Code</div>
    <button
      @click="goToHome"
      class="mr-16 py-1 px-4 flex text-gray-800 font-semibold hover:bg-main-light rounded-xl"
    >
      Reset
    </button>
  </div>
  <div class="h-3/4 bg-main rounded-lg p-4 text-gray-100">
    <Loading />
  </div>
</template>

<script>
import Loading from "@/components/Loading";

export default {
  data: () => ({}),
  components: { Loading },
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
