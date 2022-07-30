<template>
    <v-navigation-drawer
      app
      permanent
      left
    >
      <template >
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="../assets/logo.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <h2>DaIA</h2>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider class="mt-8"></v-divider>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-text-box-multiple-outline</v-icon>
                </v-list-item-icon>

                
                <v-list-item-title>Banco de datos</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-chart-box-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-group
                :value="true"
                prepend-icon="mdi-chart-line"
            >
                <template v-slot:activator>
                <v-list-item-title>Pronosticos</v-list-item-title>
                </template>
                <v-list-item
                    v-for="item in items2"
                    :key="item.title"
                    link
                    @click="routePage(item.ruta)"
                >
                <v-list-item-icon class="pl-8">
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>

                    
                </v-list-item>
            </v-list-group>            
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
</template>
<script>
  export default {
    data () {
      return {
        items1: [
          { title: 'Perfil', icon: 'mdi-account' },
          { title: 'Soporte', icon: 'mdi-phone-outline' },
          { title: 'Configuración', icon: 'mdi-cog-outline' },
        ],items2: [
          { title: 'Ventas', icon: 'mdi-shopping-outline', ruta:'vistaPronosticoVentas' },
          { title: 'Inventario', icon: 'mdi-package-variant-closed',ruta:'vistaPronosticoInventarios' },
          { title: 'Agregar', icon: 'mdi-plus-circle-outline' ,ruta:'agregarPronostico'},
        ],
      }
    },
    methods: {
    routePage(page) {
       switch(page) { 
        case 'vistaPronosticoVentas': 
        this.$router.push({path: '/vistaPronosticoVentas',name: 'vistaPronosticoVentas'});
        break;
        case 'vistaPronosticoInventarios': 
        console.log("pronosticos")
        this.$router.push({path: '/vistaPronosticoInventarios',name: 'vistaPronosticoInventarios'}) ;
        break;
        default:
          console.log("Aún no hay mas opciones");
       }
      },
  }
  }
</script>