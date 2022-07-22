<template>
  <v-card height="700px">
    <v-navigation-drawer
      absolute
      permanent
      left
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="../assets/logo.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <h2>DaIA</h2>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider class="mt-12"></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="mt-15"></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items1"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-home-city' },
          { title: 'Mis datos', icon: 'mdi-account' },
          { title: 'Pronosticos', icon: 'mdi-account-group-outline' },
        ],
        items1: [
          { title: 'Perfil', icon: 'mdi-home-city' },
          { title: 'Soporte', icon: 'mdi-account' },
          { title: 'Configuración', icon: 'mdi-account-group-outline' },
        ],
      }
    },
  }
</script>