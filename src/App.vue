<script>
import ProjectList from "./components/projects/ProjectList.vue";

export default {
  data() {
    return {};
  },

  components: { ProjectList },
};
</script>

<template>
  <div class="container my-4">
    <h1 class="mb-4">Boolfolio</h1>
    <router-view></router-view>
    <!-- <ProjectList /> -->
  </div>
</template>

<style lang="scss"></style>
