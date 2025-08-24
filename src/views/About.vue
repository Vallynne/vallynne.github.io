<template>
  <div class="about">
    <div class="about-header">
      <div class="header-text">
        <h1>{{ t('about.title') }}</h1>
        <p class="intro">{{ t('about.p1') }}</p>
        <p>
          <span v-if="lang === 'en'">
            I created
            <router-link :to="{ path: '/game-projects', hash: '#project-shores' }">
              Shores Unknown
            </router-link>,
            an Unreal-powered tactical RPG built with a small distributed team, and contributed to a number of
            projects ranging from indie to AAA, including
            <router-link :to="{ path: '/game-projects', hash: '#project-flintlock' }">
              Flintlock: The Siege of Dawn
            </router-link>.
          </span>

          <span v-else>
            小規模チームでタクティカルRPG『
            <router-link :to="{ path: '/game-projects', hash: '#project-shores' }">Shores Unknown</router-link>
            』を開発し、その後インディーからAAAまで幅広いプロジェクトに携わり、直近では『
            <router-link :to="{ path: '/game-projects', hash: '#project-flintlock' }">Flintlock: The Siege of Dawn</router-link>
            』に参加しました。
          </span>
        </p>
        <p>{{ t('about.p3') }}</p>
      </div>
      <div class="photo">
        <img src="/img/about_photo.jpg" alt="My photo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { t, i18n } from "@/i18n";

export default Vue.extend({
  name: "About",
  methods: {
    t,
  },
  computed: {
    lang(): "en" | "ja" {
      return i18n.lang as "en" | "ja";
    },
  },
});
</script>

<style scoped>
.about-header {
  display: flex;
  align-items: flex-start;
  margin: 24px 0 16px;
  min-height: 600px;
  box-sizing: border-box;
}

/* text fills available space */
.header-text {
  flex: 1;
  max-width: 65%;
}

/* tighter title + intro */
.header-text h1 {
  margin: 0;
  font-size: 2rem;
  line-height: 1.2;
}

/* photo column */
.photo {
  flex-shrink: 0;
  margin-left: 10px;
}

.photo img {
  width: 240px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
}

/* ======= Responsive: stack columns ======= */
@media (max-width: 620px) {
  .about-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-text {
    max-width: 100%;
  }

  .photo {
    margin: 16px 0 0;
    align-self: center;
  }
}
</style>
