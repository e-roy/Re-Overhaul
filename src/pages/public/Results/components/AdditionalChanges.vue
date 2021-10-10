<template>
  <div class="flex border-2 border-main-light rounded-lg my-2 w-full ">
    <textarea
      v-model="userChanges"
      class="w-11/12 h-full rounded-lg placeholder-gray-600 resize-none outline-none p-2"
      rows="2"
      placeholder="Write additional changes you would like"
    />
    <div class=" mt-7">
      <button @click="submitChange">
        <img src="../../images/logo-sm.png" alt="logo" class="w-8 mx-2" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    userChanges: "",
  }),
  components: {},
  created() {},
  mounted() {},
  methods: {
    submitChange() {
      console.log("make change");
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
