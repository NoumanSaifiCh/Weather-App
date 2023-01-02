<template>
  <v-container fluid>
    <v-row no-gutters>
      <!-- side bar -->
      <v-col cols="12" md="1" sm="12">
        <v-card class="pa-1 grey lighten-5 text-center rounded-lg" outlined tile>
          <SideBar />
        </v-card>
      </v-col>

      <!-- Today Plans -->
      <v-col cols="12" md="7" sm="12">
        <v-card class="pa-1 white" outlined tile>
          <DayWeatherForcast />
        </v-card>
      </v-col>



      <v-col cols="12" md="4" sm="12">
        <v-card class="pa-1 grey lighten-5" outlined tile>
          <weekDays />
        </v-card>
      </v-col>



    </v-row>
  </v-container>
</template>
      
<script>

import SideBar from './SideBar.vue';
import DayWeatherForcast from './DayWeatherForcast.vue';
import weekDays from './weekDays.vue';

export default {
  name: 'IndexPage',
  components: {
    SideBar,
    DayWeatherForcast,
    weekDays,
  },

  data() {
    return {
      Base_url: "https://api.openweathermap.org/data/2.5/",
      key: "082a56d143cac1c10d718f47ae65c923",
      query: "Lahore",
      weather: [],

    };
  },

  mounted() {
    this.$store.dispatch("Devicelocation")
  },

}


</script>
      
<style scoped>

</style>