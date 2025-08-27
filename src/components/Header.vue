<template>
  <div class="header">
    <div class="title-bar">
      <div class="site-title">Ilya Rudnev – Technical Game Designer</div>
      <div class="lang-switch">
        <button :class="{ active: lang==='en' }" @click="setLang('en')">EN</button>
        <span class="sep">|</span>
        <button :class="{ active: lang==='ja' }" @click="setLang('ja')">JP</button>
      </div>
    </div>

    <div class="nav-bar">
      <div class="nav-links">
        <router-link to="/game-projects">{{ t('nav.games') }}</router-link>
        <router-link to="/">{{ t('nav.about') }}</router-link>
        <router-link to="/contact">{{ t('nav.contact') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { i18n, t } from "@/i18n";

export default Vue.extend({
  name: "Header",
  computed: {
    lang() {
      return i18n.lang;
    }
  },
  methods: {
    setLang(l: 'en' | 'ja') {
      i18n.setLang(l);
    },
    t
  }
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.header {
  width: 100%;
}

/* Title row with lang switch on the right */
.title-bar {
  display: flex;
  justify-content: space-between; /* title left, switch right */
  align-items: center;
  padding: 12px 20px;
}

.site-title {
  font-size: 1.1em;
  font-weight: bold;
  white-space: nowrap;
}

.lang-switch {
  display: inline-flex;
  align-items: center;
}

.lang-switch .sep {
  margin: 0 6px;
  opacity: .6;
}

.lang-switch button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  font: inherit;
  text-transform: uppercase;
  opacity: .7;
}

.lang-switch button.active {
  opacity: 1;
  border-bottom: 2px solid @textColor;
}

/* nav bar sits below */
.nav-bar {
  display: flex;
  justify-content: flex-start; /* left align nav links */
  padding: 0 20px 10px;        /* same left/right padding as title-bar */
}

.nav-links a {
  text-transform: uppercase;
  margin: 0 15px 0 0;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0 solid @textColor;
  border-bottom-width: 2px;
}

/* Mobile tweaks */
@media only screen and (max-width: 620px) {
  .title-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .site-title {
    font-size: 1em;
  }
  .nav-bar {
    justify-content: flex-start;
    padding-left: 20px; /* keeps alignment with title */
  }
}
</style>