<template>
  <div
    class="flex pl-20 text-gray-100 text-center justify-center font-medium text-xl mt-4"
  >
    Loading... <span class="spinner" />
  </div>
</template>

<script>
export default {
  data: () => ({}),
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
