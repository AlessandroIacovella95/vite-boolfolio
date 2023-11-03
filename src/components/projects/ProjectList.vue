<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <div>
    <h2 class="mb-4">Lista Progetti:</h2>
    <div class="row row-cols-3 g-3">
      <div class="col" v-for="project in projects">
        <div class="card h-100">
          <div class="card-body">
            <h4>{{ project.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
