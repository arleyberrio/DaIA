<template>
    <v-card max-width="950" class="mt-5">
            <v-toolbar flat>                                                
                <v-tabs                    
                fixed-tabs
                >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab
                        href="#mobile-tabs-5-1"
                        class="primary--text"
                    >
                        <v-icon>mdi-note-plus-outline</v-icon>
                        Add page
                    </v-tab>
                    <v-tab
                        href="#mobile-tabs-5-2"
                        class="primary--text"
                    >
                        <v-icon>mdi-database</v-icon>
                        Add data
                    </v-tab>
                    <v-tab
                        href="#mobile-tabs-5-3"
                        class="primary--text"
                    >
                        <v-icon>mdi-equalizer</v-icon>
                        Add grafic
                    </v-tab>
                    <v-tab
                        href="#mobile-tabs-5-4"
                        class="primary--text"
                    >
                        <v-icon>mdi-image-plus-outline</v-icon>
                        Add image
                    </v-tab>
                    <v-tab
                        href="#mobile-tabs-5-5"
                        class="primary--text"
                    >
                        <v-icon>mdi-pencil-outline</v-icon>
                        Add text
                    </v-tab>

                    <v-tab
                        href="#mobile-tabs-5-6"
                        class="primary--text"
                    >
                        <v-icon>mdi-valve-open</v-icon>
                        Add filter
                    </v-tab>
                </v-tabs>                
                    </v-toolbar>
                        <v-tabs-items v-model="tabs">
                        <v-tab-item
                            v-for="i in 6"
                            :key="i"
                            :value="'mobile-tabs-5-' + i"
                        >                    
                        </v-tab-item>
            </v-tabs-items>
        </v-card>
</template>