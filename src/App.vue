<template>
  <v-app>
    <v-main>
      <barra-lateral></barra-lateral>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import barraLateral from './components/barraLateral.vue';
export default {
  name: 'App',
  components: {
  barraLateral
  },
  data: () => ({
    //
  }),
};
</script>