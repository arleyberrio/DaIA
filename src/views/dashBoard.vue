<template>  
    <div>
        <toolbar-dashboard></toolbar-dashboard>   
        <v-row>
            <v-col>
                <v-row class="mt-6 ml-8"
                >
                    <v-img             
                    src="https://daiaimagines.s3.amazonaws.com/Graficas1y2.png"
                    max-width="1100"
                    >  
                    </v-img>
                </v-row> 

                <v-row class="ml-12"
                    >
                        <v-img             
                        src="https://daiaimagines.s3.amazonaws.com/Graficas3y4.png"
                        max-width="1100"
                        >  
                        </v-img>
                </v-row> 
            </v-col>
            <v-col class="ml-15">
                <lateral-derecha-dashboard></lateral-derecha-dashboard>
            </v-col>
        </v-row>                  
                        
    </div>      
</template>

<script>
import toolbarDashboard from '../components/toolbarDashboard.vue';
import lateralDerechaDashboard from '../components/lateralDerechaDashboard.vue';

export default {
    components: 
    {
        toolbarDashboard,
        lateralDerechaDashboard,
    },
}
</script>
