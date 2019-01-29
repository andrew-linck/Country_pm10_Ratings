const getAQ = function(countryCode){
  const queryURL = `https://api.openaq.org/v1/latest?country=${countryCode}`;
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
  })
}