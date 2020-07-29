/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var request = require('request'); // "Request" library

const client_id = 'fe75f206e45d40dc81c0e21dfba40054'; // Your client id
const client_secret = '21068bd3ec2e48d2bc4fa04fdd8d7fba'; // Your secret

let tracknames = []
let tracklinks = []
let playlistContainer = document.getElementById("playlist-container")
var temp

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token
    var options = {
      url: 'https://api.spotify.com/v1/playlists/0Jbyjzx2J6nmlHjOwp26hi/tracks',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    }
    request.get(options, function(error, response, body) {
      body.items.forEach(item => {
        temp = document.createElement('div')
        temp.className = 'track'
        temp.innerHTML = "<a href='"+item.track.external_urls.spotify+"'>"+item.track.name+"</a>"
        playlistContainer.appendChild(temp)
        tracknames.push(item.track.name)
        tracklinks.push(item.track.external_urls.spotify)
      })
    })
  }
})



// for (var track in tracknames) {
//     var newElement = document.createElement('div');
//     newElement.className = "track";
//     newElement.innerHTML = tracknames[track];
//     playlistContainer.appendChild(newElement);
// }

// for (i = 0; i < 20; i++) {
//     temp = document.createElement('div');
//     temp.className = 'track';
//     temp.innerHTML = tracknames[i];
//     console.log(tracknames[i])
//     playlistContainer.appendChild(temp);
// }

// console.log(tracknames)
// console.log(tracklinks)