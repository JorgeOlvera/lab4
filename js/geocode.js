
const credentials = require('./credentials.js')
const request = require('request')


const getCoordinates = function(city) { 
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city + ".json?access_token=" + credentials.MapboxApikey;
  console.log(url)
  request({ url, json: true }, function(error, response) {
      if (error) {
          consolelog(error.Error)
      } else {
          const data = response.body
  
          if (data.Response == 'False') {
          console.log('Error: ' + data.Error)
          } else {
          const info = {
            latitude : data.features[1].geometry.coordinates[0],
            longitude: data.features[1].geometry.coordinates[1]

          }
          console.log(info)

          return info
          

        }
      }
  
      })  

  
}

module.exports = {
  getCoordinates: getCoordinates
}

console.log(getCoordinates("Monterrey"))

  