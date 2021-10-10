<template>
  <div class="">
    <div class="flex">
      <!-- <div
        class="border-2 border-main py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700 font-semibold"
      >
        2
      </div> -->
      <div class="py-2 font-bold text-gray-700">
        Paste in your code
      </div>
    </div>
    <div class="my-2">
      <div
        class="border border-main rounded-lg bg-main text-white my-2 w-full p-2"
        :class="userInputObject"
      >
        <textarea
          v-model="setCode"
          class="w-full h-full rounded-lg bg-main placeholder-gray-300 resize-none outline-none p-2"
          rows="10"
          placeholder="Paste Your Code Here"
          :class="userInputObject"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    setCode: "",
  }),
  components: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["setUserCode"]),
  },
  computed: {
    ...mapGetters(["userCode"]),
    userInputObject() {
      if (this.setCode) {
        return "bg-sub text-gray-900";
      } else {
        return "";
      }
    },
  },
  watch: {
    setCode() {
      this.setUserCode(this.setCode);
    },
  },
};
</script>

<style scoped></style>
