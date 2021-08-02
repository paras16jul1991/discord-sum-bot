var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://instagram29.p.rapidapi.com/user/USER_NAME/media',
  headers: {
    'x-rapidapi-key': 'TOKEN',
    'x-rapidapi-host': 'instagram29.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});