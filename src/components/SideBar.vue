<template>
    <v-container fluid >
      <v-row no-gutters class="d-flex flex-md-column flex-sm-row flex-lg-column">

        <v-row class="text-center pa-2 justify-center">
      <v-icon size="35px" class="rounded-lg blue-grey lighten-4" color="blue"> mdi-weather-windy</v-icon>
    </v-row>

    <v-row class="text-center pa-2 justify-center d-flex flex-column " >
      <v-icon size="35px" class="pa-2 " color="grey"> mdi-weather-pouring </v-icon>
      <span class="font-weight-black ">Weather</span>
    </v-row>

    <v-row class="text-center pa-2 justify-center d-flex flex-column " >
      <v-icon size="35px" class="pa-2 " color="grey lighten-1"> mdi-format-list-bulleted </v-icon>
      <span class="font-weight-bold grey--text">Cities</span>
    </v-row>

    <v-row class="text-center pa-2 justify-center d-flex flex-column " >
      <v-icon size="35px" class="pa-2 " color="grey lighten-1"> mdi-map </v-icon>
      <span class="font-weight-bold grey--text">Map</span>
    </v-row>

    <v-row class="text-center pa-2 justify-center d-flex flex-column " >
      <v-icon size="35px" class="pa-2 " color="grey lighten-1"> mdi-tune </v-icon>
      <span class="font-weight-bold grey--text">Setting</span>
    </v-row>

      </v-row>
    </v-container>
  </template>
      
  <script>
 
  export default {
    name: 'SideBar',
  
    data() {
      return {
  
      };
    }
  }
  </script>
      
  <style scoped>
  
  </style>