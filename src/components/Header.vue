<template>
  <header class="header">
    <div class="title-bar">
      <div class="site-title">Ilya Rudnev – Technical Game Designer</div>
      <div class="lang-switch">
        <button :class="{ active: lang==='en' }" @click="setLang('en')">EN</button>
        <span class="sep">|</span>
        <button :class="{ active: lang==='ja' }" @click="setLang('ja')">JP</button>
      </div>
    </div>

    <nav class="nav-bar">
      <div class="nav-links">
        <router-link to="/game-projects">{{ t('nav.games') }}</router-link>
        <router-link to="/about">{{ t('nav.about') }}</router-link>
        <router-link to="/contact">{{ t('nav.contact') }}</router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { i18n, t } from "@/i18n";

export default Vue.extend({
  name: "Header",
  computed: {
    lang() { return i18n.lang; }
  },
  methods: {
    setLang(l: 'en'|'ja') { i18n.setLang(l); },
    t
  }
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

/* full-bleed dark header */
.header {
  width: 100vw;               /* fill entire viewport width */
  background: #1e1e1e;
  color: #fff;
}

/* constrain content inside */
.title-bar,
.nav-bar {
  max-width: 1200px;
  margin: 0 auto;             /* center content inside the strip */
  padding: 12px 20px;
}

/* title row */
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-title {
  font-size: 1.1em;
  font-weight: bold;
  white-space: nowrap;
  color: #fff;
}

.lang-switch { display: inline-flex; align-items: center; }
.lang-switch .sep { margin: 0 6px; opacity: .6; color: #fff; }
.lang-switch button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  font: inherit;
  text-transform: uppercase;
  opacity: .7;
  color: #fff;
}
.lang-switch button.active { opacity: 1; border-bottom: 2px solid #fff; }

/* nav row */
.nav-bar { display: flex; justify-content: flex-start; }
.nav-links a {
  text-transform: uppercase;
  margin: 0 15px 0 0;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
  color: #fff;
}
.router-link-exact-active {
  border: 0 solid #fff;
  border-bottom-width: 2px;
}

/* mobile */
@media (max-width: 620px) {
  .title-bar { flex-direction: column; align-items: flex-start; gap: 4px; }
  .site-title { font-size: 1em; }
}
</style>
