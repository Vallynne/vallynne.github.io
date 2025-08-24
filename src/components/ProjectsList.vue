<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects">
          <div
            :key="project.id"
              @click="showDetails(project)"
              class="project-item"
              :class="{ 'wide': project.isWide, 'high': project.isHigh }">
            <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
            </div>
            <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
                <div class="title-text">
                  {{ project.name }}
                </div>
              </div>
          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0,0);
    },
  },
});
</script>

<style scoped>

.project-item {
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 6px;       /* optional: rounded corners */
}

.project-item-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 215px;            /* fixed height to match your 460x215 icons */
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

@media only screen and (min-width: 920px){
  .projects-list {
  max-width: 1000px; 
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