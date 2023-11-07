<script>
export default {
  data() {
    return {};
  },

  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between align-items-start">
        <div class="me-3">
          <span
            class="badge"
            :style="{
              backgroundColor: project.type.color,
            }"
            >{{ project.type.label }}</span
          >
        </div>

        <div>
          <span
            class="badge me-1"
            v-for="technology in project.technologies"
            :style="{
              backgroundColor: technology.color,
            }"
            >{{ technology.label }}</span
          >
        </div>
      </div>
      <div class="card-body">
        <h4>{{ project.title }}</h4>
        <p>{{ project.description }}</p>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-start">
        <span>{{ project.url }}</span>
        <router-link
          v-if="!isDetail"
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          class="btn btn-primary"
        >
          Vedi
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
