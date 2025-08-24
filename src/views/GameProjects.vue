<template>
  <section class="projects">
    <h1>{{ t('projects.title') }}</h1>

    <div style="margin-bottom: 30px;">
      {{ t('projects.blurb') }}
    </div>

    <ProjectsList :projects="projects" />

    <div style="margin-top: 20px;">
      {{ t('projects.morePrefix') }}
      <a target="_blank" href="https://www.linkedin.com/in/ilya-rudnev/">
        {{ t('projects.moreLinkText') }}
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";
import { t } from "@/i18n";

export default Vue.extend({
  name: "GameProjects",
  components: { ProjectsList },
  data() {
    return { projects: gameProjectsData };
  },
  methods: { t }
});
</script>

<style scoped>
.projects {
  min-height: 595px;   
  margin: 24px 0 16px;
  box-sizing: border-box;
}
</style>