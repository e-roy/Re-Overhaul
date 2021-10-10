<template>
  <div class="mb-4">
    .
    <!-- Tabs -->
  </div>
  <div class="h-3/4 bg-main rounded-lg p-4 text-gray-100 overflow-y-scroll">
    <div v-if="codeResponseParsed.length === 0">
      <Loading />
    </div>
    <div class="text-white">
      <textarea
        rows="28"
        class="w-full h-full resize-none outline-none bg-main placeholder-gray-50 font-semibold"
        :placeholder="codeResponse"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/components/Loading";
export default {
  data: () => ({}),
  components: { Loading },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    ...mapGetters(["codeResponse", "codeResponseParsed"]),
  },
  watch: {},
};
</script>

<style scoped></style>
