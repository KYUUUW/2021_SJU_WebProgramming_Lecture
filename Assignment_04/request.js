var axios = require('axios').default;

module.exports = () => {
  setTimeout(async () => {
    const response = await axios.get("http://localhost:8080");
    console.log(response.data);
  }, 1000);
};
