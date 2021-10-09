<template>
  <div>
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    isRouterLoaded: function() {
      if (this.$route.name !== null) return true;
      return false;
    },
    currentLayout: function() {
      const layout = this.$route.meta.layout || "default";
      return layout + "Layout";
    },
  },
};
</script>

<style scoped>
/**
 * Transition animation between pages
 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
