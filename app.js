const getCountryInput = function (event) {
    event.preventDefault();
    const countryName = $("#userInput").val().trim();
    getCountryCode(countryName);
}

$("#searchButton").on("click", getCountryInput);

// getCountryCode(countryName);