<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

import { store } from "../../data/store";

export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: null,
      },
    };
  },

  components: { ProjectCard },

  methods: {
    fetchProjects(uri = store.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h2 class="mb-4">Lista Progetti:</h2>
  <div class="row row-cols-3 g-4">
    <ProjectCard
      v-for="project in projects"
      :isDetail="false"
      :project="project"
    />
  </div>
  <nav
    class="mt-5 d-flex justify-content-end align-items-start"
    aria-label="Page navigation example"
  >
    <ul class="pagination">
      <li
        v-for="link in pagination.links"
        @click="fetchProjects(link.url)"
        class="page-item"
      >
        <a class="page-link" href="#" v-html="link.label"></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
