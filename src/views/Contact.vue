<template>
  <section class="contact">
    <h1>{{ t('contact.title') }}</h1>
    <p>{{ t('contact.blurb') }}</p>

    <ul>
      <li>
        <i class="fa fa-envelope-o fa-lg fa-fw"></i>
        <a href="mailto:ilufus@gmail.com" target="_blank">ilufus@gmail.com</a>
      </li>
      <li>
        <i class="fa fa-linkedin fa-lg fa-fw" style="vertical-align: -5%;"></i>
        <a href="https://www.linkedin.com/in/ilya-rudnev/" target="_blank">https://www.linkedin.com/in/ilya-rudnev/</a>
      </li>
    </ul>

  </section>
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
.contact {
  min-height: 595px;   
  margin: 24px 0 16px;
  box-sizing: border-box;
}

.header-text h1 {
  margin: 0;
  /* kill browser defaults */
  font-size: 2rem;
  line-height: 1.2;
}

ul {
  list-style: none;
  padding-inline-start: 0px;
}

li {
    line-height: 1.8em;
    font-size: 1.2em;
  }

@media only screen and (min-width: 620px){
  ul {
    padding-inline-start: 40px;
  }

  li {
    line-height: 2em;
    font-size: 1.4em;
  }
}

i {
  margin-right: 20px;
}
</style>
