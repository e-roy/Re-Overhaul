<template>
  <main
    class="h-screen bg-cover bg-top sm:bg-top"
    style="background-image: url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75');"
  >
    <div
      class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48"
    >
      <p
        class="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide"
      >
        404 error
      </p>
      <h1
        class="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl"
      >
        Uh oh! I think you’re lost.
      </h1>
      <p class="mt-2 text-lg font-medium text-black text-opacity-50">
        It looks like the page you’re looking for doesn't exist.
      </p>
      <div class="mt-6">
        <button
          @click="home()"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
        >
          Go back home
        </button>
      </div>
      <!-- <h1 class="text-9xl font-bold text-purple-400">
            {{ error.statusCode }}
          </h1>
          <h1 class="text-6xl font-medium py-8">{{ error.message }}</h1> -->
    </div>
  </main>
</template>

<script>
export default {
  //   props: {
  //     error: {
  //       type: Object,
  //       required: true,
  //     },
  //   },
  data: () => ({}),
  components: {},
  created() {},
  mounted() {},
  methods: {
    home() {
      this.$router.push("/");
    },
  },
  computed: {},
  watch: {},
};
</script>

<style>
/* html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
