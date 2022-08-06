<template>  
    <div>   
        <toolbar-dashboard></toolbar-dashboard>             
        <v-row class="mt-6 ml-8"
            justify="left">
                <v-img             
                src="../assets/Graficas1y2.png"
                max-width="1100"
                >  
                </v-img>
        </v-row> 

        <v-row class="ml-12"
            justify="left">
                <v-img             
                src="../assets/Graficas3y4.png"
                max-width="1100"
                >  
                </v-img>
        </v-row>                 
    </div>      
</template>

<script>
import toolbarDashboard from '../components/toolbarDashboard.vue';

export default {
    components: 
    {
        toolbarDashboard,     
    },
}
</script>
