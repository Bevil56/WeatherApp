Skystery
============

**Skystery** is an real-time weather forecast web developed in Vanilla Javascript.



## Features
### Current Weather

* `Search by Location`: Users can search for weather conditions by entering a city name or using GPS to get weather updates for their current location.

* `Air Quality`: Provides current air quality index (AQI) and detailed information about pollutants.

* `Sunrise and Sunset Times`: Displays the times for sunrise and sunset for the current location.

* `Humidity`: Shows the current humidity level as a percentage.

* `Pressure`: Displays the atmospheric pressure in hPa (hectopascals).

* `Visibility`: Indicates the current visibility range in kilometers.
* `Feels Like`: Provides the "feels like" temperature, considering wind chill or heat index.

### 5-Day Weather Forecast
* `Daily Overview`: Displays temperature for the next 5 days.

### Hourly Forecast
* `Hourly Weather`: Provides temperature forecasts by the hour for the current day
* `Wind Direction and Speed`: Shows the wind direction and speed in km/h for each hour.


## How to build

1) Clone the repository

```bash
$ git clone https://github.com/bevil/Skystery.git
```

2) Get the API key

* Open [openweathermap.org](http://openweathermap.org/) and sign up your account.
* Choose `My API keys` option and get the API key.

3) Configure the API key

* Open the file `assets/js/api.js` and replace `api_key` with your key.

4) Run
* Run the `index.html`
