<template>
    <v-container fluid>
        <v-row no-gutters class="d-flex flex-md-column  flex-lg-column">

            <v-row class="text-center pa-2 justify-center">
                <v-row class="d-flex align-center justify-center my-0 my-n5">
                    <v-col cols="12" sm="6" md="9">
                        <v-text-field class="" v-model="query" color="grey" outlined
                            label="Search for cities"></v-text-field>
                    </v-col>
                    <v-btn class="mt-n8" @click="HandleAPI" depressed color="blue darken-1" elevation="2">
                        Submit
                    </v-btn>

                </v-row>
            </v-row>


            <v-row class=" pt-6 d-flex align-center ">
                <div class=" d-flex flex-column pa-0 ml-8">

                    <div>
                        <h1>{{ setWeather.name }}</h1>
                        <span>Humidity: {{ setWeather.main.humidity }}</span>
                    </div>

                    <div>
                        <h1>{{ setWeather.main.temp
                        }}</h1>
                    </div>

                </div>
                <v-spacer></v-spacer>
                <div class=" justify-center d-flex align-center ml-10 pa-2">
                    <v-img max-height="200" max-width="250" src="../assets/sun.png"></v-img>
                </div>
            </v-row>

            <v-row class="mt-2 d-flex flex-column rounded-lg grey lighten-5 ">
                <v-row><span class="text-uppercase grey--text pa-3">Today's Forcase</span></v-row>



                <v-container class="grey lighten-5  ">
                    <v-row no-gutters
                        class="d-sm-flex justify-space-between flex-md-row flex-sm-column align-center text-center ">
                        <v-col cols="12" sm="1" md="2" class=" d-flex justify-center">
                            <div class="pa-2 bordernone" outlined tile>
                                <span>6:00 AM</span>
                                <v-img max-height="50" max-width="50" src="../assets/sun.png"></v-img>
                                <h2>25*</h2>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="1" md="2" class=" d-flex justify-center">
                            <div class="pa-2" outlined tile>
                                <span>6:00 AM</span>
                                <v-img max-height="50" max-width="50" src="../assets/sun.png"></v-img>
                                <h2>25*</h2>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="1" md="2" class=" d-flex justify-center">
                            <div class="pa-2" outlined tile>
                                <span>6:00 AM</span>
                                <v-img max-height="50" max-width="50" src="../assets/sun.png"></v-img>
                                <h2>25*</h2>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="1" md="2" class=" d-flex justify-center">
                            <div class="pa-2" outlined tile>
                                <span>6:00 AM</span>
                                <v-img max-height="50" max-width="50" src="../assets/sun.png"></v-img>
                                <h2>25*</h2>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="1" md="2" class=" d-flex justify-center">
                            <div class="pa-2" outlined tile>
                                <span>6:00 AM</span>
                                <v-img max-height="50" max-width="50" src="../assets/sun.png"></v-img>
                                <h2>25*</h2>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="1" md="2" class=" d-flex justify-center">
                            <div class="pa-2" outlined tile>
                                <span>6:00 AM</span>
                                <v-img max-height="50" max-width="50" src="../assets/sun.png"></v-img>
                                <h2>25*</h2>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>

            <v-row class=" pa-1 ">
                <v-row class="d-flex  mx-4 mt-1">
                    <v-col cols="12" sm="6" md="9">
                        <h3 class="text-uppercase grey--text">Air Condition</h3>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-btn class="my-1" depressed color="blue lighten-4" elevation="0">
                        See More
                    </v-btn>

                </v-row>
            </v-row>


            <v-row class="d-flex align-center ">
                <div class="d-flex flex-column pa-2 ml-8">
                    <div>
                        <span class="grey--text"><v-icon>mdi-thermometer</v-icon>Visibility </span>
                        <h3>{{ setWeather.visibility }}</h3>
                    </div>

                    <div>
                        <span class="grey--text"><v-icon>mdi-water</v-icon>Clouds</span>
                        <h3>{{ setWeather.clouds.all }}%</h3>
                    </div>

                </div>
                <v-spacer></v-spacer>
                <div class=" d-flex flex-column pa-0 ml-8">
                    <div>
                        <span class="grey--text"><v-icon>mdi-weather-windy</v-icon>Wind </span>
                        <h3>{{ setWeather.main.pressure }}</h3>
                    </div>

                    <div>
                        <span class="grey--text"><v-icon>mdi-white-balance-sunny</v-icon>Pressure</span>
                        <h3>{{ setWeather.main.pressure }}</h3>
                    </div>

                </div>

            </v-row>

        </v-row>
    </v-container>
</template>
      
<script>

export default {
    name: 'DayWeatherForcast',

    data() {
        return {
            Base_url: "https://api.openweathermap.org/data/2.5/",
            key: "082a56d143cac1c10d718f47ae65c923",
            query: "",
            weather: [],

        };
    },


    computed: {
        setWeather() {
            return this.$store.state.currentWeather;
        },

        setForecast() {
            return this.$store.state.currentForecast;
        },
    },


    mounted() {

        this.$store.dispatch("Getweather", this.query)

    },
    methods: {

        HandleAPI() {
            this.$store.dispatch("Getweather", this.query)
        },

    }


}
</script>
      
<style scoped>


</style>