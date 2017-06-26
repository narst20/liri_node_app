var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
fs = require("fs");
var nodeArgs = process.argv;
var songtrack;
var tweet;
var params = {screen_name: '@narst20'};
var client;
var movie = "";
var rand;



//twitter pull
if (process.argv[2]==="my-tweets") {
	fs.readFile('keys.js', function (err, data) {
		if (err) {
			return console.error(err);
		};
		console.log("Asynchronous read: " + data.toString());
		exports.twitterKeys.get('http://api.twitter.com/1.1/statuses/user_timeline.json?', params, function(error, tweets, response) {
			if (!error) {
				console.log(tweets);
				console.log(response);
			}
		});
	});
};


//movie request pull
	if (nodeArgs[2]==="movie-this") {
		movie=nodeArgs[3];
		for (var i = 4; i < nodeArgs.length; i++) {
			movie= movie + " +" + nodeArgs[i];
		}
		queryURL="http://www.omdbapi.com/?t=" + movie;
		console.log(queryURL);
		request(queryURL, function (error, response, body) {
			console.log('error:', error);
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
			results=JSON.parse(body);
			console.log('Title:', results.Title);
			console.log('Year:', results.Year);
			console.log('IMDB Rating:', results.imdbRating); 
			console.log('Country:', results.Country); 
			console.log('Launguage:', results.Language); 
			console.log('Plot:', results.Plot); 
			console.log('Actors:', results.Actors); 
			console.log('Rotten Tomato Rating:', results.Ratings[1].Value); 
			console.log('Rotten Tomato URL:', results.Website); 
		});
	}

//spotify pull
if (nodeArgs[2]==="spotify-this-song") {
	songtrack===nodeArgs[3];
	for (var i = 4; i < nodeArgs.length; i++) {
			songtrack= songtrack + " " + nodeArgs[i];
		}
	spotify.search({ type: 'track', query: nodeArgs[3] }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	    else {
	    	console.log('Random Song:', data.tracks.items[0].name);
	    	console.log('Album:', data.tracks.items[0].album.name);
	    	console.log('Artist(s):', data.tracks.items[0].album.artists[0].name);
	    	console.log('Preview:', data.tracks.items[0].preview_url);


	    }
 
     
});
}

//do-what-it-says
	if (process.argv[2]==="do-what-it-says") {
		fs.readFile('random.txt', 'utf8', function (err, data) {
			if (err) {
				return console.error(err);
			}
			else {
				var array = data.split(',')
				spotify.search({ type: 'track', query: array[1]}, function(err, results) {
				    if ( err ) {
				        console.log('Error occurred: ' + err);
				        return;
				    }
				    else {
				    	console.log('Random Song:', results.tracks.items[0].name);
				    	console.log('Album:', results.tracks.items[0].album.name);
				    	console.log('Artist(s):', results.tracks.items[0].album.artists[0].name);
				    	console.log('Preview:', results.tracks.items[0].preview_url);
				    }
				});
			}
		});
	}
