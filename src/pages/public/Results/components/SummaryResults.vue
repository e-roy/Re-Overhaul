<template>
  <div>
    <div class="text-gray-700 font-semibold my-3">Results</div>
    <div class="border border-main rounded-xl p-6">
      <div class="flex">
        <div class="w-full p-2">
          <div class="text-gray-700 font-semibold"></div>
          <div
            v-if="results.length < 1"
            class="flex pl-20 text-gray-500 text-center justify-center font-medium text-xl mt-4"
          >
            Loading... <span class="spinner" />
          </div>
          <div v-for="result in results" :key="result.id">
            <div
              class="my-4 mx-1 p-2 border-2 border-sub rounded text-gray-700"
            >
              {{ result }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="mt-12 text-gray-900">{{ results }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    totalResults: 0,
    showPerPage: 0,
    results: [],
  }),
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.spinner {
  display: block;
  margin: auto;
  height: 1.5em;
  width: 1.5em;
  border: 6px solid rgba(17, 62, 93, 0.2);
  border-top-color: rgba(17, 62, 93, 0.8);
  border-radius: 50%;
  animation: rotation 0.8s infinite linear;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
