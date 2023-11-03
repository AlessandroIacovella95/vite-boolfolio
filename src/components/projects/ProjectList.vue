<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {};
  },

  components: { ProjectCard },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <h2 class="mb-4">Lista Progetti:</h2>
  <div class="row row-cols-3 g-3">
    <ProjectCard v-for="project in projects" :project="project" />
  </div>
</template>

<style lang="scss" scoped></style>
