<template>
  <div class="mb-4">Tabs</div>
  <div class="h-3/4 bg-main rounded-lg p-4 text-gray-100">
    <div v-if="codeResponse.length === 0">
      <Loading />
    </div>
    <div v-if="codeResponse.length > 0">
      <div v-for="code in codeResponse" :key="code.id">
        {{ code }}
      </div>
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
    ...mapGetters(["codeResponse"]),
  },
  watch: {},
};
</script>

<style scoped></style>
