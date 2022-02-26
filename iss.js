const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
/*  const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  request('https://api64.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
    } 
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body)["ip"]
    callback(null, ip);
  })
} */

const fetchCoordsByIP = function(ip, callback){
 // inside the request callback ...
  // error can be set if invalid domain, user is offline, etc.
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
  if (error) {
    callback(error, null);
    return;
  }
  // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
  const { latitude, longitude } = JSON.parse(body);
  callback(null, { latitude, longitude });
})
}

//module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };