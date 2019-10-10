const darkSky = require ('./weather.js')
const geocode = require ('./geocode.js')

//default values (Mty)
var city = "Shanghai"

var coord = geocode.getCoordinates(city)

var lat = coord[0]
var long = coord[1]

darkSky.getWeather(lat, long);

