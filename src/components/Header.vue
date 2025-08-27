<template>
  <div class="header">
    <div class="site-title">
      Ilya Rudnev – Technical Game Designer
    </div>

    <div class="nav-bar">
      <div class="nav-links">
        <router-link to="/game-projects">{{ t('nav.games') }}</router-link>
        <router-link to="/">{{ t('nav.about') }}</router-link>
        <router-link to="/contact">{{ t('nav.contact') }}</router-link>
      </div>

      <div class="lang-switch">
        <button :class="{ active: lang==='en' }" @click="setLang('en')">EN</button>
        <span class="sep">|</span>
        <button :class="{ active: lang==='ja' }" @click="setLang('ja')">JP</button>
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

.header {
  width: 100%;
}

.site-title {
  font-weight: normal;
  font-size: 1em;  
  text-transform: uppercase;
  padding: 8px 20px 4px 20px;  
  color: @textColor;
  text-align: left;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 12px 0px;  
  line-height: 3em;
}

.nav-links a {
  text-transform: uppercase;
  margin: 0 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0 solid @textColor;
  border-bottom-width: 2px;
}

/* language switch group */
.lang-switch {
  display: inline-flex;
  align-items: center;
}

.lang-switch .sep { margin: 0 6px; opacity: .6; }

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

@media only screen and (max-width: 620px) {
  .nav-bar { flex-direction: column; align-items: flex-start; }
  .nav-links a { margin: 0 9px; padding-bottom: 0; }
  .lang-switch { margin-top: 8px; }
}
</style>
