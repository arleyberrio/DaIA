<template>
  <v-app>
    <v-main>
      <barra-lateral></barra-lateral>
      <vista-pronostico-vue></vista-pronostico-vue>
      
      
    </v-main>
  </v-app>
</template>

<script>
import barraLateral from './components/barraLateral.vue';
import vistaPronosticoVue from './views/vistaPronosticoVentas.vue';
export default {
  name: 'App',
  components: {
  barraLateral,
    vistaPronosticoVue
  },
  data: () => ({
    //
  }),
};
</script>