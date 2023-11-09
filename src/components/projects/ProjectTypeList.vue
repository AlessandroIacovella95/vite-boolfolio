<script>
import { store } from "../../data/store";
import axios from "axios";
import ProjectCard from "../projects/ProjectCard.vue";
export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: null,
      },
    };
  },
  props: {
    type_id: Number,
  },

  components: { ProjectCard },

  methods: {
    projectForTYpe(
      uri = store.api.baseUrl + "projects-by-type/" + this.type_id
    ) {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
      });
    },
  },

  created() {
    this.projectForTYpe();
  },
};
</script>

<template>
  <div class="row row-cols-3 g-3">
    <ProjectCard
      class="mb-4"
      v-for="project in projects"
      :project="project"
      :isDetail="false"
    />
  </div>
  <nav
    class="mt-5 d-flex justify-content-end align-items-start"
    aria-label="Page navigation example"
  >
    <ul class="pagination">
      <li
        v-for="link in pagination.links"
        @click="projectForTYpe(link.url)"
        class="page-item"
      >
        <a class="page-link" href="#" v-html="link.label"></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
