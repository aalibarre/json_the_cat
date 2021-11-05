const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
    request(
        `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
        function(error, response, body) {
          if (error) {
            callback(error);
            return;
          }
          const data = JSON.parse(body);
          
          if (!data[0]) {
           callback(error, "This breed does not exist.");
          } else {
            callback(error, data[0].description);
          }
        }
      );       
};

 
module.exports = {fetchBreedDescription}; 
