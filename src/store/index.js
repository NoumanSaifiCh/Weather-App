import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentWeather: [],
    currentForecast: [],
  },
  getters: {},

  actions: {
    Devicelocation(context) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser or block.");
      }
      
      function showPosition(position) {
        let key = "082a56d143cac1c10d718f47ae65c923";
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(position.coords.longitude, position.coords.latitude);

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            const result = data;
            context.commit("SetDeviceLocationForecast", result);
          });

          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = data;
              context.commit("SetDeviceLocationResult", result);
            });
      }
    },

    Getweather(context, query) {
      let Base_url = "https://api.openweathermap.org/data/2.5/";
      let key = "082a56d143cac1c10d718f47ae65c923";

      fetch(`${Base_url}weather?q=${query}&lat=44.34&lon=10.99&cnt=7&appid=${key}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const result = data;
          context.commit("SetWeatherResult", result);
        });
    },
  },

  mutations: {
    SetDeviceLocationResult(state, result) {
      state.currentWeather = result;
    },

    SetDeviceLocationForecast(state, result){
    state.currentForecast=result;
    },

    SetWeatherResult(state, result) {
      state.currentWeather = result;
    },
  },
});
