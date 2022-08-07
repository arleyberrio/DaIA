<template>
    
        <v-navigation-drawer permanent>                  
        <v-list
            nav
            dense
        >
                <v-list-item-icon>
                    <v-icon class="ml-2 mr-4">mdi-database</v-icon>
                    Datos: dataset1
                </v-list-item-icon>
                <h4 style="color:#878787" class="ml-2 mb-2">Campos</h4>
                <v-list-item-group
                v-model="selectedItem"
                color="primary"
                >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
                <v-divider ></v-divider>
                <v-list-item-icon>
                    <v-icon class="mr-4">mdi-cog-outline</v-icon>
                    Configuración
                </v-list-item-icon>
                <h4 class="mb-2" style="color:#878787">Agregar Campo</h4>
                <input style="background-color:#E0E0E0; border-radius: 10px;"/>
                <h4 class="mt-2" style="color:#878787">Visualizaciones</h4>
                <v-row>
                    <v-col class="mt-2">                
                            <v-icon>mdi-chart-line-variant</v-icon>                                    
                    </v-col>
                    <v-col class="mt-2">                
                            <v-icon>mdi-equalizer</v-icon>                                    
                    </v-col>
                    <v-col class="mt-2">                
                            <v-icon>mdi-chart-pie</v-icon>                                    
                    </v-col>
                    <v-col class="mt-2">                
                            <v-icon>mdi-microsoft</v-icon>                                    
                    </v-col>            
                </v-row>
        </v-list>
        </v-navigation-drawer>  
</template>
<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'Columna 1', icon: 'mdi-equalizer' },
        { text: 'Columna 2', icon: 'mdi-equalizer' },
        { text: 'Columna 3', icon: 'mdi-equalizer' },
        { text: 'Columna 4', icon: 'mdi-equalizer' },
        { text: 'Columna 5', icon: 'mdi-equalizer' },                
      ],
    }),
  }  
</script>