const getAQ = function(countryCode){
  const queryURL = `https://api.openaq.org/v1/latest?country=${countryCode}&parameter=pm10`;
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    getAverage(response);
  })
}

const getAverage = function (response) {
  let pm10Avg = 0;
  for(let i = 0; i < response.results.length; i++)
  {
    pm10Avg += response.results[i].measurements[0].value;
  }
  pm10Avg /= response.results.length;
  console.log(pm10Avg);
}