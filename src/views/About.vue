<template>
  <div class="about">
    <div class="about-header">
      <div class="header-text">
        <h1>{{ t('about.title') }}</h1>
        <p class="intro">{{ t('about.p1') }}</p>
        <p v-html="t('about.p2')"></p>
        <p>{{ t('about.p3') }}</p>
      </div>
      <div class="photo">
        <img src="/img/about_photo.jpg" alt="My photo" />
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { t } from '@/i18n'

export default Vue.extend({
  name: 'About',
  methods: { t }
})
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