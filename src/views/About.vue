<template>
  <div class="about">
    <div class="about-header">
      <div class="header-text">
        <h1>{{ t('about.title') }}</h1>
        <p class="intro">{{ t('about.p1') }}</p>
        <p>
          <span v-if="lang === 'en'">
            I created and shipped
            <router-link :to="{ path: '/game-projects', hash: '#project-shores' }">
              Shores Unknown
            </router-link>,
            an Unreal-powered tactical RPG built with a small distributed team, and contributed to
            <router-link :to="{ path: '/game-projects', hash: '#project-flintlock' }">
              Flintlock: The Siege of Dawn
            </router-link>
            and
            <router-link :to="{ path: '/game-projects', hash: '#project-rocksmith' }">
              Rocksmith+
            </router-link>.
          </span>

          <span v-else>
            小規模チームでタクティカルRPG『
            <router-link :to="{ path: '/game-projects', hash: '#project-shores' }">Shores Unknown</router-link>
            』を開発・リリースし、その後『
            <router-link :to="{ path: '/game-projects', hash: '#project-flintlock' }">Flintlock: The Siege of
              Dawn</router-link>
            』や『
            <router-link :to="{ path: '/game-projects', hash: '#project-rocksmith' }">Rocksmith+</router-link>
            』など複数のタイトルに携わりました。
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
import { t, i18n } from "@/i18n"; // <-- import t directly

export default Vue.extend({
  name: "About",
  methods: {
    t, // <-- expose t() to the template
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
  /* adjust 60px to your footer’s height */
  box-sizing: border-box;
}

/* text fills available space */
.header-text {
  flex: 1;
  max-width: 65%;
  /* keep text column wide */
}

/* tighter title + intro */
.header-text h1 {
  margin: 0;
  /* kill browser defaults */
  font-size: 2rem;
  line-height: 1.2;
}

/* photo gets narrower column on the right */
.photo {
  flex-shrink: 0;
  margin-left: 10px;
  /* push photo all the way to the right */
}

.photo img {
  width: 240px;
  /* adjust size */
  height: auto;
  border-radius: 8px;
  /* 50% if circle */
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>