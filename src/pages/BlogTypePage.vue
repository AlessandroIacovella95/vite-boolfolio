<script>
import { store } from "../data/store";
import axios from "axios";
import ProjectTypeList from "../components/projects/ProjectTypeList.vue";
export default {
  data() {
    return {
      type: null,
    };
  },
  components: { ProjectTypeList },

  created() {
    axios
      .get(store.api.baseUrl + "types/" + this.$route.params.type_id)
      .then((response) => {
        this.type = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <h2 class="my-5">
      Progetti
      <span
        v-if="type"
        class="badge"
        :style="{
          backgroundColor: type.color,
        }"
        >{{ type.label }}</span
      >
    </h2>
    <ProjectTypeList :type_id="type.id" v-if="type" />
  </div>
</template>

<style lang="scss" scoped></style>
