<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";
import { store } from "../data/store";
export default {
  data() {
    return {
      project: null,
    };
  },

  components: {
    ProjectCard,
  },

  created() {
    axios
      .get(store.api.baseUrl + "projects/" + this.$route.params.slug)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <ProjectCard :project="project" :isDetail="true" v-if="project" />
</template>

<style lang="scss" scoped></style>
