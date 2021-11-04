const request = require("request");
let breedname = process.argv.slice(2, 3);
let stringbreed = breedname.toString();
console.log(typeof stringbreed);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${stringbreed}`,
  function(error, response, body) {
    if (error) {
      console.log("Api not found");
      return;
    }
    // console.error('Breed not found', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    // console.log('data', data);
    // console.log('type of data', typeof data);
    if (!data[0]) {
      console.log("Breed not found");
    } else {
      console.log(data[0].description);
    }
    //   console.log('what is body', typeof body);
  }
);
