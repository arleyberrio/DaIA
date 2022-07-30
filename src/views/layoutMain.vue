<template>    
    <v-main class="pa-0">
        <transition :name="transitionName" :mode="transitionMode">
        <router-view></router-view>
        </transition>
    </v-main>
</template>
<script>
export default {
    name:'layoutMain',
    data(){
        return{
            transitionName: 'fade',
            transitionMode: 'in-out',
        }
    }
}
</script>
