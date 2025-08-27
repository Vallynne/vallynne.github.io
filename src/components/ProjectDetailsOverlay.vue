<template>
  <transition name="fade">
    <div v-if="visible" class="modal-root" ref="root" tabindex="0" @keyup.esc="$emit('close')">
      <!-- Click outside closes -->
      <div class="overlay" @click="$emit('close')"></div>

      <!-- Stop inside clicks from closing -->
      <div class="dialog" :style="{ 'background-color': color }" @click.stop>
        <h1 class="dialog-title">{{ title }}</h1>
        <div @click="$emit('close')" class="dialog-close">
          <i class="fa fa-times fa-lg fa-fw"></i>
        </div>

        <div class="dialog-content">
          <div v-html="htmlContent"></div>

          <div class="dialog-bottom">
            <a @click="$emit('close')" class="dialog-close-button">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
  },
  methods: {
    getImage(url: string) {
      console.log("fetching image " + url);
    }
  },
  watch: {
    visible(newVal: boolean) {
      // lock/unlock background page scroll
      document.body.style.overflow = newVal ? 'hidden' : '';
      // focus modal so Esc works
      if (newVal) {
        this.$nextTick(() => {
          const el = this.$refs.root as HTMLElement | undefined;
          el?.focus();
        });
      }
    }
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
/* Backdrop */
.overlay {
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
}

/* Modal root fills viewport and never scrolls */
.modal-root {
  position: fixed;
  inset: 0;                 /* top:0; right:0; bottom:0; left:0 */
  outline: none;
  overscroll-behavior: contain;
  overflow: hidden;         /* prevents an extra scrollbar */
}

/* Dialog panel (no own scrollbar) */
.dialog {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color: white;

  display: flex;            /* header stays fixed; content flexes */
  flex-direction: column;

  max-height: calc(100vh - 40px);  /* respect margins */
  overflow: visible;        /* avoid scrollbar on dialog itself */
}

iframe { width: 100%; }

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  margin: 0;
  padding: 22px;
}

.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 100;
}
.dialog-close:hover { opacity: 0.6; }

/* Only this scrolls */
.dialog-content {
  /* ↓ reduced top padding only */
  padding: 8px 20px 20px;
  background-color: #fcfcfc;
  color: #696969;

  flex: 1 1 auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: calc(100vh - 40px - 72px);
}

.dialog-bottom { text-align: center; }
a.dialog-close-button {
  cursor: pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 0 auto;
}

/* Wider screens */
@media only screen and (min-width: 620px){
  .dialog {
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    max-width: 1200px;
    max-height: calc(100vh - 80px); /* 40 + 40 vertical margins */
  }

  h1.dialog-title { font-size: 1.6em; }

  .dialog-content {
    /* ↓ reduced top padding on desktop too */
    padding: 16px 40px 40px;
    max-height: calc(100vh - 120px - 88px);
  }
}
</style>
