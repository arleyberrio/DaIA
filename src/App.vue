<template>
  <v-app>
    

    <v-main>
      
      <barra-lateral></barra-lateral>
    </v-main>
  </v-app>
</template>

<script>
import barraLateral from './views/dashBoard.vue';
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