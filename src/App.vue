<template>
  <v-app>
    <v-main>
      <tool-bar></tool-bar>
      <barra-lateral></barra-lateral>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import barraLateral from './components/barraLateral.vue';
import toolBar from './components/toolBar.vue';
export default {
  name: 'App',
  components: {
  barraLateral,
  toolBar
  },
  data: () => ({
    //
  }),
};
</script>