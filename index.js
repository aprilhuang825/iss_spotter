//const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
}); */
fetchCoordsByIP('207.6.78.34', (error, coordinates) =>{ 
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);

});