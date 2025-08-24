<template>
  <div id="app">
    
    <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/project-1-icon.png",
  "img/projects/project-2-icon.png",
  "img/projects/project-3-icon.png"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
}
a:hover, .router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.download-btn {
  display: inline-block;
  padding: 10px 18px;
  margin-top: 16px;
  border-radius: 6px;
  border: 2px solid #5a78af;   /* accent color border */
  background: #fff;            /* white background */
  color: #5a78af;              /* accent color text */
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.2s ease, color 0.2s ease, transform 0.05s ease;
}

.download-btn:hover {
  background: #5a78af;         /* filled on hover */
  color: #fff;                 /* invert text for readability */
}

.download-btn:active {
  transform: translateY(1px);
}

.subtitle {
  font-size: 0.95rem;
  font-style: italic;
  color: #555;
  margin: 10px 0 20px;
}

.two-col {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  align-items: flex-start;   /* text and video start at the top */
  margin: 24px 0;
}

.two-col .text {
  flex: 1 1 50%;             /* left column takes half */
  min-width: 250px;
}

.two-col .video {
  flex: 1 1 50%;             /* RIGHT column takes the other half */
  display: flex;
  justify-content: center;   /* center the iframe inside this half */
  align-items: center;
}

.two-col .video iframe.youtube {
  display: block;
  width: 100%;
  max-width: 560px;          /* the actual video box you’ll see */
  aspect-ratio: 16 / 9;      /* 16:9 guaranteed */
  height: auto;
  border: 0;
}

@media (max-width: 768px) {
  .two-col {
    flex-direction: column;
  }
  .two-col .video {
    flex: 1 1 auto;
  }
  .two-col .video iframe.youtube {
    max-width: 100%;
  }
}

.two-col .video iframe.youtube { max-width: 560px !important; }

</style>
