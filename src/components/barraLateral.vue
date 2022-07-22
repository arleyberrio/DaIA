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

      <v-divider class="mt-10"></v-divider>
            <v-list>
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
                >
                <v-list-item-icon class="pl-8">
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>

                    
                </v-list-item>
            </v-list-group>
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
                </v-list-item-icon>

                
                <v-list-item-title>Mis datos</v-list-item-title>
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
          { title: 'Dashboard', icon: 'mdi-chart-box-outline', action:'empty' },
          { title: 'Mis datos', icon: 'mdi-card-account-mail-outline' , action:'empty'},
          { title: 'Pronosticos', icon: 'mdi-chart-line' , action:'desplegarMenu'},
        ],
        items1: [
          { title: 'Perfil', icon: 'mdi-account' },
          { title: 'Soporte', icon: 'mdi-phone-outline' },
          { title: 'Configuración', icon: 'mdi-cog-outline' },
        ],items2: [
          { title: 'Ventas', icon: 'mdi-shopping-outline' },
          { title: 'Inventario', icon: 'mdi-package-variant-closed' },
          { title: 'Agregar', icon: 'mdi-plus-circle-outline' },
        ],
        menuPronosticoVisible:false,
      }
    },
    methods: {
   menuActionClick(action) {
      if (action === "empty") {
        alert('TEST!!')
      } else if (action === "desplegarMenu") {
        this.menuPronosticoVisible=true
      }
    }
  }
  }
</script>