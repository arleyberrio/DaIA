<template>

  <v-card 
    app
    permanent
    flat
    tile>
    <v-toolbar >
      <v-toolbar-title><strong>Hola Juan </strong><br>
  <h6 style="color: gray;">Espero que tengas un gran día</h6></v-toolbar-title>
     
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>


            <template>
            <div class="text-center">
                <v-menu >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    v-bind="attrs"
                    v-on="on"
                    elevation="0"
                    >
                    <v-avatar
                        color="indigo"
                        size="36"
                        >
                        <v-img src="https://daiaimagines.s3.amazonaws.com/juanImg.jpg"></v-img>
                        </v-avatar>
                    <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >

                    <v-list-item-title style="cursor: pointer;"><v-icon>{{item.icon}}</v-icon>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            </template>
    </v-toolbar>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Perfil', icon: 'mdi-account' },
          { title: 'Configuración de cuenta', icon: 'mdi-cog-outline' },
          { title: 'Cerrar sesión', icon: 'mdi-logout-variant' },
        ]
      }
    },
    methods: {
   
      },
  }
  
</script>