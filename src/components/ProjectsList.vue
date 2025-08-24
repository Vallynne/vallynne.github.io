<template>
  <div>
    <div class="projects-list">
      <div
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        class="project-item"
        role="button"
        tabindex="0"
        @click="showDetails(project)"
        @keyup.enter="showDetails(project)"
        @keyup.space="showDetails(project)"
      >
        <div class="project-item-image">
          <img :src="project.iconUrl" :alt="displayName(project)" />
        </div>

        <div class="title-bar" :style="{ backgroundColor: project.accentColor + 'DD' }">
          <div class="title-text">
            {{ displayName(project) }}
          </div>
        </div>
      </div>
    </div>

    <ProjectDetailsOverlay
      :visible="showPopup"
      :title="popupTitle"
      :htmlContent="popupContent"
      :color="popupColor"
      @close="showPopup = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";
import { i18n } from "@/i18n";

type LocalizedProject = ProjectData & {
  nameEn?: string; nameJa?: string;
  htmlEn?: string; htmlJa?: string;
};

export default Vue.extend({
  name: "ProjectsList",
  components: { ProjectDetailsOverlay },
  props: { projects: Array as () => LocalizedProject[] },
  data() {
    return { showPopup: false, popupTitle: "", popupColor: "", popupContent: "" };
  },
  computed: {
    lang(): 'en'|'ja' { return i18n.lang as 'en'|'ja'; }
  },
  watch: {
    '$route.hash': {
      immediate: true,
      handler(newHash: string) {
        this.maybeOpenFromHash(newHash);
      }
    }
  },
  methods: {
    displayName(item: LocalizedProject) {
      return this.lang === 'ja' ? (item.nameJa || item.name) : (item.nameEn || item.name);
    },
    displayHtml(item: LocalizedProject) {
      return this.lang === 'ja' ? (item.htmlJa || item.htmlDescription) : (item.htmlEn || item.htmlDescription);
    },
    showDetails(item: LocalizedProject) {
      this.popupTitle = this.displayName(item);
      this.popupColor = item.accentColor;
      this.popupContent = this.displayHtml(item);
      this.showPopup = true;
      window.scrollTo(0, 0);
    },
    maybeOpenFromHash(hash: string) {
      if (!hash) return;
      const id = hash.replace('#', '');
      const item = (this.projects || []).find(p => p.id === id);
      if (!item) return;
      // Scroll to the card, then open
      this.$nextTick(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // slight delay so scroll happens first
        setTimeout(() => this.showDetails(item), 150);
      });
    }
  }
});
</script>

<style scoped>

.project-item {
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 6px;      
}

.project-item-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 215px;            
  transition: transform 0.2s;
}

.project-item-image:hover {
  transform: scale(1.05);
}

.project-item:hover {
  filter: brightness(110%);
}

.title-bar {
  background-color: #222;
  color: #fff;
  padding: 10px;
}

.title-text {
  font-size: 1.1rem;
}

@media only screen {
  .projects-list {
  max-width: 920px; 
  margin: 0 left;
  display: flex;
  flex-direction: column; 
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;                  
}

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

}

</style>