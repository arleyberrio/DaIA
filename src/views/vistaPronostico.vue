<template>    
    <div>
        <v-row class="mt-15 pl-15">
            <v-col class="text-center" cols="3">
                <v-file-input class="bakgroundColorBlue" prepend-icon="mdi-tray-arrow-up" label="Cargar datos"  >
                </v-file-input>
                <v-divider class="mt-15"></v-divider>
                <h2 class="mt-15">Seleccione el modelo</h2>
                <template>
                    <div class="text-center">
                        <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="rgba(194, 224, 243, 0.507)"
                            v-bind="attrs"
                            v-on="on"
                            >
                            <v-icon>mdi-file-chart</v-icon>
                            Modelos
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                            @click="calcularPresicion(item.action)"
                            >
                            <v-icon>{{item.icon}}</v-icon>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                    </div>
                </template>
                <h2 class="mt-15">Presición del modelo</h2>
                <v-progress-linear
                    color="#24A0DA"
                    :value=precisionModeloSelect
                    height="30"
                    class="mt-7"
                    rounded
                > {{precisionModeloSelect}}% </v-progress-linear>
            </v-col>
            <v-col cols="9">
            <template>
                <iframe src="@/assets/graficaPronostico.html"></iframe>
            </template>
            </v-col>
        </v-row>
    </div>
</template>



}
<script>
  export default {
    data () {
      return {
        precisionModeloSelect:0,
        items: [
          { title: 'Modelo 1', icon: 'mdi-chart-bell-curve', action:'calcularPresicion1' },
          { title: 'Modelo 2', icon: 'mdi-chart-histogram', action:'calcularPresicion2' },
          { title: 'Modelo 3', icon: 'mdi-graph', action:'calcularPresicion3'},
        ]
      }
    },
    methods: {
        calcularPresicion(action){
            if(action == "calcularPresicion1") {
                this.precisionModeloSelect=60
            } else if (action === "calcularPresicion2") {
                this.precisionModeloSelect=85
            } else if (action == "calcularPresicion3") {
                this.precisionModeloSelect=94
            }
        }
    }
  }
</script>
<style >
.bakgroundColorBlue {
  background-color: rgba(194, 224, 243, 0.507);
  color: greyblue;
}
</style>