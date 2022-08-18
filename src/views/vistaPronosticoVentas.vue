<template>    
    <div>
         <v-row align="center" justify="center" v-if="!isActive" class="mt-5  pl-15">
            <v-card width="400" class="text-center" cols="3">
                <h3 class="mt-15">Seleccione el conjunto de datos de <strong>ventas</strong></h3>
                <template>
                    <div class="text-center">
                        <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            block
                            class="blue--text"
                            color="rgba(194, 224, 243, 0.507)"
                            v-bind="attrs"
                            v-on="on"
                            >
                            <v-icon>mdi-database-alert</v-icon>
                            Datos
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                            v-for="(item, index) in items1"
                            :key="index"
                            @click="asignarValor(item)"
                            >
                            <v-icon>{{item.icon}}</v-icon>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                    </div>
                </template>
                <v-alert
                v-if="dataSelect"
                class="mt-2"
                type="success"
                > Conjunto de datos seleccionado: {{dataSelectName}}</v-alert>
                <v-btn
                    class="white--text mt-2"
                    color="#3734A9"
                    rounded
                    large
                    @click="calcularPrecision()"
                    >
                    Ejecutar modelo
                </v-btn>
                <v-divider class="mt-2"></v-divider>
                <h3 class="mt-7">Precisión del modelo</h3>
                <v-progress-linear
                    color="#24A0DA"
                    :value=precisionModeloSelect
                    height="30"
                    class="mt-7"
                    rounded
                > {{precisionModeloSelect}}% </v-progress-linear>
                <v-divider class="mt-1"></v-divider>
                <h3 class="mt-7">Numero de observaciones</h3>
                <v-alert
                    color="rgba(194, 224, 243, 0.507)"
                    class="text-center blue--text" 
                    align="center" 
                    justify="center"
                    dense
                >
                {{numObservaciones}}
                </v-alert>
                    
                    <v-divider class="mt-2"></v-divider>
                <h3 class="mt-2">Periodo del pronóstico</h3>
                     <seccion-calendarios></seccion-calendarios>  
                <v-btn
                    class="white--text mt-7"
                    color="#3734A9"
                    rounded
                    large
                    >
                    Guardar predicción
                </v-btn>
                </v-card>
        </v-row>
        <v-row v-if="isActive" class="mt-10  pl-15">
            <v-col class="text-center" cols="3">
                <h3 class="mt-15">Seleccione el conjunto de datos</h3>
                <template>
                    <div class="text-center">
                        <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            block
                            class="blue--text"
                            color="rgba(194, 224, 243, 0.507)"
                            v-bind="attrs"
                            v-on="on"
                            >
                            <v-icon>mdi-database-alert</v-icon>
                            Datos
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                            v-for="(item, index) in items1"
                            :key="index"
                            @click="asignarValor(item)"
                            >
                            <v-icon>{{item.icon}}</v-icon>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                    </div>
                </template>
                <v-alert
                v-if="dataSelect"
                class="mt-2"
                type="success"
                > Conjunto de datos seleccionado: {{dataSelectName}}</v-alert>
                <v-btn
                    class="white--text "
                    color="#3734A9"
                    rounded
                    large
                    @click="calcularPrecision()"
                    >
                    Ejecutar modelo
                </v-btn>
                <v-divider class="mt-1"></v-divider>
                <h3 class="mt-7">Precisión del modelo</h3>
                <v-progress-linear
                    color="#24A0DA"
                    :value=precisionModeloSelect
                    height="30"
                    class="mt-7"
                    rounded
                > {{precisionModeloSelect}}% </v-progress-linear>
                <v-divider class="mt-2"></v-divider>
                <h3 class="mt-7">Numero de observaciones</h3>
                <v-alert
                    color="rgba(194, 224, 243, 0.507)"
                    class="text-center blue--text" 
                    align="center" 
                    justify="center"
                    dense
                >
                {{numObservaciones}}
                </v-alert>
                    
                    <v-divider class="mt-2"></v-divider>
                <h3 class="mt-2">Periodo del pronóstico</h3>
                     <seccion-calendarios></seccion-calendarios>  
                <v-btn
                    class="white--text mt-7"
                    color="#3734A9"
                    rounded
                    large
                    >
                    Guardar predicción
                </v-btn>
                </v-col>
                <v-col cols="9">
                    <v-row 
                    justify="center">
                        <v-img 
                        v-if="viewModel"
                        src="https://daiaimagines.s3.amazonaws.com/pronosticoventas.png"
                        max-width="620"
                        >  
                        </v-img>
                    </v-row>
                    <v-row 
                    justify="center"
                    class="mt-10">
                        <v-img 
                        v-if="viewModel"
                        src="https://daiaimagines.s3.amazonaws.com/analisisfinan.png"
                        max-width="620"
                        center>                            
                        </v-img>
                    </v-row>
            </v-col>
        </v-row>
    </div>

</template>

}
<script>
import SeccionCalendarios from '../components/seccionCalendarios.vue';
  export default {
     components: {
          SeccionCalendarios,
     },

    data () {
      return {
        isActive:false,
        dataSelectName:'',
        dataSelect:false,
        viewModel:false,
        auxPrecision:'',
        precisionModeloSelect:0,
        numObservaciones:0,
        items: [
          { title: 'Modelo 1', icon: 'mdi-chart-bell-curve', action:'calcularPresicion1' },
          { title: 'Modelo 2', icon: 'mdi-chart-histogram', action:'calcularPresicion2' },
          { title: 'Modelo 3', icon: 'mdi-graph', action:'calcularPresicion3'},
        ],
        items1: [
          { title: 'Datos 1', icon: 'mdi-database', action:'calcularPresicion1' },
          { title: 'Datos 2', icon: 'mdi-database', action:'calcularPresicion2' },
          { title: 'Datos 3', icon: 'mdi-database', action:'calcularPresicion3'},
        ]
      }
    },
    watch: {
     
    },
    methods: {
        asignarValor(action){
            this.auxPrecision=action.action
            this.dataSelectName=action.title
            this.dataSelect=true
        },
        calcularPrecision(){
            if(this.dataSelect){
            this.viewModel=true
            if(this.auxPrecision == "calcularPresicion1") {
                this.precisionModeloSelect=60
                this.numObservaciones=12
            } else if (this.auxPrecision === "calcularPresicion2") {
                this.precisionModeloSelect=85
                this.numObservaciones=2
            } else if (this.auxPrecision == "calcularPresicion3") {
                this.precisionModeloSelect=94
                this.numObservaciones=4
            }
            this.isActive=true
            }
        },
        
    }
  }
</script>
<style >
.bakgroundColorBlue {
  background-color: rgba(194, 224, 243, 0.507);
  color: greyblue;
}
</style>