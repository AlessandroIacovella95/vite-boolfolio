<script>
import NavbarUi from "./components/ui/NavbarUi.vue";
export default {
  data() {
    return {};
  },

  components: { NavbarUi },
};
</script>

<template>
  <NavbarUi />
  <div class="container my-4">
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>
