<template>
  <div class="">
    <div class="flex">
      <!-- <div
        class="border-2 border-main py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700 font-semibold"
      >
        2
      </div> -->
      <div class="p-2 mx-2 font-bold text-gray-700">
        Paste in your Python code
      </div>
    </div>
    <div class="ml-12 my-2">
      <div
        class="border border-main rounded-lg bg-main text-white my-2 w-full p-2"
        :class="userInputObject"
      >
        <textarea
          v-model="setTranscript"
          class="w-full h-full rounded-lg bg-main placeholder-gray-300 resize-none outline-none p-2"
          rows="10"
          placeholder="Paste Your Python Code Here"
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
    setTranscript: "",
  }),
  components: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["setUserTranscript"]),
  },
  computed: {
    ...mapGetters(["userTranscript"]),
    userInputObject() {
      if (this.setTranscript) {
        return "bg-sub text-gray-900";
      } else {
        return "";
      }
    },
  },
  watch: {
    setTranscript() {
      this.setUserTranscript(this.setTranscript);
    },
  },
};
</script>

<style scoped></style>
