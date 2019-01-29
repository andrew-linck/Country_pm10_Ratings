const getCountryCode = function(countryName){
  const queryURL = `https://restcountries.eu/rest/v2/name/${countryName}`;
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    getAQ(response[0].alpha2Code);
  })
} 